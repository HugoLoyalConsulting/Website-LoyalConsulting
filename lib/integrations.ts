// Encaminhamento de leads para o HubSpot.
//
// Dois modos, ativados por variáveis de ambiente no Railway (sem variável = desligado):
//
// 1. Forms API (recomendado, sem token):
//    HUBSPOT_PORTAL_ID + HUBSPOT_FORM_GUID
//    Submete no formulário do HubSpot com o cookie hutk — o contato aparece com
//    a jornada completa (origem, páginas visitadas, campanha) no HubSpot.
//
// 2. Contacts API (com token de Private App):
//    HUBSPOT_ACCESS_TOKEN
//    Upsert direto do contato por e-mail. Use se não quiser criar um formulário.
//
// Se ambos estiverem configurados, a Forms API tem prioridade.
// Falhas aqui nunca quebram o salvamento do lead (fire-and-forget).

export type HubSpotLeadInput = {
  nome: string;
  sobrenome: string;
  email: string;
  whatsapp: string;
  cargo: string;
  area: string;
  tamanhoEmpresa: string;
  dores: string[];
  tipoServico: string[];
  fontesDados: string[];
  origemDados: string[];
  ferramentasBI: string[];
  frequenciaAtualizacao: string;
  dorDescricao: string;
  utmSource: string;
  utmMedium: string;
  utmCampaign: string;
  utmTerm: string;
  utmContent: string;
  hutk: string;
  pageUri: string;
  pageName: string;
  consentimentoLgpd: boolean;
};

function buildMessageSummary(lead: HubSpotLeadInput): string {
  const lines = [
    lead.dores.length ? `Dores: ${lead.dores.join("; ")}` : "",
    lead.tipoServico.length ? `Serviços de interesse: ${lead.tipoServico.join("; ")}` : "",
    lead.fontesDados.length ? `Fontes de dados: ${lead.fontesDados.join("; ")}` : "",
    lead.origemDados.length ? `Origem dos dados: ${lead.origemDados.join("; ")}` : "",
    lead.ferramentasBI.length ? `Ferramentas de BI: ${lead.ferramentasBI.join("; ")}` : "",
    lead.frequenciaAtualizacao ? `Frequência de atualização: ${lead.frequenciaAtualizacao}` : "",
    lead.tamanhoEmpresa ? `Tamanho da empresa: ${lead.tamanhoEmpresa}` : "",
    lead.area ? `Área: ${lead.area}` : "",
    lead.dorDescricao ? `Contexto: ${lead.dorDescricao}` : "",
    lead.utmSource ? `UTM: ${lead.utmSource} / ${lead.utmMedium} / ${lead.utmCampaign}` : "",
  ];
  return lines.filter(Boolean).join("\n");
}

async function submitToHubSpotForm(portalId: string, formGuid: string, lead: HubSpotLeadInput) {
  const fields = [
    { objectTypeId: "0-1", name: "email", value: lead.email },
    { objectTypeId: "0-1", name: "firstname", value: lead.nome },
    { objectTypeId: "0-1", name: "lastname", value: lead.sobrenome },
    { objectTypeId: "0-1", name: "phone", value: lead.whatsapp },
    { objectTypeId: "0-1", name: "jobtitle", value: lead.cargo },
    { objectTypeId: "0-1", name: "message", value: buildMessageSummary(lead) },
  ].filter((f) => f.value);

  const body = {
    fields,
    context: {
      ...(lead.hutk ? { hutk: lead.hutk } : {}),
      pageUri: lead.pageUri || "https://www.loyalconsulting.com.br",
      pageName: lead.pageName || "Loyal Consulting",
    },
    legalConsentOptions: {
      consent: {
        consentToProcess: lead.consentimentoLgpd,
        text: "Autorizo o uso dos dados para contato comercial e registro em CRM conforme a finalidade do atendimento.",
      },
    },
  };

  const response = await fetch(
    `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formGuid}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    }
  );

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`Forms API ${response.status}: ${text}`);
  }
}

async function upsertHubSpotContact(token: string, lead: HubSpotLeadInput) {
  const body = {
    inputs: [
      {
        idProperty: "email",
        id: lead.email,
        properties: {
          email: lead.email,
          firstname: lead.nome,
          lastname: lead.sobrenome,
          phone: lead.whatsapp,
          jobtitle: lead.cargo,
        },
      },
    ],
  };

  const response = await fetch("https://api.hubapi.com/crm/v3/objects/contacts/batch/upsert", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`Contacts API ${response.status}: ${text}`);
  }
}

export async function forwardLeadToHubSpot(lead: HubSpotLeadInput) {
  const portalId = process.env.HUBSPOT_PORTAL_ID?.trim();
  const formGuid = process.env.HUBSPOT_FORM_GUID?.trim();
  const token = process.env.HUBSPOT_ACCESS_TOKEN?.trim();

  if (!lead.email) return;

  try {
    if (portalId && formGuid) {
      await submitToHubSpotForm(portalId, formGuid, lead);
    } else if (token) {
      await upsertHubSpotContact(token, lead);
    }
  } catch (error) {
    console.error("[forwardLeadToHubSpot]", error);
  }
}
