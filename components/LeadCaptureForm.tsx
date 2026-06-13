"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useEffect, useRef, useState } from "react";
import type { Locale } from "@/lib/i18n";

type LeadPayload = {
  nome: string;
  sobrenome: string;
  cargo: string;
  area: string;
  email: string;
  whatsapp: string;
  preferredContactMode: string[];
  tamanhoEmpresa: string;
  dores: string[];
  tipoServico: string[];
  origemDados: string[];
  ferramentasBI: string[];
  frequenciaAtualizacao: string;
  dorDescricao: string;
  consentimentoLgpd: boolean;
  utmSource: string;
  utmMedium: string;
  utmCampaign: string;
  utmTerm: string;
  utmContent: string;
  hutk: string;
  pageUri: string;
  pageName: string;
};

type OptionGroup = { readonly group: string; readonly options: readonly string[] };

const STRINGS = {
  pt: {
    kicker: "Diagnóstico gratuito",
    title: "Conte o seu cenário — e receba uma recomendação personalizada",
    copy: "Nossa equipe analisa o contexto e entra em contato para estruturar um plano de inteligência analítica personalizado para sua empresa.",
    sectionBasics: "Informações básicas",
    sectionPains: "Dores e necessidades",
    firstName: "Nome *",
    lastName: "Sobrenome *",
    role: "Cargo *",
    selectPlaceholder: "Selecione",
    roleOptions: ["Diretor(a)", "Gerente", "Coordenador(a)", "Analista", "Outro(s)"],
    department: "Área *",
    departmentOptions: ["Marketing/Vendas", "Finanças", "Operações", "Logística", "RH", "TI", "Outra"],
    email: "E-mail *",
    whatsapp: "WhatsApp (opcional)",
    whatsappPlaceholder: "+55 (11) 99999-9999",
    contactMode: "Como prefere ser contatado? *",
    contactModeOptions: ["WhatsApp / Telefone", "E-mail"],
    companySize: "Tamanho da empresa (funcionários) *",
    companySizeOptions: ["1–10", "11–50", "51–250", "251–1.000", "1.001+"],
    pains: "Principais dores *",
    painOptions: [
      "Decisões lentas ou no escuro",
      "Dados demais, pouca clareza",
      "Falta de confiança nos KPIs",
      "Planilhas manuais e frágeis",
      "Retrabalho para gerar relatórios",
    ],
    services: "O que você precisa? *",
    serviceOptions: [
      "Dashboards e relatórios",
      "Otimização de dashboards existentes",
      "Automação de dados",
      "Integração entre fontes",
      "Outro(s)",
    ],
    origemDados: "Onde os dados são gerados / armazenados (opcional)",
    origemDadosPlaceholder: "Selecione as ferramentas...",
    origemDadosSelected: (n: number) => `${n} ferramenta${n > 1 ? "s" : ""} selecionada${n > 1 ? "s" : ""}`,
    origemDadosGroups: [
      {
        group: "Marketing & Publicidade",
        options: [
          "Google Analytics / GA4",
          "Meta Ads (Facebook / Instagram)",
          "Google Ads",
          "HubSpot (Marketing)",
          "Mailchimp / ActiveCampaign",
          "RD Station",
          "LinkedIn Ads",
          "TikTok Ads",
        ],
      },
      {
        group: "Vendas & CRM",
        options: [
          "Salesforce",
          "HubSpot (CRM / Vendas)",
          "Pipedrive",
          "Agendor",
          "Ploomes",
          "Moskit",
        ],
      },
      {
        group: "E-commerce",
        options: [
          "Shopify",
          "Mercado Livre",
          "WooCommerce",
          "Amazon Seller",
          "VTEX",
          "Nuvemshop",
        ],
      },
      {
        group: "Finanças & ERP",
        options: [
          "SAP ERP",
          "TOTVS (Protheus / Datasul)",
          "Oracle ERP",
          "Omie",
          "Conta Azul",
          "Sankhya",
          "SAS",
        ],
      },
      {
        group: "Operações & Logística",
        options: [
          "SAP MM / WM",
          "Microsoft Dynamics",
          "TOTVS (Logística)",
          "Infor",
        ],
      },
      {
        group: "RH",
        options: [
          "SAP SuccessFactors",
          "ADP",
          "Gupy",
          "Senior RH",
        ],
      },
      {
        group: "Dados & Cloud",
        options: [
          "PostgreSQL / MySQL",
          "SQL Server",
          "AWS (S3 / Redshift)",
          "Google BigQuery",
          "Azure (Synapse / Blob)",
          "APIs internas / próprias",
        ],
      },
      {
        group: "Outros",
        options: [
          "Excel / Google Sheets",
          "Arquivos CSV / TXT",
          "Não sei / Preciso levantar",
        ],
      },
    ] as unknown as OptionGroup[],
    ferramentasBI: "Onde os dados são apresentados (opcional)",
    ferramentasBIPlaceholder: "Selecione as ferramentas...",
    ferramentasBISelected: (n: number) => `${n} ferramenta${n > 1 ? "s" : ""} selecionada${n > 1 ? "s" : ""}`,
    ferramentasBIGroups: [
      {
        group: "Microsoft",
        options: ["Excel", "Power BI", "PowerPoint"],
      },
      {
        group: "Google",
        options: ["Google Sheets", "Looker Studio", "Google Slides"],
      },
      {
        group: "Tableau / Salesforce",
        options: ["Tableau Desktop", "Tableau Online / Server"],
      },
      {
        group: "Open Source",
        options: ["Metabase", "Grafana", "Apache Superset"],
      },
      {
        group: "Outros BI",
        options: ["Qlik Sense / QlikView", "MicroStrategy", "SAP Analytics Cloud"],
      },
      {
        group: "Comunicação",
        options: ["Slack / Microsoft Teams", "E-mail automatizado", "PDF / Relatório impresso"],
      },
      {
        group: "Sem ferramenta",
        options: ["Não temos ferramenta definida"],
      },
    ] as unknown as OptionGroup[],
    frequency: "Com que frequência precisa dos dados atualizados? *",
    frequencyOptions: [
      "Tempo real",
      "Diariamente (mais de 1x)",
      "Diariamente",
      "Semanalmente",
      "Mensalmente",
    ],
    context: "Descreva o contexto e o objetivo (opcional)",
    lgpd: "Autorizo o uso dos dados para contato comercial e registro em CRM conforme a finalidade do atendimento.",
    submit: "Solicitar diagnóstico gratuito",
    submitting: "Enviando...",
    genericError: "Não foi possível enviar agora.",
    submitError: "Falha ao enviar formulário.",
    thankYouPath: "/obrigado",
  },
  en: {
    kicker: "Free assessment",
    title: "Tell us about your scenario — and get a personalized recommendation",
    copy: "Our team reviews your context and gets in touch to outline an analytics plan tailored to your company.",
    sectionBasics: "Basic information",
    sectionPains: "Pain points and needs",
    firstName: "First name *",
    lastName: "Last name *",
    role: "Role *",
    selectPlaceholder: "Select",
    roleOptions: ["Director", "Manager", "Coordinator", "Analyst", "Other"],
    department: "Department *",
    departmentOptions: ["Marketing/Sales", "Finance", "Operations", "Logistics", "HR", "IT", "Other"],
    email: "E-mail *",
    whatsapp: "WhatsApp (optional)",
    whatsappPlaceholder: "+55 (11) 99999-9999",
    contactMode: "How would you like to be contacted? *",
    contactModeOptions: ["WhatsApp / Phone", "E-mail"],
    companySize: "Company size (employees) *",
    companySizeOptions: ["1–10", "11–50", "51–250", "251–1,000", "1,001+"],
    pains: "Main pain points *",
    painOptions: [
      "Slow decisions, or decisions in the dark",
      "Too much data, too little clarity",
      "Low trust in KPIs",
      "Manual, fragile spreadsheets",
      "Rework to produce reports",
    ],
    services: "What do you need? *",
    serviceOptions: [
      "Dashboards and reports",
      "Improving existing dashboards",
      "Data automation",
      "Integrating data sources",
      "Other",
    ],
    origemDados: "Where data is generated / stored (optional)",
    origemDadosPlaceholder: "Select tools...",
    origemDadosSelected: (n: number) => `${n} tool${n > 1 ? "s" : ""} selected`,
    origemDadosGroups: [
      {
        group: "Marketing & Advertising",
        options: [
          "Google Analytics / GA4",
          "Meta Ads (Facebook / Instagram)",
          "Google Ads",
          "HubSpot (Marketing)",
          "Mailchimp / ActiveCampaign",
          "RD Station",
          "LinkedIn Ads",
          "TikTok Ads",
        ],
      },
      {
        group: "Sales & CRM",
        options: [
          "Salesforce",
          "HubSpot (CRM / Sales)",
          "Pipedrive",
          "Agendor",
          "Ploomes",
          "Moskit",
        ],
      },
      {
        group: "E-commerce",
        options: [
          "Shopify",
          "Mercado Livre",
          "WooCommerce",
          "Amazon Seller",
          "VTEX",
          "Nuvemshop",
        ],
      },
      {
        group: "Finance & ERP",
        options: [
          "SAP ERP",
          "TOTVS (Protheus / Datasul)",
          "Oracle ERP",
          "Omie",
          "Conta Azul",
          "Sankhya",
          "SAS",
        ],
      },
      {
        group: "Operations & Logistics",
        options: [
          "SAP MM / WM",
          "Microsoft Dynamics",
          "TOTVS (Logistics)",
          "Infor",
        ],
      },
      {
        group: "HR",
        options: [
          "SAP SuccessFactors",
          "ADP",
          "Gupy",
          "Senior HR",
        ],
      },
      {
        group: "Data & Cloud",
        options: [
          "PostgreSQL / MySQL",
          "SQL Server",
          "AWS (S3 / Redshift)",
          "Google BigQuery",
          "Azure (Synapse / Blob)",
          "Internal / proprietary APIs",
        ],
      },
      {
        group: "Other",
        options: [
          "Excel / Google Sheets",
          "CSV / TXT files",
          "Not sure / Need to assess",
        ],
      },
    ] as unknown as OptionGroup[],
    ferramentasBI: "Where data is presented (optional)",
    ferramentasBIPlaceholder: "Select tools...",
    ferramentasBISelected: (n: number) => `${n} tool${n > 1 ? "s" : ""} selected`,
    ferramentasBIGroups: [
      {
        group: "Microsoft",
        options: ["Excel", "Power BI", "PowerPoint"],
      },
      {
        group: "Google",
        options: ["Google Sheets", "Looker Studio", "Google Slides"],
      },
      {
        group: "Tableau / Salesforce",
        options: ["Tableau Desktop", "Tableau Online / Server"],
      },
      {
        group: "Open Source",
        options: ["Metabase", "Grafana", "Apache Superset"],
      },
      {
        group: "Other BI",
        options: ["Qlik Sense / QlikView", "MicroStrategy", "SAP Analytics Cloud"],
      },
      {
        group: "Communication",
        options: ["Slack / Microsoft Teams", "Automated email", "PDF / Printed report"],
      },
      {
        group: "No tool",
        options: ["We don't have a defined tool"],
      },
    ] as unknown as OptionGroup[],
    frequency: "How often do you need the data refreshed? *",
    frequencyOptions: [
      "Real time",
      "Daily (more than once)",
      "Daily",
      "Weekly",
      "Monthly",
    ],
    context: "Describe your context and goal (optional)",
    lgpd: "I authorize the use of my data for business contact and CRM registration for the purpose of this service.",
    submit: "Request free assessment",
    submitting: "Sending...",
    genericError: "We couldn't send it right now.",
    submitError: "Failed to submit the form.",
    thankYouPath: "/en/thank-you",
  },
} as const;

const defaultPayload: LeadPayload = {
  nome: "",
  sobrenome: "",
  cargo: "",
  area: "",
  email: "",
  whatsapp: "",
  preferredContactMode: [],
  tamanhoEmpresa: "",
  dores: [],
  tipoServico: [],
  origemDados: [],
  ferramentasBI: [],
  frequenciaAtualizacao: "",
  dorDescricao: "",
  consentimentoLgpd: false,
  utmSource: "",
  utmMedium: "",
  utmCampaign: "",
  utmTerm: "",
  utmContent: "",
  hutk: "",
  pageUri: "",
  pageName: "",
};

function ChevronDown({ open }: { open: boolean }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      style={{
        flexShrink: 0,
        transform: open ? "rotate(180deg)" : "rotate(0deg)",
        transition: "transform 200ms ease",
      }}
    >
      <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

type MultiSelectProps = {
  label: string;
  groups: OptionGroup[];
  selected: string[];
  onChange: (values: string[]) => void;
  placeholder: string;
  selectedLabel: (n: number) => string;
};

function MultiSelectDropdown({ label, groups, selected, onChange, placeholder, selectedLabel }: MultiSelectProps) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onOutsideClick(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", onOutsideClick);
    return () => document.removeEventListener("mousedown", onOutsideClick);
  }, []);

  function toggle(opt: string) {
    onChange(selected.includes(opt) ? selected.filter((v) => v !== opt) : [...selected, opt]);
  }

  return (
    <div className="ms-dropdown" ref={containerRef}>
      <p className="field-label mb-2">{label}</p>
      <button
        type="button"
        className={`ms-dropdown-trigger${selected.length > 0 ? " ms-dropdown-trigger--active" : ""}`}
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <span>{selected.length === 0 ? placeholder : selectedLabel(selected.length)}</span>
        <ChevronDown open={open} />
      </button>
      {open && (
        <div className="ms-dropdown-panel" role="listbox" aria-multiselectable="true">
          {groups.map((grp) => (
            <div key={grp.group}>
              <p className="ms-dropdown-group-label">{grp.group}</p>
              {grp.options.map((opt) => {
                const checked = selected.includes(opt);
                return (
                  <label key={opt} className={`ms-dropdown-option${checked ? " ms-dropdown-option--checked" : ""}`}>
                    <input
                      type="checkbox"
                      checked={checked}
                      onChange={() => toggle(opt)}
                    />
                    <span>{opt}</span>
                  </label>
                );
              })}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function getHubSpotCookie(): string {
  const match = document.cookie.match(/(?:^|;\s*)hubspotutk=([^;]+)/);
  return match ? match[1] : "";
}

function identifyInHubSpot(email: string) {
  const hsq = (window as unknown as { _hsq?: unknown[] })._hsq;
  if (Array.isArray(hsq) && email) {
    hsq.push(["identify", { email }]);
    hsq.push(["trackPageView"]);
  }
}

function resolveEndpoint() {
  const configured = process.env.NEXT_PUBLIC_LEADS_ENDPOINT?.trim();
  return configured && configured.length > 0 ? configured : "/api/leads";
}

function getErrorText(payload: unknown, fallback: string): string {
  if (!payload || typeof payload !== "object") return fallback;
  const maybeError = (payload as { error?: string }).error;
  return maybeError || fallback;
}

function toggleArray(arr: string[], value: string, checked: boolean): string[] {
  return checked ? [...arr, value] : arr.filter((v) => v !== value);
}

export function LeadCaptureForm({ locale = "pt" }: { locale?: Locale }) {
  const router = useRouter();
  const t = STRINGS[locale];
  const [form, setForm] = useState<LeadPayload>(defaultPayload);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setForm((prev) => ({
      ...prev,
      utmSource: params.get("utm_source") || "",
      utmMedium: params.get("utm_medium") || "",
      utmCampaign: params.get("utm_campaign") || "",
      utmTerm: params.get("utm_term") || "",
      utmContent: params.get("utm_content") || "",
      pageUri: window.location.href,
      pageName: document.title,
    }));
  }, []);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus("idle");
    setMessage("");
    try {
      const endpoint = resolveEndpoint();
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, hutk: getHubSpotCookie() }),
      });
      const data = (await response.json()) as unknown;
      if (!response.ok) throw new Error(getErrorText(data, t.genericError));
      identifyInHubSpot(form.email);
      router.push(t.thankYouPath);
      return;
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : t.submitError);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="contato" className="mx-auto mt-20 w-full max-w-6xl px-5 sm:px-8">
      <div className="form-shell reveal-up">
        <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
          {/* Left: copy */}
          <div>
            <p className="kicker">{t.kicker}</p>
            <h2 className="section-title mt-3">{t.title}</h2>
            <p className="section-copy mt-5">{t.copy}</p>
          </div>

          {/* Right: form */}
          <form onSubmit={onSubmit} className="grid gap-6">

            {/* ── Seção 1: Informações básicas ── */}
            <p className="field-label" style={{ fontWeight: 600, fontSize: "0.78rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(240,237,232,0.45)", marginBottom: "-0.5rem" }}>
              {t.sectionBasics}
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              <label className="field-label">
                {t.firstName}
                <input
                  required
                  value={form.nome}
                  onChange={(e) => setForm((p) => ({ ...p, nome: e.target.value }))}
                  className="field-input"
                />
              </label>
              <label className="field-label">
                {t.lastName}
                <input
                  required
                  value={form.sobrenome}
                  onChange={(e) => setForm((p) => ({ ...p, sobrenome: e.target.value }))}
                  className="field-input"
                />
              </label>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <label className="field-label">
                {t.role}
                <select
                  required
                  value={form.cargo}
                  onChange={(e) => setForm((p) => ({ ...p, cargo: e.target.value }))}
                  className="field-input"
                >
                  <option value="">{t.selectPlaceholder}</option>
                  {t.roleOptions.map((v) => (
                    <option key={v} value={v}>{v}</option>
                  ))}
                </select>
              </label>
              <label className="field-label">
                {t.department}
                <select
                  required
                  value={form.area}
                  onChange={(e) => setForm((p) => ({ ...p, area: e.target.value }))}
                  className="field-input"
                >
                  <option value="">{t.selectPlaceholder}</option>
                  {t.departmentOptions.map((v) => (
                    <option key={v} value={v}>{v}</option>
                  ))}
                </select>
              </label>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <label className="field-label">
                {t.email}
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
                  className="field-input"
                />
              </label>
              <label className="field-label">
                {t.whatsapp}
                <input
                  value={form.whatsapp}
                  onChange={(e) => setForm((p) => ({ ...p, whatsapp: e.target.value }))}
                  className="field-input"
                  placeholder={t.whatsappPlaceholder}
                />
              </label>
            </div>

            <fieldset>
              <legend className="field-label mb-3">{t.contactMode}</legend>
              <div className="flex flex-wrap gap-3">
                {t.contactModeOptions.map((opt) => (
                  <label key={opt} className="checkbox-item">
                    <input
                      type="checkbox"
                      checked={form.preferredContactMode.includes(opt)}
                      onChange={(e) =>
                        setForm((p) => ({
                          ...p,
                          preferredContactMode: toggleArray(p.preferredContactMode, opt, e.target.checked),
                        }))
                      }
                    />
                    <span>{opt}</span>
                  </label>
                ))}
              </div>
            </fieldset>

            <fieldset>
              <legend className="field-label mb-3">{t.companySize}</legend>
              <div className="flex flex-wrap gap-3">
                {t.companySizeOptions.map((opt) => (
                  <label key={opt} className="checkbox-item">
                    <input
                      type="radio"
                      name="tamanhoEmpresa"
                      required
                      value={opt}
                      checked={form.tamanhoEmpresa === opt}
                      onChange={() => setForm((p) => ({ ...p, tamanhoEmpresa: opt }))}
                    />
                    <span>{opt}</span>
                  </label>
                ))}
              </div>
            </fieldset>

            {/* ── Seção 2: Dores e Necessidades ── */}
            <p className="field-label" style={{ fontWeight: 600, fontSize: "0.78rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(240,237,232,0.45)", marginBottom: "-0.5rem", marginTop: "0.5rem" }}>
              {t.sectionPains}
            </p>

            <fieldset>
              <legend className="field-label mb-3">{t.pains}</legend>
              <div className="grid gap-2 sm:grid-cols-2">
                {t.painOptions.map((opt) => (
                  <label key={opt} className="checkbox-item">
                    <input
                      type="checkbox"
                      checked={form.dores.includes(opt)}
                      onChange={(e) =>
                        setForm((p) => ({ ...p, dores: toggleArray(p.dores, opt, e.target.checked) }))
                      }
                    />
                    <span>{opt}</span>
                  </label>
                ))}
              </div>
            </fieldset>

            <fieldset>
              <legend className="field-label mb-3">{t.services}</legend>
              <div className="grid gap-2 sm:grid-cols-2">
                {t.serviceOptions.map((opt) => (
                  <label key={opt} className="checkbox-item">
                    <input
                      type="checkbox"
                      checked={form.tipoServico.includes(opt)}
                      onChange={(e) =>
                        setForm((p) => ({
                          ...p,
                          tipoServico: toggleArray(p.tipoServico, opt, e.target.checked),
                        }))
                      }
                    />
                    <span>{opt}</span>
                  </label>
                ))}
              </div>
            </fieldset>

            {/* ── Dropdowns de stack ── */}
            <MultiSelectDropdown
              label={t.origemDados}
              groups={t.origemDadosGroups as unknown as OptionGroup[]}
              selected={form.origemDados}
              onChange={(vals) => setForm((p) => ({ ...p, origemDados: vals }))}
              placeholder={t.origemDadosPlaceholder}
              selectedLabel={t.origemDadosSelected}
            />

            <MultiSelectDropdown
              label={t.ferramentasBI}
              groups={t.ferramentasBIGroups as unknown as OptionGroup[]}
              selected={form.ferramentasBI}
              onChange={(vals) => setForm((p) => ({ ...p, ferramentasBI: vals }))}
              placeholder={t.ferramentasBIPlaceholder}
              selectedLabel={t.ferramentasBISelected}
            />

            <fieldset>
              <legend className="field-label mb-3">{t.frequency}</legend>
              <div className="flex flex-wrap gap-3">
                {t.frequencyOptions.map((opt) => (
                  <label key={opt} className="checkbox-item">
                    <input
                      type="radio"
                      name="frequenciaAtualizacao"
                      required
                      value={opt}
                      checked={form.frequenciaAtualizacao === opt}
                      onChange={() => setForm((p) => ({ ...p, frequenciaAtualizacao: opt }))}
                    />
                    <span>{opt}</span>
                  </label>
                ))}
              </div>
            </fieldset>

            <label className="field-label">
              {t.context}
              <textarea
                value={form.dorDescricao}
                onChange={(e) => setForm((p) => ({ ...p, dorDescricao: e.target.value }))}
                className="field-input min-h-28"
                maxLength={1200}
              />
            </label>

            {/* ── LGPD + Submit ── */}
            <label className="checkbox-item">
              <input
                type="checkbox"
                required
                checked={form.consentimentoLgpd}
                onChange={(e) => setForm((p) => ({ ...p, consentimentoLgpd: e.target.checked }))}
                className="mt-1"
              />
              <span>{t.lgpd}</span>
            </label>

            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full disabled:opacity-60"
              >
                {isSubmitting ? t.submitting : t.submit}
              </button>
              {status !== "idle" && (
                <p className={`mt-3 text-sm ${status}`}>{message}</p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
