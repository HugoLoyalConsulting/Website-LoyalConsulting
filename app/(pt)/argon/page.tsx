import Image from "next/image";
import type { Metadata } from "next";
import { ArgonQuoteForm } from "@/components/ArgonQuoteForm";

export const metadata: Metadata = {
  title: "Argon-Bras Luminosos | Comunicação visual personalizada",
  description: "Comunicação visual para fachadas, ambientes e pontos de venda. Solicite um orçamento.",
};

const whatsapp = "https://wa.me/5511972070323";
const services = ["Letreiros e logotipos caixa", "Neon", "Bandejas e displays", "Luminárias em acrílico"];
const pains = [
  ["Qualidade que não acompanha a ideia", "Materiais, acabamento e leitura precisam funcionar no ambiente real — não apenas na apresentação."],
  ["Prazo sem clareza", "Um projeto visual precisa de uma conversa objetiva sobre escopo, produção, instalação e próximos passos."],
  ["Soluções desconectadas", "Fachada, sinalização, display e iluminação devem conversar entre si para a marca ser reconhecida."],
  ["Visual que não parece premium", "A comunicação da marca merece proporção, presença e cuidado com os detalhes."],
];
const gallery = ["argon-01.jpg", "argon-02.jpg", "argon-03.jpg", "argon-04.jpg", "argon-05.jpg", "argon-06.jpg"];

export default function ArgonLandingPage() {
  return (
    <main className="argon-page argon-modern">
      <header className="argon-nav glass-panel">
        <a href="#topo" aria-label="Argon-Bras Luminosos"><Image src="/images/argon/logo-argon.jpg" alt="Argon-Bras" width={145} height={49} priority /></a>
        <nav aria-label="Navegação principal"><a href="#solucoes">Soluções</a><a href="#dores">Por que Argon</a><a className="argon-whatsapp-float" href={whatsapp} target="_blank" rel="noopener noreferrer" aria-label="Falar no WhatsApp"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19.1 4.9A9.9 9.9 0 0 0 2.3 12c0 1.7.4 3.3 1.2 4.7L2 22l5.5-1.4A9.9 9.9 0 1 0 19.1 4.9Zm-7.2 14a6.9 6.9 0 0 1-3.5-1l-.4-.2-3.3.8.9-3.2-.2-.4a6.9 6.9 0 1 1 6.5 3.9Zm3.8-5.1c-.2-.1-1.2-.6-1.4-.7-.2-.1-.3-.1-.4.1-.1.2-.5.7-.6.8-.1.1-.2.1-.4 0a5.7 5.7 0 0 1-1.7-1 6.3 6.3 0 0 1-1.2-1.5c-.1-.2 0-.3.1-.4l.3-.3c.1-.1.1-.2.2-.3 0-.1 0-.2 0-.3l-.7-1.5c-.2-.4-.4-.3-.5-.3h-.4c-.1 0-.3 0-.5.2-.2.2-.7.7-.7 1.7s.7 2 1 2.2c.1.1 1.6 2.5 3.9 3.5.5.2.9.4 1.2.5.5.2 1 .1 1.4.1.4-.1 1.2-.5 1.4-1 .2-.5.2-.9.1-1 0-.1-.2-.2-.4-.3Z" fill="currentColor" /></svg></a></nav>
      </header>

      <section id="topo" className="argon-hero">
        <div className="argon-hero-copy glass-panel">
          <p className="argon-kicker">Comunicação visual</p>
          <h1>Sua marca merece ser vista com presença.</h1>
          <p>Da fachada ao ponto de venda: comunicação visual pensada para quem exige qualidade, clareza de prazo e acabamento premium.</p>
          <div className="argon-actions">
            <a className="argon-button" href="#orcamento">Solicitar orçamento</a>
            <a className="argon-whatsapp" href={whatsapp} target="_blank" rel="noopener noreferrer">WhatsApp <span>11 97207-0323</span></a>
          </div>
        </div>
        <div className="argon-gallery" aria-label="Galeria de projetos Argon-Bras">
          <div className="argon-gallery-track">{[...gallery, ...gallery].map((image, index) => <figure className="argon-gallery-item" key={`${image}-${index}`}><Image src={`/images/argon/${image}`} alt="Projeto de comunicação visual da Argon-Bras" width={900} height={600} priority={index < 2} /></figure>)}</div>
        </div>
      </section>

      <section id="dores" className="argon-section argon-pains" aria-labelledby="dores-title">
        <div className="argon-section-intro"><p className="argon-kicker">Dores que resolvemos</p><h2 id="dores-title">Não é só fazer uma placa. É fazer a marca aparecer do jeito certo.</h2></div>
        <div className="argon-pain-list">{pains.map(([title, text]) => <article className="argon-pain" key={title}><span className="argon-pain-marker" aria-hidden="true">×</span><div><h3>{title}</h3><p>{text}</p></div></article>)}</div>
      </section>

      <section className="argon-section argon-before-after" aria-labelledby="antes-depois-title">
        <div><p className="argon-kicker">Antes × Depois</p><h2 id="antes-depois-title">Da incerteza a uma marca que se faz notar.</h2></div>
        <div className="argon-contrast-grid">
          <article className="argon-before"><span>Antes</span><ul><li>Escolhas desconectadas para cada peça</li><li>Acabamento e leitura sem prioridade</li><li>Prazo sem próximos passos claros</li></ul></article>
          <article className="argon-after"><span>Depois</span><ul><li>Comunicação visual pensada como conjunto</li><li>Presença, acabamento e aplicação alinhados</li><li>Conversa objetiva para definir o projeto</li></ul></article>
        </div>
      </section>

      <section id="solucoes" className="argon-section" aria-labelledby="servicos">
        <p className="argon-kicker">Comunicação visual completa</p>
        <h2 id="servicos">Tudo o que sua marca precisa para ganhar espaço físico.</h2>
        <div className="argon-grid">{services.map((service) => <article key={service}><h3>{service}</h3><p>Uma solução integrada ao projeto, à identidade e ao contexto de aplicação da sua marca.</p></article>)}</div>
      </section>

      <section className="argon-section argon-proof">
        <p className="argon-kicker">História confirmada</p>
        <h2>Desde 1987, a Argon-Bras atua em comunicação visual.</h2>
        <p>Experiência para conversar sobre o que realmente importa: acabamento, leitura, aplicação e a presença que sua marca precisa transmitir.</p>
      </section>

      <section id="orcamento" className="argon-section argon-form-panel">
        <div><p className="argon-kicker">Próximo passo</p><h2>Seu projeto merece uma conversa direta.</h2><p>Conte o que precisa: tipo de peça, local de aplicação, prazo desejado e referências. Para atendimento rápido, chame no WhatsApp.</p><a className="argon-whatsapp" href={whatsapp} target="_blank" rel="noopener noreferrer">Falar no WhatsApp <span>11 97207-0323</span></a></div>
        <ArgonQuoteForm />
      </section>

      <footer className="argon-footer">
        <div><Image src="/images/argon/logo-argon.jpg" alt="Argon-Bras" width={142} height={48} /><p>Comunicação visual personalizada.</p><p className="argon-location">Várzea Paulista, SP</p><a href="mailto:argonbras@gmail.com">argonbras@gmail.com</a></div>
        <nav className="argon-sitemap" aria-label="Mapa do site"><strong>Mapa do site</strong><a href="#topo">Início</a><a href="#dores">Por que Argon</a><a href="#solucoes">Soluções</a><a href="#orcamento">Orçamento</a></nav>
        <div className="argon-security" aria-label="Conexão segura HTTPS"><b>HTTPS</b><span>Conexão segura</span></div>
      </footer>
    </main>
  );
}
