import Image from "next/image";
import type { Metadata } from "next";
import { ArgonQuoteForm } from "@/components/ArgonQuoteForm";
import { ArgonMobileMenu } from "@/components/ArgonMobileMenu";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.loyalconsulting.com.br"),
  title: "Argon-Bras Luminosos | Comunicação visual personalizada",
  description: "Comunicação visual para fachadas, letreiros, neon, luminosos, sinalização e pontos de venda.",
  alternates: { canonical: "/argon/" },
  openGraph: { type: "website", locale: "pt_BR", url: "/argon/", siteName: "Argon-Bras Luminosos", title: "Argon-Bras Luminosos", description: "Comunicação visual personalizada para o espaço físico.", images: [{ url: "/images/argon/source-original/argon-source-10.jpg", width: 1200, height: 630, alt: "Projeto de comunicação visual Argon-Bras" }] },
  robots: { index: true, follow: true },
};

const whatsapp = "https://wa.me/5511972070323?text=Ol%C3%A1%2C%20vi%20o%20site%20da%20Argon%20e%20gostaria%20de%20falar%20mais.";
const gallery = ["source-original/argon-source-10.jpg", "source-original/argon-source-13.jpg", "source-original/argon-source-12.jpg", "source-original/argon-source-16.jpeg", "source-original/argon-source-20.jpg", "source-original/argon-source-25.jpg"];
const now = ["Fachada sem presença ou leitura", "Peças que não conversam entre si", "Escolhas de acabamento sem clareza", "Um projeto sem caminho de produção definido"];
const later = ["Uma identidade visual aplicada ao ambiente", "Fachada, luminoso e sinalização em conjunto", "Conversa objetiva sobre solução e aplicação", "Um próximo passo claro para seu projeto"];
const serviceGroups = [
  { tone: "indigo", eyebrow: "Presença de marca", title: "Fachadas, letras e sinalização", images: ["source-original/argon-source-10.jpg", "source-original/argon-source-13.jpg", "source-original/argon-source-18.jpg"], copy: "Projetos de fachada, letras e sinalização visíveis no acervo público original da Argon.", items: ["Fachadas", "Letreiros e logotipos caixa", "Sinalização"] },
  { tone: "cyan", eyebrow: "Ambientes e ativações", title: "Displays, PDV e experiências", images: ["source-original/argon-source-12.jpg", "source-original/argon-source-25.jpg", "source-original/argon-source-27.jpg"], copy: "Projetos visuais de ambiente, exposição e ponto de venda presentes no acervo público original da Argon.", items: ["Displays para PDV", "Ambientação", "Comunicação para eventos"] },
  { tone: "magenta", eyebrow: "Iluminação", title: "Neon e luminosos", images: ["source-original/argon-source-16.jpeg", "source-original/argon-source-20.jpg", "source-original/argon-source-32.jpg"], copy: "Peças luminosas e composições em neon presentes no acervo público original da Argon.", items: ["Neon", "Luminosos", "Iluminação decorativa"] },
];
const processSteps = [["01", "Briefing", "Você apresenta o contexto, a peça e o local de aplicação."], ["02", "Solução", "Conversamos sobre a melhor forma de materializar sua ideia."], ["03", "Produção", "O projeto segue com foco em acabamento e aplicação."], ["04", "Entrega", "A instalação e os próximos passos são alinhados com clareza."]];
const faqs = [
  ["O que eu preciso informar para começar?", "Conte qual peça você imagina, onde ela será aplicada e, se houver, medidas, prazo ou referências."],
  ["Posso conversar mesmo sem saber a solução ideal?", "Sim. Você pode descrever o espaço e o objetivo da comunicação visual para iniciar a conversa."],
  ["Quais tipos de projeto entram no atendimento?", "Fachadas, letreiros, luminosos, neon, displays, sinalização e outras necessidades de comunicação visual podem ser apresentadas no briefing."],
];

const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Argon-Bras Luminosos",
  url: "https://www.loyalconsulting.com.br/argon/",
  telephone: "+5511972070323",
  email: "argonbras@gmail.com",
  address: { "@type": "PostalAddress", addressLocality: "Várzea Paulista", addressRegion: "SP", addressCountry: "BR" },
  image: "https://www.loyalconsulting.com.br/images/argon/source-original/argon-source-10.jpg",
};

export default function ArgonLandingPage() {
  return (
    <main className="argon-page argon-modern" id="topo">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <header className="argon-nav glass-panel">
        <a href="#topo" aria-label="Argon-Bras Luminosos"><Image src="/images/argon/logo-argon.jpg" alt="Argon-Bras" width={145} height={49} priority /></a>
        <nav aria-label="Navegação principal"><a href="#solucoes">Soluções</a><a href="#processo">Como funciona</a><a href="#orcamento">Orçamento</a><a className="argon-whatsapp-float" href={whatsapp} target="_blank" rel="noopener noreferrer" aria-label="Falar no WhatsApp"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19.1 4.9A9.9 9.9 0 0 0 2.3 12c0 1.7.4 3.3 1.2 4.7L2 22l5.5-1.4A9.9 9.9 0 1 0 19.1 4.9Zm-7.2 14a6.9 6.9 0 0 1-3.5-1l-.4-.2-3.3.8.9-3.2-.2-.4a6.9 6.9 0 1 1 6.5 3.9Zm3.8-5.1c-.2-.1-1.2-.6-1.4-.7-.2-.1-.3-.1-.4.1-.1.2-.5.7-.6.8-.1.1-.2.1-.4 0a5.7 5.7 0 0 1-1.7-1 6.3 6.3 0 0 1-1.2-1.5c-.1-.2 0-.3.1-.4l.3-.3c.1-.1.1-.2.2-.3 0-.1 0-.2 0-.3l-.7-1.5c-.2-.4-.4-.3-.5-.3h-.4c-.1 0-.3 0-.5.2-.2.2-.7.7-.7 1.7s.7 2 1 2.2c.1.1 1.6 2.5 3.9 3.5.5.2.9.4 1.2.5.5.2 1 .1 1.4.1.4-.1 1.2-.5 1.4-1 .2-.5.2-.9.1-1 0-.1-.2-.2-.4-.3Z" fill="currentColor" /></svg></a></nav><ArgonMobileMenu />
      </header>
      <a className="argon-whatsapp-persistent" href={whatsapp} target="_blank" rel="noopener noreferrer" aria-label="Falar no WhatsApp"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19.1 4.9A9.9 9.9 0 0 0 2.3 12c0 1.7.4 3.3 1.2 4.7L2 22l5.5-1.4A9.9 9.9 0 1 0 19.1 4.9Zm-7.2 14a6.9 6.9 0 0 1-3.5-1l-.4-.2-3.3.8.9-3.2-.2-.4a6.9 6.9 0 1 1 6.5 3.9Zm3.8-5.1c-.2-.1-1.2-.6-1.4-.7-.2-.1-.3-.1-.4.1-.1.2-.5.7-.6.8-.1.1-.2.1-.4 0a5.7 5.7 0 0 1-1.7-1 6.3 6.3 0 0 1-1.2-1.5c-.1-.2 0-.3.1-.4l.3-.3c.1-.1.1-.2.2-.3 0-.1 0-.2 0-.3l-.7-1.5c-.2-.4-.4-.3-.5-.3h-.4c-.1 0-.3 0-.5.2-.2.2-.7.7-.7 1.7s.7 2 1 2.2c.1.1 1.6 2.5 3.9 3.5.5.2.9.4 1.2.5.5.2 1 .1 1.4.1.4-.1 1.2-.5 1.4-1 .2-.5.2-.9.1-1 0-.1-.2-.2-.4-.3Z" fill="currentColor" /></svg></a>

      <section className="argon-hero argon-shell">
        <div className="argon-hero-copy glass-panel"><p className="argon-kicker">Comunicação visual</p><h1>Sua marca merece ocupar espaço do jeito certo.</h1><p>Fachadas, luminosos, sinalização e ponto de venda pensados para traduzir sua identidade no espaço físico.</p><div className="argon-actions"><a className="argon-button" href="#orcamento">Solicitar orçamento</a><a className="argon-whatsapp" href={whatsapp} target="_blank" rel="noopener noreferrer">Falar no WhatsApp</a></div><small>Conversa direta · Projeto sob medida · Sem compromisso</small></div>
        <div className="argon-gallery" aria-label="Galeria de projetos Argon-Bras"><div className="argon-gallery-track">{[...gallery, ...gallery].map((image, index) => <figure className="argon-gallery-item" key={`${image}-${index}`}><Image src={`/images/argon/${image}`} alt="Projeto de comunicação visual da Argon-Bras" width={900} height={600} priority={index < 2} /></figure>)}</div></div>
      </section>
      <div className="argon-marquee" aria-label="Especialidades Argon-Bras"><div>FACHADAS · LETREIROS · NEON · SINALIZAÇÃO · DISPLAYS · LUMINOSOS · FACHADAS · LETREIROS · NEON · SINALIZAÇÃO · DISPLAYS · LUMINOSOS ·</div></div>

      <section id="transformacao" className="argon-section argon-transform argon-shell"><div className="argon-section-intro"><p className="argon-kicker">A transformação</p><h2>Do visual desconectado a uma presença que faz sentido para a marca.</h2></div><div className="argon-transform-grid"><article className="argon-now"><p>Hoje no seu espaço</p><ul>{now.map((item) => <li key={item}><span>×</span>{item}</li>)}</ul></article><article className="argon-later"><p>Com uma solução integrada</p><ul>{later.map((item) => <li key={item}><span>✓</span>{item}</li>)}</ul></article></div></section>

      <section id="solucoes" className="argon-section argon-entry argon-shell"><div className="argon-section-intro"><p className="argon-kicker">Por onde começar?</p><h2>Escolha o tipo de presença que sua marca precisa agora.</h2></div><div className="argon-service-groups">{serviceGroups.map((group) => <article className={`argon-service-group argon-tone-${group.tone}`} key={group.title}><div className="argon-service-image"><div className="argon-service-image-track">{[...group.images, ...group.images].map((image, index) => <Image key={`${image}-${index}`} src={`/images/argon/${image}`} alt={`Projeto Argon-Bras: ${group.title}`} width={900} height={600} />)}</div></div><div className="argon-service-body"><p className="argon-card-eyebrow">{group.eyebrow}</p><h3>{group.title}</h3><p>{group.copy}</p><ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul><a href="#orcamento">Conversar sobre este projeto →</a></div></article>)}</div></section>

      <section className="argon-section argon-showcase argon-shell"><div><p className="argon-kicker">Antes × Depois</p><h2>Uma peça isolada resolve pouco. Um conjunto coerente muda a leitura do lugar.</h2><p>Fachada, iluminação, sinalização e display podem ser pensados como partes da mesma experiência visual.</p></div><figure><Image src="/images/argon/argon-03.jpg" alt="Exemplo de comunicação visual Argon-Bras" width={900} height={600} /><figcaption>Comunicação visual aplicada ao ambiente.</figcaption></figure></section>

      <section id="processo" className="argon-section argon-process argon-shell"><div className="argon-section-intro"><p className="argon-kicker">Como funciona</p><h2>Do briefing à entrega, um caminho claro para tirar o projeto do papel.</h2></div><ol>{processSteps.map(([number, title, text]) => <li key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></li>)}</ol></section>

      <section className="argon-section argon-faq argon-shell" aria-labelledby="faq-title"><div className="argon-section-intro"><p className="argon-kicker">Para começar sem atrito</p><h2 id="faq-title">O essencial para conversar sobre seu projeto.</h2></div><div>{faqs.map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div></section>

      <section className="argon-section argon-proof argon-shell"><p className="argon-kicker">História confirmada</p><h2>Desde 1987, a Argon-Bras atua em comunicação visual.</h2><p>Experiência para conversar sobre o que realmente importa: acabamento, leitura, aplicação e a presença que sua marca precisa transmitir.</p></section>

      <section id="orcamento" className="argon-section argon-form-panel argon-shell"><div><p className="argon-kicker">Próximo passo</p><h2>Conte o que sua marca precisa mostrar.</h2><p>Você pode indicar a peça, o local de aplicação e o que já imagina para o projeto. Se preferir, comece pelo WhatsApp.</p><a className="argon-whatsapp" href={whatsapp} target="_blank" rel="noopener noreferrer">Falar no WhatsApp</a></div><ArgonQuoteForm /></section>

      <footer className="argon-footer argon-shell"><div><Image src="/images/argon/logo-argon.jpg" alt="Argon-Bras" width={142} height={48} /><p>Comunicação visual personalizada.</p><p className="argon-location">Várzea Paulista, SP</p><a href={whatsapp} target="_blank" rel="noopener noreferrer">11 97207-0323</a><a href="mailto:argonbras@gmail.com">argonbras@gmail.com</a></div><nav className="argon-sitemap" aria-label="Mapa do site"><strong>Mapa do site</strong><a href="#topo">Início</a><a href="#transformacao">Transformação</a><a href="#solucoes">Soluções</a><a href="#processo">Como funciona</a><a href="#orcamento">Orçamento</a></nav><div className="argon-security" aria-label="Conexão segura HTTPS"><b>HTTPS</b><span>Conexão segura</span></div></footer>
    </main>
  );
}
