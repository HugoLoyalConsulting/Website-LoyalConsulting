import { z } from "zod";

export const leadSchema = z.object({
  nome: z.string().min(2, "Nome precisa ter pelo menos 2 caracteres"),
  empresa: z.string().max(200).optional().or(z.literal("")),
  setor: z.string().max(120).optional().or(z.literal("")),
  areaSetor: z.string().max(120).optional().or(z.literal("")),
  cargo: z.string().max(120).optional().or(z.literal("")),
  email: z.string().email("E-mail inválido").optional().or(z.literal("")),
  whatsapp: z.string().max(25).optional().or(z.literal("")),
  preferredContactMode: z.enum(["email", "whatsapp", "both"]),
  dores: z.array(z.string()).min(1, "Selecione pelo menos uma dor"),
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
});

export type LeadInput = z.infer<typeof leadSchema>;