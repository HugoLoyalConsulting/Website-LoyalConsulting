"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import type { Locale } from "@/lib/i18n";

type Variant = "A" | "B";

const STRINGS = {
  pt: {
    sectionStart: "Para começar",
    nomeCompleto: "Nome completo *",
    departamento: "Departamento *",
    empresa: "Empresa (opcional)",
    contactToggleLabel: "Quer deixar um contato? (opcional)",
    email: "E-mail (opcional)",
    whatsapp: "WhatsApp (opcional)",
    whatsappPlaceholder: "+55 (11) 99999-9999",
    sectionGeral: "Sobre a sua área",
    metricas: "Quais são as métricas ou indicadores que você olha o tempo todo para saber se a área está indo bem? *",
    metricasPlaceholder: "Ex: faturamento do mês, taxa de conversão, entregas no prazo, NPS, ocupação de leitos…",
    fontesDados: "De onde esses dados vêm? *",
    fontesDadosPlaceholder: "Ex: sistema da empresa, planilha que alguém atualiza, relatório que recebo por e-mail, painel de BI…",
    quemConsolida: "Quem consolida esses dados para você? *",
    quemConsolidaPlaceholder: "Ex: eu mesmo, um analista do time, o financeiro, ninguém — fico sem…",
    comoAgir: "Como você pode agir em cima desses indicadores para 'mover a chave' dos resultados? (opcional)",
    comoAgirPlaceholder: "Ex: se o NPS cai, convoco reunião; se o faturamento está abaixo, repasso meta para vendas…",
    lgpd: "Ao enviar, autorizo o uso dos meus dados pela Loyal Consulting para fins de diagnóstico e contato comercial, conforme a LGPD.",
    submit: "Enviar",
    submitting: "Enviando…",
    thankYouPath: "/obrigado",
    errorGeneric: "Não foi possível enviar agora. Tente novamente.",
  },
  en: {
    sectionStart: "To start",
    nomeCompleto: "Full name *",
    departamento: "Department *",
    empresa: "Company (optional)",
    contactToggleLabel: "Would you like to leave a contact? (optional)",
    email: "E-mail (optional)",
    whatsapp: "WhatsApp (optional)",
    whatsappPlaceholder: "+55 (11) 99999-9999",
    sectionGeral: "About your area",
    metricas: "What metrics or indicators do you check constantly to know if your area is on track? *",
    metricasPlaceholder: "E.g. monthly revenue, conversion rate, on-time delivery, NPS, bed occupancy…",
    fontesDados: "Where does this data come from? *",
    fontesDadosPlaceholder: "E.g. company system, spreadsheet someone updates, report I receive by email, BI dashboard…",
    quemConsolida: "Who consolidates this data for you? *",
    quemConsolidaPlaceholder: "E.g. I do it myself, a team analyst, finance team, nobody — I go without…",
    comoAgir: "How can you act on these indicators to 'move the needle' on results? (optional)",
    comoAgirPlaceholder: "E.g. if NPS drops, I call a meeting; if revenue is below target, I push the sales team…",
    lgpd: "By submitting, I authorize Loyal Consulting to use my data for assessment and commercial contact purposes, per Brazil's LGPD.",
    submit: "Submit",
    submitting: "Sending…",
    thankYouPath: "/en/thank-you",
    errorGeneric: "Couldn't send right now. Please try again.",
  },
} as const;

function getVariant(): Variant {
  try {
    const stored = localStorage.getItem("discovery_variant");
    if (stored === "A" || stored === "B") return stored;
    const v: Variant = Math.random() < 0.5 ? "A" : "B";
    localStorage.setItem("discovery_variant", v);
    return v;
  } catch {
    return "A";
  }
}

export function SimpleDiscoveryForm({ locale = "pt" }: { locale?: Locale }) {
  const router = useRouter();
  const t = STRINGS[locale];

  const [variant, setVariant] = useState<Variant>("A");
  const [contactOpen, setContactOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const nomeRef = useRef<HTMLInputElement>(null);
  const [form, setForm] = useState({
    nomeCompleto: "",
    departamento: "",
    empresa: "",
    email: "",
    whatsapp: "",
    metricas: "",
    fontesDados: "",
    quemConsolida: "",
    comoAgir: "",
  });

  useEffect(() => {
    setVariant(getVariant());
    const params = new URLSearchParams(window.location.search);
    if (params.get("variant") === "A" || params.get("variant") === "B") {
      const forced = params.get("variant") as Variant;
      localStorage.setItem("discovery_variant", forced);
      setVariant(forced);
    }
  }, []);

  function set(key: keyof typeof form) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((p) => ({ ...p, [key]: e.target.value }));
  }

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg("");
    try {
      const res = await fetch("/api/discovery-simples", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          variant,
          utmSource: new URLSearchParams(window.location.search).get("utm_source") || "",
          utmMedium: new URLSearchParams(window.location.search).get("utm_medium") || "",
          utmCampaign: new URLSearchParams(window.location.search).get("utm_campaign") || "",
          utmTerm: new URLSearchParams(window.location.search).get("utm_term") || "",
          utmContent: new URLSearchParams(window.location.search).get("utm_content") || "",
        }),
      });
      if (!res.ok) throw new Error();
      router.push(t.thankYouPath);
    } catch {
      setErrorMsg(t.errorGeneric);
    } finally {
      setIsSubmitting(false);
    }
  }

  const sectionLabel: React.CSSProperties = {
    fontWeight: 600,
    fontSize: "0.78rem",
    letterSpacing: "0.14em",
    textTransform: "uppercase",
    color: "rgba(240,237,232,0.45)",
    marginBottom: "-0.5rem",
  };

  return (
    <section id="contato" className="mx-auto mt-20 w-full max-w-6xl px-5 sm:px-8">
      <div className="form-shell reveal-up">
        <form onSubmit={onSubmit} className="grid gap-6">
          {/* ── Seção 1: Início ── */}
          <p className="field-label" style={sectionLabel}>{t.sectionStart}</p>

          <div className="grid gap-4 sm:grid-cols-2">
            <label className="field-label">
              {t.nomeCompleto}
              <input ref={nomeRef} required value={form.nomeCompleto} onChange={set("nomeCompleto")} className="field-input" />
            </label>
            <label className="field-label">
              {t.departamento}
              <input required value={form.departamento} onChange={set("departamento")} className="field-input" />
            </label>
          </div>

          <label className="field-label">
            {t.empresa}
            <input value={form.empresa} onChange={set("empresa")} className="field-input" />
          </label>

          {/* Contato — só aparece na variante A */}
          {variant === "A" && (
            <div>
              <label className="checkbox-item" style={{ marginBottom: "0.75rem" }}>
                <input
                  type="checkbox"
                  checked={contactOpen}
                  onChange={(e) => setContactOpen(e.target.checked)}
                />
                <span>{t.contactToggleLabel}</span>
              </label>

              {contactOpen && (
                <div className="grid gap-4 sm:grid-cols-2" style={{ marginTop: "0.75rem" }}>
                  <label className="field-label">
                    {t.email}
                    <input type="email" value={form.email} onChange={set("email")} className="field-input" />
                  </label>
                  <label className="field-label">
                    {t.whatsapp}
                    <input value={form.whatsapp} onChange={set("whatsapp")} className="field-input" placeholder={t.whatsappPlaceholder} />
                  </label>
                </div>
              )}
            </div>
          )}

          {/* ── Seção 2: Geral ── */}
          <p className="field-label" style={{ ...sectionLabel, marginTop: "0.5rem" }}>{t.sectionGeral}</p>

          <label className="field-label">
            {t.metricas}
            <textarea required value={form.metricas} onChange={set("metricas")} className="field-input min-h-28" placeholder={t.metricasPlaceholder} maxLength={1500} />
          </label>

          <label className="field-label">
            {t.fontesDados}
            <textarea required value={form.fontesDados} onChange={set("fontesDados")} className="field-input min-h-28" placeholder={t.fontesDadosPlaceholder} maxLength={1500} />
          </label>

          <label className="field-label">
            {t.quemConsolida}
            <textarea required value={form.quemConsolida} onChange={set("quemConsolida")} className="field-input min-h-28" placeholder={t.quemConsolidaPlaceholder} maxLength={1000} />
          </label>

          <label className="field-label">
            {t.comoAgir}
            <textarea value={form.comoAgir} onChange={set("comoAgir")} className="field-input min-h-28" placeholder={t.comoAgirPlaceholder} maxLength={1500} />
          </label>

          {/* ── Submit ── */}
          <div>
            <p style={{ fontSize: "0.72rem", color: "rgba(240,237,232,0.4)", marginBottom: "12px", lineHeight: 1.5 }}>
              {t.lgpd}
            </p>
            <button type="submit" disabled={isSubmitting} className="btn-primary w-full disabled:opacity-60">
              {isSubmitting ? t.submitting : t.submit}
            </button>
            {errorMsg && <p className="mt-3 text-sm error">{errorMsg}</p>}
          </div>
        </form>
      </div>
    </section>
  );
}
