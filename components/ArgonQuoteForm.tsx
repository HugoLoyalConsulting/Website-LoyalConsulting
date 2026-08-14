"use client";

import { FormEvent, useState } from "react";

const endpoint = process.env.NEXT_PUBLIC_ARGON_LEADS_ENDPOINT || "";
const whatsapp = "5511972070323";
const serviceLabels = ["Fachada / letreiro", "Neon", "Display / PDV", "Sinalização", "Outro"];

export function ArgonQuoteForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const payload = Object.fromEntries(form.entries());
    const services = form.getAll("services");

    if (!endpoint) {
      const message = [
        "Olá! Quero solicitar um orçamento.",
        `Nome: ${payload.name || "não informado"}`,
        `Contato: ${payload.contact || "não informado"}`,
        `Serviço: ${services.join(", ") || "não informado"}`,
        payload.project ? `Detalhes: ${payload.project}` : "",
      ].filter(Boolean).join("\n");
      window.open(`https://wa.me/${whatsapp}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
      setStatus("sent");
      return;
    }

    setStatus("sending");
    try {
      const response = await fetch(endpoint, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...payload, services }) });
      if (!response.ok) throw new Error("lead request failed");
      event.currentTarget.reset();
      setStatus("sent");
    } catch { setStatus("error"); }
  }

  return (
    <form onSubmit={submit} className="argon-form" aria-label="Solicitar orçamento">
      <div className="argon-form-heading"><strong>Conte o essencial</strong><span>Leva menos de um minuto.</span></div>
      <label>Seu nome<input name="name" required autoComplete="name" /></label>
      <label>WhatsApp ou e-mail<input name="contact" required autoComplete="tel" /></label>
      <fieldset><legend>O que você procura? <small>Escolha uma ou mais opções</small></legend><div className="argon-service-options">{serviceLabels.map((service) => <label key={service}><input type="checkbox" name="services" value={service} /> <span>{service}</span></label>)}</div></fieldset>
      <label>Detalhe rápido <small>(opcional)</small><textarea name="project" rows={3} placeholder="Ex.: fachada, medidas aproximadas e prazo" /></label>
      <button type="submit" disabled={status === "sending"}>{status === "sending" ? "Abrindo WhatsApp…" : "Enviar pelo WhatsApp"}</button>
      {status === "sent" && <p role="status">Abrimos o WhatsApp com suas informações.</p>}
      {status === "error" && <p role="alert">Não foi possível enviar agora. Tente novamente pelo WhatsApp.</p>}
    </form>
  );
}
