"use client";

import { FormEvent, useState } from "react";

const endpoint = process.env.NEXT_PUBLIC_ARGON_LEADS_ENDPOINT || "";

export function ArgonQuoteForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!endpoint) {
      setStatus("error");
      return;
    }
    setStatus("sending");
    const form = new FormData(event.currentTarget);
    const payload = Object.fromEntries(form.entries());
    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!response.ok) throw new Error("lead request failed");
      event.currentTarget.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  if (!endpoint) {
    return <p className="argon-form" role="status">O formulário está em conexão final com o CRM. <a className="argon-link" href="https://wa.me/551145821572" target="_blank" rel="noopener noreferrer">Falar no WhatsApp</a> para solicitar orçamento agora.</p>;
  }

  return (
    <form onSubmit={submit} className="argon-form" aria-label="Solicitar orçamento">
      <label>Nome<input name="name" required autoComplete="name" /></label>
      <label>Empresa<input name="company" autoComplete="organization" /></label>
      <label>WhatsApp ou e-mail<input name="contact" required autoComplete="email" /></label>
      <label>O que você precisa?<textarea name="project" required rows={4} /></label>
      <label className="argon-consent"><input name="consent" type="checkbox" required /> Concordo em ser contatado sobre este orçamento.</label>
      <input name="consentVersion" type="hidden" value="argon-lp-v1" />
      <button type="submit" disabled={status === "sending"}>{status === "sending" ? "Enviando…" : "Solicitar orçamento"}</button>
      {status === "sent" && <p role="status">Recebemos seu pedido. A equipe entrará em contato.</p>}
      {status === "error" && <p role="alert">Formulário ainda não está conectado. Use o WhatsApp para solicitar seu orçamento.</p>}
    </form>
  );
}
