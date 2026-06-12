import { z } from "zod";

export const leadSchema = z.object({
  nome: z.string().min(2, "Nome precisa ter pelo menos 2 caracteres"),
  sobrenome: z.string().max(120).optional().or(z.literal("")),
  empresa: z.string().max(200).optional().or(z.literal("")),
  setor: z.string().max(120).optional().or(z.literal("")),
  area: z.string().max(120).optional().or(z.literal("")),
  areaSetor: z.string().max(120).optional().or(z.literal("")),
  cargo: z.string().max(120).optional().or(z.literal("")),
  email: z.string().email("E-mail inválido").optional().or(z.literal("")),
  whatsapp: z.string().max(25).optional().or(z.literal("")),
  preferredContactMode: z.array(z.string().max(40)).min(1, "Selecione um meio de contato"),
  dores: z.array(z.string()).min(1, "Selecione pelo menos uma dor"),
  tipoServico: z.array(z.string().max(120)).default([]),
  fontesDados: z.array(z.string().max(120)).default([]),
  frequenciaAtualizacao: z.string().max(60).optional().or(z.literal("")),
  dorDescricao: z.string().max(1200).optional().or(z.literal("")),
  tamanhoEmpresa: z.string().max(50).optional().or(z.literal("")),
  urgencia: z.string().max(50).optional().or(z.literal("")),
  consentimentoLgpd: z.boolean().refine((v) => v === true, {
    message: "Consentimento LGPD obrigatório",
  }),
  utmSource: z.string().max(120).optional().or(z.literal("")),
  utmMedium: z.string().max(120).optional().or(z.literal("")),
  utmCampaign: z.string().max(120).optional().or(z.literal("")),
  utmTerm: z.string().max(120).optional().or(z.literal("")),
  utmContent: z.string().max(120).optional().or(z.literal("")),
  // Contexto de tracking do HubSpot (cookie hutk + página de origem)
  hutk: z.string().max(120).optional().or(z.literal("")),
  pageUri: z.string().max(500).optional().or(z.literal("")),
  pageName: z.string().max(300).optional().or(z.literal("")),
});

export type LeadInput = z.infer<typeof leadSchema>;
