export type LeadStatus = "novo" | "contatar" | "qualificado" | "proposta" | "ganho" | "perdido";

export type Lead = {
  id: number;
  nome: string;
  empresa: string | null;
  area_setor: string | null;
  cargo: string | null;
  email: string | null;
  whatsapp: string | null;
  preferred_contact_mode: "email" | "whatsapp" | "both";
  dores: string[];
  dor_descricao: string;
  tamanho_empresa: string | null;
  urgencia: string | null;
  origem: string;
  utm_source: string | null;
  utm_medium: string | null;
  utm_campaign: string | null;
  utm_term: string | null;
  utm_content: string | null;
  consentimento_lgpd: boolean;
  status: LeadStatus;
  score: number;
  created_at: string;
  updated_at: string;
};
