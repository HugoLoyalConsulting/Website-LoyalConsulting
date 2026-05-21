"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";

type ContactMode = "email" | "whatsapp" | "both";

type FormState = {
  nome: string;
  empresa: string;
  areaSetor: string;
  cargo: string;
  email: string;
  whatsapp: string;
  preferredContactMode: ContactMode;
  dores: string[];
  dorDescricao: string;
  tamanhoEmpresa: string;
  urgencia: string;
  consentimentoLgpd: boolean;
  utmSource: string;
  utmMedium: string;
  utmCampaign: string;
  utmTerm: string;
  utmContent: string;
};

const painOptions = [
  "Baixa visibilidade de indicadores",
  "Dados espalhados em varias ferramentas",
  "Lentidao para gerar relatorios",
  "Decisao sem confianca nos numeros",
  "Dificuldade de integrar marketing e vendas",
  "Baixa previsibilidade de receita"
];

const initialState: FormState = {
  nome: "",
  empresa: "",
  areaSetor: "",
  cargo: "",
  email: "",
  whatsapp: "",
  preferredContactMode: "both",
  dores: [],
  dorDescricao: "",
  tamanhoEmpresa: "",
  urgencia: "",
  consentimentoLgpd: false,
  utmSource: "",
  utmMedium: "",
  utmCampaign: "",
  utmTerm: "",
  utmContent: ""
};

function getErrorText(data: unknown): string {
  if (!data || typeof data !== "object") {
    return "Nao foi possivel enviar agora.";
  }

  const maybeError = (data as { error?: string }).error;
  if (maybeError) {
    return maybeError;
  }

  return "Nao foi possivel enviar agora.";
}

export function Form() {
  const [form, setForm] = useState<FormState>(initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<string>("");
  const [messageType, setMessageType] = useState<"success" | "error" | "idle">("idle");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setForm((prev) => ({
      ...prev,
      utmSource: params.get("utm_source") || "",
      utmMedium: params.get("utm_medium") || "",
      utmCampaign: params.get("utm_campaign") || "",
      utmTerm: params.get("utm_term") || "",
      utmContent: params.get("utm_content") || ""
    }));
  }, []);

  const requiresEmail = useMemo(
    () => form.preferredContactMode === "email" || form.preferredContactMode === "both",
    [form.preferredContactMode]
  );

  const requiresWhatsapp = useMemo(
    () => form.preferredContactMode === "whatsapp" || form.preferredContactMode === "both",
    [form.preferredContactMode]
  );

  function handlePainChange(pain: string, checked: boolean) {
    setForm((prev) => ({
      ...prev,
      dores: checked ? [...prev.dores, pain] : prev.dores.filter((item) => item !== pain)
    }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setMessage("");
    setMessageType("idle");

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
      });

      const data = (await response.json()) as unknown;

      if (!response.ok) {
        throw new Error(getErrorText(data));
      }

      setMessage("Recebemos seu contato. A equipe Loyal vai falar com voce em breve.");
      setMessageType("success");
      setForm((prev) => ({
        ...initialState,
        utmSource: prev.utmSource,
        utmMedium: prev.utmMedium,
        utmCampaign: prev.utmCampaign,
        utmTerm: prev.utmTerm,
        utmContent: prev.utmContent
      }));
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Falha ao enviar formulario.");
      setMessageType("error");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="formulario" className="section-shell mt-20 scroll-mt-16">
      <div className="panel p-7 sm:p-10">
        <h2 className="section-title">Conte sua dor e receba um plano de acao</h2>
        <p className="section-subtitle">
          Formulario pensado para baixa friccao e captura completa para o CRM da Loyal Consulting.
        </p>

        <form onSubmit={handleSubmit} className="mt-8 grid gap-4 sm:grid-cols-2">
          <label className="text-sm">
            Nome *
            <input
              required
              value={form.nome}
              onChange={(event) => setForm((prev) => ({ ...prev, nome: event.target.value }))}
              className="mt-2 w-full rounded-xl2 border border-white/15 bg-bg/60 px-4 py-3 outline-none ring-primary/60 focus:ring"
            />
          </label>

          <label className="text-sm">
            Empresa
            <input
              value={form.empresa}
              onChange={(event) => setForm((prev) => ({ ...prev, empresa: event.target.value }))}
              className="mt-2 w-full rounded-xl2 border border-white/15 bg-bg/60 px-4 py-3 outline-none ring-primary/60 focus:ring"
            />
          </label>

          <label className="text-sm">
            Area/Setor
            <input
              value={form.areaSetor}
              onChange={(event) => setForm((prev) => ({ ...prev, areaSetor: event.target.value }))}
              className="mt-2 w-full rounded-xl2 border border-white/15 bg-bg/60 px-4 py-3 outline-none ring-primary/60 focus:ring"
            />
          </label>

          <label className="text-sm">
            Cargo
            <input
              value={form.cargo}
              onChange={(event) => setForm((prev) => ({ ...prev, cargo: event.target.value }))}
              className="mt-2 w-full rounded-xl2 border border-white/15 bg-bg/60 px-4 py-3 outline-none ring-primary/60 focus:ring"
            />
          </label>

          <label className="text-sm sm:col-span-2">
            Como prefere contato? *
            <select
              value={form.preferredContactMode}
              onChange={(event) =>
                setForm((prev) => ({ ...prev, preferredContactMode: event.target.value as ContactMode }))
              }
              className="mt-2 w-full rounded-xl2 border border-white/15 bg-bg/60 px-4 py-3 outline-none ring-primary/60 focus:ring"
            >
              <option value="email">Somente email</option>
              <option value="whatsapp">Somente WhatsApp</option>
              <option value="both">Email e WhatsApp</option>
            </select>
          </label>

          <label className="text-sm">
            E-mail {requiresEmail ? "*" : "(opcional)"}
            <input
              type="email"
              required={requiresEmail}
              value={form.email}
              onChange={(event) => setForm((prev) => ({ ...prev, email: event.target.value }))}
              className="mt-2 w-full rounded-xl2 border border-white/15 bg-bg/60 px-4 py-3 outline-none ring-primary/60 focus:ring"
            />
          </label>

          <label className="text-sm">
            WhatsApp {requiresWhatsapp ? "*" : "(opcional)"}
            <input
              required={requiresWhatsapp}
              value={form.whatsapp}
              onChange={(event) => setForm((prev) => ({ ...prev, whatsapp: event.target.value }))}
              className="mt-2 w-full rounded-xl2 border border-white/15 bg-bg/60 px-4 py-3 outline-none ring-primary/60 focus:ring"
            />
          </label>

          <label className="text-sm">
            Tamanho da empresa
            <select
              value={form.tamanhoEmpresa}
              onChange={(event) => setForm((prev) => ({ ...prev, tamanhoEmpresa: event.target.value }))}
              className="mt-2 w-full rounded-xl2 border border-white/15 bg-bg/60 px-4 py-3 outline-none ring-primary/60 focus:ring"
            >
              <option value="">Selecione</option>
              <option value="1-10">1 a 10 pessoas</option>
              <option value="11-50">11 a 50 pessoas</option>
              <option value="51-200">51 a 200 pessoas</option>
              <option value="201-500">201 a 500 pessoas</option>
              <option value="500+">Acima de 500 pessoas</option>
            </select>
          </label>

          <label className="text-sm">
            Urgencia do projeto
            <select
              value={form.urgencia}
              onChange={(event) => setForm((prev) => ({ ...prev, urgencia: event.target.value }))}
              className="mt-2 w-full rounded-xl2 border border-white/15 bg-bg/60 px-4 py-3 outline-none ring-primary/60 focus:ring"
            >
              <option value="">Selecione</option>
              <option value="imediata">Imediata (ate 30 dias)</option>
              <option value="curto-prazo">Curto prazo (30 a 90 dias)</option>
              <option value="medio-prazo">Medio prazo (3 a 6 meses)</option>
            </select>
          </label>

          <fieldset className="sm:col-span-2">
            <legend className="text-sm">Tipos de dores *</legend>
            <div className="mt-3 grid gap-2 sm:grid-cols-2">
              {painOptions.map((pain) => {
                const checked = form.dores.includes(pain);
                return (
                  <label key={pain} className="flex items-start gap-2 rounded-xl2 border border-white/10 p-3 text-sm">
                    <input
                      type="checkbox"
                      checked={checked}
                      onChange={(event) => handlePainChange(pain, event.target.checked)}
                      className="mt-1"
                    />
                    <span>{pain}</span>
                  </label>
                );
              })}
            </div>
          </fieldset>

          <label className="text-sm sm:col-span-2">
            Descricao das dores *
            <textarea
              required
              minLength={10}
              value={form.dorDescricao}
              onChange={(event) => setForm((prev) => ({ ...prev, dorDescricao: event.target.value }))}
              rows={5}
              className="mt-2 w-full rounded-xl2 border border-white/15 bg-bg/60 px-4 py-3 outline-none ring-primary/60 focus:ring"
            />
          </label>

          <label className="sm:col-span-2 flex items-start gap-3 rounded-xl2 border border-white/10 p-4 text-sm">
            <input
              type="checkbox"
              required
              checked={form.consentimentoLgpd}
              onChange={(event) => setForm((prev) => ({ ...prev, consentimentoLgpd: event.target.checked }))}
              className="mt-1"
            />
            <span>
              Autorizo a Loyal Consulting a utilizar meus dados para contato comercial e registro no CRM interno,
              conforme finalidade de atendimento da solicitacao.
            </span>
          </label>

          <div className="sm:col-span-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-xl2 bg-gradient-to-r from-primary to-secondary px-6 py-3 text-sm font-bold text-bg transition-transform duration-smooth hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isSubmitting ? "Enviando..." : "Receber contato da Loyal"}
            </button>

            {messageType !== "idle" ? (
              <p className={`mt-3 text-sm ${messageType === "success" ? "text-success" : "text-danger"}`}>{message}</p>
            ) : null}
          </div>
        </form>
      </div>
    </section>
  );
}
