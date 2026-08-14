const confirmedEvidence = [
  {
    sourceUrl: "https://www.luminososargonbras.com/",
    statement: "Comunicação visual: letreiros, neons, luminosos, fachadas e displays.",
  },
  {
    sourceUrl: "https://www.luminososargonbras.com/contato",
    statement: "A empresa disponibiliza solicitação de orçamento e canais de contato em São Paulo.",
  },
];

export function argonFunnelContract() {
  return {
    version: 1,
    company: { id: "argon-bras", name: "Argon-Bras Luminosos" },
    workspace: { type: "MARKETING", status: "draft" },
    objective: "Gerar solicitações qualificadas de orçamento para comunicação visual personalizada.",
    primaryConversion: "quote_request",
    confirmedEvidence,
    icp: {
      status: "HYPOTHESIS",
      statement: "Negócios e responsáveis por pontos comerciais que precisam de comunicação visual.",
    },
    funnelSteps: ["visit", "portfolio_or_proof", "quote_request", "qualified_lead", "contact", "proposal", "sale"],
    offer: { status: "HYPOTHESIS", statement: "Orçamento orientado ao projeto de comunicação visual." },
    proof: { status: "UNVERIFIED", items: [] },
    tracking: { status: "NOT_INSTRUMENTED", required: ["form_submit", "quote_request", "qualified_lead"] },
    campaign: { status: "UNCONFIGURED", spend: "NOT_INSTRUMENTED" },
    publishStatus: "draft_not_published",
    humanGates: ["publish_landing_page", "activate_paid_campaign", "increase_budget"],
    nextAction: "Criar landing page draft e validar ICP, oferta, prova e destino de leads com responsável humano.",
  };
}

export function validateArgonFunnelContract(contract) {
  const errors = [];
  for (const item of contract.proof?.items || []) {
    if (!item.evidenceUrl) errors.push("proof_requires_evidence_url");
  }
  if (contract.publishStatus === "published" && !contract.publishApproval?.approvedBy) {
    errors.push("publication_requires_human_approval");
  }
  return errors;
}
