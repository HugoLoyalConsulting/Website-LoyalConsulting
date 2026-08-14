CREATE TABLE IF NOT EXISTS argon_quote_requests (
  id BIGSERIAL PRIMARY KEY,
  tenant_id TEXT NOT NULL DEFAULT 'argon-bras',
  workspace_type TEXT NOT NULL DEFAULT 'MARKETING',
  name TEXT NOT NULL,
  company TEXT,
  contact TEXT NOT NULL,
  project TEXT NOT NULL,
  consent BOOLEAN NOT NULL,
  consent_version TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'novo',
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  CONSTRAINT argon_quote_requests_tenant_check CHECK (tenant_id = 'argon-bras'),
  CONSTRAINT argon_quote_requests_status_check CHECK (status IN ('novo', 'contatar', 'qualificado', 'proposta', 'ganho', 'perdido'))
);

CREATE INDEX IF NOT EXISTS argon_quote_requests_created_at_idx
  ON argon_quote_requests (created_at DESC);
