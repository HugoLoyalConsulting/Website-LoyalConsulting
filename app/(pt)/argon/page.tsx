import Image from "next/image";
import type { Metadata } from "next";
import { ArgonQuoteForm } from "@/components/ArgonQuoteForm";

export const metadata: Metadata = {
  title: "Argon-Bras Luminosos | Comunicação visual personalizada",
  description: "Solicite um orçamento para letreiros, neons, luminosos, fachadas e displays.",
};

const services = ["Letreiros e logotipos caixa", "Neon", "Bandejas e displays", "Luminárias em acrílico"];
const gallery = ["argon-01.jpg", "argon-02.jpg", "argon-03.jpg", "argon-04.jpg", "argon-05.jpg", "argon-06.jpg"];

export default function ArgonLandingPage() {
  return (
    <main className="argon-page argon-modern">
      <header className="argon-nav glass-panel">
        <a href="#topo" aria-label="Argon-Bras Luminosos"><Image src="/images/argon/logo-argon.jpg" alt="Argon-Bras" width={145} height={49} priority /></a>
        <a href="#orcamento" className="argon-nav-cta">Solicitar orçamento</a>
      </header>
      <section id="topo" className="argon-hero">
        <div className="argon-hero-copy glass-panel">
          <p className="argon-kicker">Comunicação visual · Várzea Paulista, SP</p>
          <h1>Comunicação visual personalizada para sua marca aparecer.</h1>
          <p>Letreiros, neons, luminosos, fachadas e displays com a experiência da Argon-Bras Luminosos.</p>
          <div className="argon-actions">
            <a className="argon-button" href="#orcamento">Solicitar orçamento</a>
            <a className="argon-link" href="https://wa.me/551145821572" target="_blank" rel="noopener noreferrer">Falar no WhatsApp</a>
          </div>
        </div>
        <div className="argon-gallery" aria-label="Galeria de projetos Argon-Bras">
          <div className="argon-gallery-track">{[...gallery, ...gallery].map((image, index) => <figure className="argon-gallery-item" key={`${image}-${index}`}><Image src={`/images/argon/${image}`} alt="Projeto de comunicação visual da Argon-Bras" width={900} height={600} priority={index < 2} /></figure>)}</div>
        </div>
      </section>
      <section className="argon-section" aria-labelledby="servicos">
        <p className="argon-kicker">Especialidades</p>
        <h2 id="servicos">Do projeto à presença física da sua marca.</h2>
        <div className="argon-grid">{services.map((service) => <article key={service}><h3>{service}</h3><p>Converse com a equipe para avaliar materiais, formato e aplicação adequados ao seu projeto.</p></article>)}</div>
      </section>
      <section className="argon-section argon-proof">
        <p className="argon-kicker">História confirmada</p>
        <h2>Desde 1987, a Argon-Bras atua em comunicação visual.</h2>
        <p>Esta página usa somente informações confirmadas no site público da empresa. Não inventamos depoimentos, preços, prazos, garantias ou resultados.</p>
      </section>
      <section id="orcamento" className="argon-section argon-form-panel">
        <div><p className="argon-kicker">Próximo passo</p><h2>Conte o que sua marca precisa mostrar.</h2><p>Envie o contexto inicial do projeto para solicitar um orçamento. Para urgências, utilize o WhatsApp.</p></div>
        <ArgonQuoteForm />
      </section>
      <footer className="argon-footer"><p>Argon-Bras Luminosos · Comunicação visual personalizada</p><a href="mailto:argonbras@gmail.com">argonbras@gmail.com</a></footer>
    </main>
  );
}
