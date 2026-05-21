"use client";

import { FormEvent, useEffect, useState } from "react";

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
};

const painOptions = [
  "Decisões lentas ou no escuro",
  "Dados demais, pouca clareza",
  "Falta de confiança nos KPIs",
  "Planilhas manuais e frágeis",
  "Retrabalho para gerar relatórios",
];

const tipoServicoOptions = [
  "Dashboards e relatórios",
  "Otimização de dashboards existentes",
  "Automação de dados",
  "Integração entre fontes",
  "Outro(s)",
];

const fontesDadosOptions = [
  "Excel",
  "Google Sheets",
  "ERP",
  "CRM",
  "APIs",
  "Outro sistema / não sei",
];

const tamanhoOptions = ["1–10", "11–50", "51–250", "251–1.000", "1.001+"];
const frequenciaOptions = [
  "Tempo real",
  "Diariamente (mais de 1x)",
  "Diariamente",
  "Semanalmente",
  "Mensalmente",
];

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
};

function resolveEndpoint() {
  const configured = process.env.NEXT_PUBLIC_LEADS_ENDPOINT?.trim();
  return configured && configured.length > 0 ? configured : "/api/leads";
}

function getErrorText(payload: unknown): string {
  if (!payload || typeof payload !== "object") return "Não foi possível enviar agora.";
  const maybeError = (payload as { error?: string }).error;
  return maybeError || "Não foi possível enviar agora.";
}

function toggleArray(arr: string[], value: string, checked: boolean): string[] {
  return checked ? [...arr, value] : arr.filter((v) => v !== value);
}

export function LeadCaptureForm() {
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
        body: JSON.stringify(form),
      });
      const data = (await response.json()) as unknown;
      if (!response.ok) throw new Error(getErrorText(data));
      setStatus("success");
      setMessage("Formulário enviado com sucesso. Entraremos em contato em breve.");
      setForm((prev) => ({
        ...defaultPayload,
        utmSource: prev.utmSource,
        utmMedium: prev.utmMedium,
        utmCampaign: prev.utmCampaign,
        utmTerm: prev.utmTerm,
        utmContent: prev.utmContent,
      }));
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Falha ao enviar formulário.");
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
            <p className="kicker">Diagnóstico operacional</p>
            <h2 className="section-title mt-3">
              Preencha o formulário e receba um diagnóstico focado na sua operação.
            </h2>
            <p className="section-copy mt-5">
              Nossa equipe analisa o contexto e entra em contato para estruturar um plano de
              inteligência analítica personalizado para sua empresa.
            </p>
          </div>

          {/* Right: form */}
          <form onSubmit={onSubmit} className="grid gap-6">

            {/* ── Seção 1: Informações básicas ── */}
            <p className="field-label" style={{ fontWeight: 600, fontSize: "0.78rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(240,237,232,0.45)", marginBottom: "-0.5rem" }}>
              Informações básicas
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              <label className="field-label">
                Nome *
                <input
                  required
                  value={form.nome}
                  onChange={(e) => setForm((p) => ({ ...p, nome: e.target.value }))}
                  className="field-input"
                />
              </label>
              <label className="field-label">
                Sobrenome *
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
                Cargo *
                <select
                  required
                  value={form.cargo}
                  onChange={(e) => setForm((p) => ({ ...p, cargo: e.target.value }))}
                  className="field-input"
                >
                  <option value="">Selecione</option>
                  {["Diretor(a)", "Gerente", "Coordenador(a)", "Analista", "Outro(s)"].map((v) => (
                    <option key={v} value={v}>{v}</option>
                  ))}
                </select>
              </label>
              <label className="field-label">
                Área *
                <select
                  required
                  value={form.area}
                  onChange={(e) => setForm((p) => ({ ...p, area: e.target.value }))}
                  className="field-input"
                >
                  <option value="">Selecione</option>
                  {["Marketing/Vendas", "Finanças", "Operações", "Logística", "RH", "TI", "Outra"].map((v) => (
                    <option key={v} value={v}>{v}</option>
                  ))}
                </select>
              </label>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <label className="field-label">
                E-mail *
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
                  className="field-input"
                />
              </label>
              <label className="field-label">
                WhatsApp (opcional)
                <input
                  value={form.whatsapp}
                  onChange={(e) => setForm((p) => ({ ...p, whatsapp: e.target.value }))}
                  className="field-input"
                  placeholder="+55 (11) 99999-9999"
                />
              </label>
            </div>

            <fieldset>
              <legend className="field-label mb-3">Como prefere ser contatado? *</legend>
              <div className="flex flex-wrap gap-3">
                {["WhatsApp / Telefone", "E-mail"].map((opt) => (
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
              <legend className="field-label mb-3">Tamanho da empresa (funcionários) *</legend>
              <div className="flex flex-wrap gap-3">
                {tamanhoOptions.map((opt) => (
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
              Dores e necessidades
            </p>

            <fieldset>
              <legend className="field-label mb-3">Principais dores *</legend>
              <div className="grid gap-2 sm:grid-cols-2">
                {painOptions.map((opt) => (
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
              <legend className="field-label mb-3">O que você precisa? *</legend>
              <div className="grid gap-2 sm:grid-cols-2">
                {tipoServicoOptions.map((opt) => (
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
              <legend className="field-label mb-3">Fontes de dados utilizadas (opcional)</legend>
              <div className="flex flex-wrap gap-2">
                {fontesDadosOptions.map((opt) => (
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
              <legend className="field-label mb-3">Com que frequência precisa dos dados atualizados? *</legend>
              <div className="flex flex-wrap gap-3">
                {frequenciaOptions.map((opt) => (
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
              Descreva o contexto e o objetivo (opcional)
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
              <span>
                Autorizo o uso dos dados para contato comercial e registro em CRM conforme
                a finalidade do atendimento.
              </span>
            </label>

            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full disabled:opacity-60"
              >
                {isSubmitting ? "Enviando..." : "Solicitar diagnóstico operacional"}
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