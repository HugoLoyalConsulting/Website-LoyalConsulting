DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'lead_status') THEN
    CREATE TYPE lead_status AS ENUM ('novo', 'contatar', 'qualificado', 'proposta', 'ganho', 'perdido');
  END IF;
END $$;

CREATE TABLE IF NOT EXISTS leads (
  id SERIAL PRIMARY KEY,
  nome TEXT NOT NULL,
  empresa TEXT,
  area_setor TEXT,
  cargo TEXT,
  email TEXT,
  whatsapp TEXT,
  preferred_contact_mode TEXT NOT NULL,
  dores TEXT[] NOT NULL,
  dor_descricao TEXT,
  tamanho_empresa TEXT,
  urgencia TEXT,
  origem TEXT NOT NULL DEFAULT 'lp',
  utm_source TEXT,
  utm_medium TEXT,
  utm_campaign TEXT,
  utm_term TEXT,
  utm_content TEXT,
  consentimento_lgpd BOOLEAN NOT NULL,
  status lead_status NOT NULL DEFAULT 'novo',
  score INT NOT NULL DEFAULT 0,
  metadata JSONB NOT NULL DEFAULT '{}'::jsonb,
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP NOT NULL DEFAULT NOW(),
  last_contact_at TIMESTAMP,
  CONSTRAINT leads_contact_required CHECK (email IS NOT NULL OR whatsapp IS NOT NULL)
);

ALTER TABLE leads
  ADD COLUMN IF NOT EXISTS metadata JSONB NOT NULL DEFAULT '{}'::jsonb;

ALTER TABLE leads
  ALTER COLUMN preferred_contact_mode TYPE TEXT;

DO $$
BEGIN
  IF EXISTS (
    SELECT 1
    FROM pg_constraint
    WHERE conname = 'leads_preferred_contact_mode_check'
  ) THEN
    ALTER TABLE leads DROP CONSTRAINT leads_preferred_contact_mode_check;
  END IF;
END $$;

CREATE UNIQUE INDEX IF NOT EXISTS leads_unique_email
ON leads ((LOWER(email)))
WHERE email IS NOT NULL;

CREATE UNIQUE INDEX IF NOT EXISTS leads_unique_whatsapp
ON leads (whatsapp)
WHERE whatsapp IS NOT NULL;

CREATE TABLE IF NOT EXISTS lead_events (
  id SERIAL PRIMARY KEY,
  lead_id INT REFERENCES leads(id) ON DELETE CASCADE,
  tipo TEXT NOT NULL,
  origem TEXT NOT NULL DEFAULT 'lp',
  payload JSONB NOT NULL DEFAULT '{}'::jsonb,
  created_at TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS lead_events_tipo_created_at_idx
ON lead_events (tipo, created_at DESC);

CREATE TABLE IF NOT EXISTS estimativas_bi (
  id           SERIAL PRIMARY KEY,
  empresa      TEXT,
  nome         TEXT,
  email        TEXT,
  fontes       TEXT,
  local        TEXT,
  frequencia   TEXT,
  divergem     TEXT,
  membros      INT,
  horas_semana NUMERIC,
  horas_ano    NUMERIC,
  custo_anual  NUMERIC,
  team         JSONB NOT NULL DEFAULT '[]'::jsonb,
  lead_source  TEXT NOT NULL DEFAULT 'calculadora_bi',
  utm_source   TEXT,
  utm_medium   TEXT,
  utm_campaign TEXT,
  utm_term     TEXT,
  utm_content  TEXT,
  criado_em    TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Migração para tabelas já existentes
ALTER TABLE estimativas_bi ADD COLUMN IF NOT EXISTS lead_source  TEXT NOT NULL DEFAULT 'calculadora_bi';
ALTER TABLE estimativas_bi ADD COLUMN IF NOT EXISTS utm_source   TEXT;
ALTER TABLE estimativas_bi ADD COLUMN IF NOT EXISTS utm_medium   TEXT;
ALTER TABLE estimativas_bi ADD COLUMN IF NOT EXISTS utm_campaign TEXT;
ALTER TABLE estimativas_bi ADD COLUMN IF NOT EXISTS utm_term     TEXT;
ALTER TABLE estimativas_bi ADD COLUMN IF NOT EXISTS utm_content  TEXT;

CREATE OR REPLACE FUNCTION set_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS leads_set_updated_at ON leads;
CREATE TRIGGER leads_set_updated_at
BEFORE UPDATE ON leads
FOR EACH ROW
EXECUTE FUNCTION set_updated_at();
