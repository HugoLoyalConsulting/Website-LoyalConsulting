import { z } from "zod";

export const leadSchema = z.object({
  nome: z.string().min(2, "Nome precisa ter pelo menos 2 caracteres"),
  sobrenome: z.string().min(2, "Sobrenome precisa ter pelo menos 2 caracteres"),
  cargo: z.enum(["Diretor(a)", "Gerente", "Coordenador(a)", "Analista", "Outro(s)"]),
  area: z.enum(["Marketing/Vendas", "Finanças", "Operações", "Logística", "RH", "TI", "Outra"]),
  email: z.string().email("E-mail inválido"),
  whatsapp: z.string().max(25).optional().or(z.literal("")),
  preferredContactMode: z.array(z.string()).min(1, "Selecione ao menos um canal de contato"),
  tamanhoEmpresa: z.enum(["1–10", "11–50", "51–250", "251–1.000", "1.001+"]),
  dores: z.array(z.string()).min(1, "Selecione pelo menos uma dor"),
  tipoServico: z.array(z.string()).min(1, "Selecione pelo menos um tipo de serviço"),
  fontesDados: z.array(z.string()).optional().default([]),
  frequenciaAtualizacao: z.enum([
    "Tempo real",
    "Diariamente (mais de 1x)",
    "Diariamente",
    "Semanalmente",
    "Mensalmente",
  ]),
  dorDescricao: z.string().max(1200).optional().or(z.literal("")),
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