"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useEffect, useState } from "react";
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
  fontesDados: string[];
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
    dataSources: "Fontes de dados utilizadas (opcional)",
    dataSourceOptions: ["Excel", "Google Sheets", "ERP", "CRM", "APIs", "Outro sistema / não sei"],
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
    dataSources: "Data sources you use (optional)",
    dataSourceOptions: ["Excel", "Google Sheets", "ERP", "CRM", "APIs", "Other system / not sure"],
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
  fontesDados: [],
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

// Cookie de tracking do HubSpot — permite atribuição completa da jornada
// quando o script hs-script-loader está ativo. Vazio se não estiver.
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

            <fieldset>
              <legend className="field-label mb-3">{t.dataSources}</legend>
              <div className="flex flex-wrap gap-2">
                {t.dataSourceOptions.map((opt) => (
                  <label key={opt} className="checkbox-item">
                    <input
                      type="checkbox"
                      checked={form.fontesDados.includes(opt)}
                      onChange={(e) =>
                        setForm((p) => ({
                          ...p,
                          fontesDados: toggleArray(p.fontesDados, opt, e.target.checked),
                        }))
                      }
                    />
                    <span>{opt}</span>
                  </label>
                ))}
              </div>
            </fieldset>

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
