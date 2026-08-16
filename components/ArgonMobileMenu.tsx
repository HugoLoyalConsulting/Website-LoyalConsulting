"use client";

import { useEffect, useRef, useState } from "react";

const links = [["Início", "#topo"], ["Transformação", "#transformacao"], ["Soluções", "#solucoes"], ["Como funciona", "#processo"], ["Orçamento", "#orcamento"]];

export function ArgonMobileMenu() {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && open) { setOpen(false); triggerRef.current?.focus(); }
    };
    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [open]);
  return <div className="argon-mobile-menu"><button ref={triggerRef} type="button" className="argon-mobile-menu-trigger" aria-expanded={open} aria-controls="argon-mobile-bookmarks" aria-label={open ? "Fechar menu" : "Abrir menu"} onClick={() => setOpen((current) => !current)}><span /><span /><span /></button><nav id="argon-mobile-bookmarks" className="argon-mobile-bookmarks" aria-label="Bookmarks da página" hidden={!open}>{links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}</nav></div>;
}
