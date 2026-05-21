# TASTE_v2 — Guia de Estilo Anabolizado
> Inspirado em tasteskill.dev · Dark Premium · PT-BR · Loyal Consulting

Este documento é a bíblia de design do site. Toda página nova deve sair daqui.

---

## 1. Fundação Visual

### Paleta de Cores
```
bg (fundo raiz)    #07070E   — quase-preto, fundo de tudo
surface            #0F0F1A   — cards, seções alternadas
surface2           #16162A   — bordas, hover states
accent             #6C63FF   — violeta, CTA, destaques
text               #F0EDE8   — branco-quente, corpo de texto
muted              #6B7280   — texto secundário, eyebrows apagados
success            #2EE6A6   — confirmação, pill de status
danger             #FF5A7A   — erro, alerta
border             rgba(255,255,255,0.07)
```

### Tipografia
```
--font-body:    'Outfit', sans-serif       — todo o corpo, nav, labels
--font-display: 'DM Serif Display', serif  — H1, H2, pull quotes
```

**Regras de escala tipográfica:**
- H1 hero: `clamp(2.6rem, 6vw, 5.4rem)`, `font-family: var(--font-display)`, `line-height: 1.08`
- H2 seção: `clamp(2rem, 4vw, 3.8rem)`, display, `line-height: 1.1`
- H3 card: `1.05rem–1.25rem`, display
- Body copy: `clamp(0.95rem, 1.2vw, 1.1rem)`, Outfit, `line-height: 1.72`, `color: rgba(240,237,232,0.6)`
- Eyebrow/label: `0.68rem`, `letter-spacing: 0.16em`, `text-transform: uppercase`, `color: accent`
- Caption micro: `0.7rem`, `letter-spacing: 0.18em`, muted

---

## 2. Layout — A Anatomia de uma Página

### Regra de Ouro
Cada página é uma sequência de **blocos de tensão** que se alternam entre:
- **Texto dominante** (esquerda pesada, imagem direita)
- **Visual dominante** (collage plena, texto minimalista)
- **Tipografia pura** (escape section, sem imagens)
- **Grid de itens** (tools, capabilities, serviços)

### Estrutura padrão de página
```
NAV (sticky, blur)
HERO (2 colunas: texto esq + collage dir)
MARQUEE (faixa infinita)
WORKS (2 colunas: headline + collage invertida)
  └── TOOLS GRID (8 itens numerados)
ESCAPE (tipografia gigante, sem imagem)
CODE STRIP (screenshots reais de código)  ← prova de craft
CAPACIDADES (lista numerada esq + preview dir)
DESIRE / GSAP (stack cards animados)
DIAGNÓSTICO (2 colunas: texto + imagem)
FORM (LeadCaptureForm)
FOOTER
```

---

## 3. Componentes — Receitas Prontas

### 3.1 NAV — `.ts-nav`
```css
/* Pill de navegação centralizado, logo esquerda, CTA direita */
display: flex; align-items: center; justify-content: space-between;
background: rgba(7,7,14,0.7); backdrop-filter: blur(16px);
border: 1px solid rgba(255,255,255,0.07); border-radius: 999px;
padding: 0.55rem 0.55rem 0.55rem 1.25rem;
```
- Logo: `ts-nav-logo` — ícone quadrado arredondado (accent bg) + nome
- Centro: `ts-nav-pill hidden sm:flex` — links simples, sem sublinhado
- Direita: `ts-nav-action` — pill accent com hover brilhante

### 3.2 HERO — `.ts-hero`
```css
display: grid; grid-template-columns: 1fr 1fr;
gap: 3rem; align-items: center;
padding: clamp(4rem, 8vw, 8rem) 0;
```
**Coluna esquerda:**
- Eyebrow → H1 display → tagline dash (`—`) → copy → stat-pill → CTA row

**Coluna direita (`.ts-hero-visual`):**
- 3 figuras absolutas, cada uma rotacionada levemente
- `ts-hv-1`: maior, centro, `rotate(-2deg)`
- `ts-hv-2`: menor, topo-direita, `rotate(3deg) translateY(-20px)`
- `ts-hv-3`: menor, baixo-esquerda, `rotate(1.5deg) translateY(20px)`
- Todas com `border-radius: 12px`, `box-shadow: 0 24px 60px rgba(0,0,0,0.5)`

**H1 padrão:**
```jsx
<h1 className="ts-hero-h1 reveal-up mt-3">
  Título Primário
  <br />
  Complemento.
</h1>
```
Regra: terminar com ponto final. Máximo 5 palavras por linha.

### 3.3 MARQUEE BAND — `<MarqueeBand />`
- Faixa horizontal com nomes de ferramentas/tecnologias
- Velocidade: 30s, `animation: marquee 30s linear infinite`
- Separador: `·` (ponto mediano) em accent
- Fundo: `surface`

### 3.4 WORKS — `.ts-works-top`
```css
display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: start;
```
**H2 stacked (`.ts-works-h2`):**
```jsx
<h2 className="ts-works-h2">
  <span>Funciona com</span>
  <span>qualquer fonte</span>
  <span>de dado.</span>
</h2>
```
Cada `<span>` em display block, tamanhos decrescentes, último em accent.

**Collage direita:** 3 figuras `absolute`, rotações opostas ao hero (espelhar).

**Tools grid (`.ts-tools-grid`):**
```css
display: grid; grid-template-columns: repeat(4, 1fr); /* 2fr no mobile */
gap: 1.5rem; margin-top: 3.5rem;
```
Cada item: número `0X` em accent opaco → nome em display → desc em muted.

### 3.5 ESCAPE — `.ts-escape-section`
```css
padding: 6rem 0; overflow: hidden;
```
Tipografia em 3 linhas de tamanho decrescente. Padrão:
```
linha 1: "Fuja da"          — clamp(4rem, 9vw, 9rem) · display · muted
linha 2: [outline] [solid]  — clamp(5rem, 11vw, 11rem) · display
linha 3: "sistema."         — clamp(2.5rem, 5vw, 5rem) · accent
```
- `ts-escape-outline`: apenas borda de texto (webkit-text-stroke) cor accent
- `ts-escape-solid`: preenchido branco

> **Copy rule:** a palavra em outline é o "vilão" (planilha, excel, manual). A palavra solid é a transição. A linha 3 é a solução.

### 3.6 CODE STRIP — `.ts-code-strip`
Nova seção de "prova de craft". Usar screenshots reais de código.
```css
padding: 5rem 0; background: surface;
```
**Layout collage:**
- `ts-cc-main`: 62% da largura, `rotate(-1.2deg)`, borda accent sutil
- `ts-cc-side`: 34% da largura, `rotate(1.5deg) translateY(-18px)`, borda branca sutil
- Hover: ambas voltam para `rotate(0deg) translateY(0)` com `transition: 0.4s`

### 3.7 CAPACIDADES — `.ts-cap-grid`
```css
display: grid; grid-template-columns: 1.2fr 1fr; gap: 4rem; margin-top: 3rem;
```
**Item de capacidade (`.ts-cap-item`):**
```
[num] [body]
 01   [row: título + tag]
      [desc]
```
- Separador entre itens: `border-bottom: 1px solid border`, `padding: 1.5rem 0`
- Tag: pill pequeno accent, `font-size: 0.65rem`, `letter-spacing: 0.14em`
- Hover: `background: surface`, leve translation

**Preview direita:** 3 figuras empilhadas com gap, sticky no scroll.

### 3.8 DIAGNÓSTICO — `.ts-diag-section`
```css
display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: center;
```
- H2 display grande: termina em ponto. Ex: "Diagnóstico."
- Sub: 1–2 linhas, copy objetivo, `opacity: 0.6`
- CTA row: `btn-accent` + label micro `Sem custo · 30 min`
- Visual: figura única com `border-radius: 16px`, sombra profunda, leve rotação

---

## 4. Botões e CTAs

```css
/* btn-accent — CTA principal */
background: #6C63FF; color: #fff; border-radius: 999px;
padding: 0.75rem 1.6rem; font-size: 0.9rem; font-weight: 600;
transition: filter 0.2s; cursor: pointer;
/* hover: */ filter: brightness(1.12);

/* btn-outline — secundário */
background: transparent; color: #F0EDE8;
border: 1px solid rgba(255,255,255,0.18); border-radius: 999px;
padding: 0.75rem 1.6rem;
/* hover: */ background: rgba(255,255,255,0.06);
```

**Regra:** sempre um `btn-accent` + um `btn-outline` em par. Nunca dois accent lado a lado.

---

## 5. Imagens e Figuras

### Tratamento de screenshots de dashboard
```css
border-radius: 12–16px;
border: 1px solid rgba(255,255,255,0.07);
box-shadow: 0 24px 72px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.04);
overflow: hidden;
```

### Tratamento de screenshots de código
```css
border-radius: 12–14px;
border: 1px solid rgba(108,99,255,0.22);  /* accent sutil */
box-shadow: 0 24px 72px rgba(0,0,0,0.55);
```
Code shots devem estar levemente rotacionados (±1–2deg) e voltarem para 0 no hover.

### Rotações padrão (collage style)
| Posição | Rotação | TranslateY |
|---------|---------|------------|
| Principal / centro | -1.5° a -2° | +10px |
| Canto superior direito | +2° a +3° | -20px |
| Canto inferior esquerdo | +1° a +1.5° | +20px |
| Topo (code side) | +1.5° | -18px |

**Regra:** hero e works collage têm rotações opostas entre si para criar tensão visual.

---

## 6. Animações

### Reveal-up (scroll)
```css
.reveal-up {
  opacity: 0; transform: translateY(28px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}
.reveal-up.visible {
  opacity: 1; transform: translateY(0);
}
```
Usar `IntersectionObserver` com `threshold: 0.15`. Stagger de 120ms entre irmãos.

### GSAP Stack Cards (TasteDesireMotion)
- 3 cards com `fromTo: { y: 64, opacity: 0, scale: 0.95 } → { y: 0, opacity: 1, scale: 1 }`
- `toggleActions: "play none none reverse"` — **SEM pin, SEM scrub**
- Trigger: `start: "top 80%"`

### Marquee
```css
@keyframes marquee {
  0%   { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
animation: marquee 30s linear infinite;
```

### Hover em figuras
```css
transition: transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
hover: transform: rotate(0deg) translateY(0) scale(1.015);
```

---

## 7. Seção Divider

```css
.section-divider {
  height: 1px;
  background: linear-gradient(90deg,
    transparent 0%,
    rgba(108,99,255,0.3) 30%,
    rgba(255,255,255,0.1) 60%,
    transparent 100%
  );
}
```
Sempre antes do conteúdo de cada seção. Nunca entre cards internos.

---

## 8. Copy — Tom de Voz

### Regras absolutas
- **Sempre PT-BR**, sem anglicismos desnecessários
- **Terminar headings com ponto final** — cria peso e finalidade
- **Sem "marketing", "vendas", "financeiro"** — usar "áreas", "operação", "fontes de dados"
- **Sem jargão vazio** — "ecossistema", "sinergia", "holístico" são proibidos
- **Máximo 12 palavras por heading**, 2 linhas ideais
- **Copy de seção:** 1–2 frases. Objetivo. Sem enrolação.

### Fórmula de copy por seção
| Seção | Fórmula |
|-------|---------|
| Hero H1 | `[Resultado desejado]` + `[sem fricção/sem retrabalho].` |
| Hero sub | `[Quem serve]` + `[o que entrega]` |
| Dash | `— [Dado/ação]. [Consequência].` |
| Works H2 | `Funciona com` / `[escopo amplo]` / `[resultado].` |
| Escape | `Fuja da` / `[vilão em outline]` + `[transição]` / `[solução].` |
| Diagnóstico | Uma palavra. Com ponto. Ex: "Diagnóstico." |
| CTA label micro | `Sem custo · 30 min · [status]` |

### Exemplos de copy aprovados
```
"Operação de Dados sem Fricção."
"Funciona com qualquer fonte de dado."
"Fuja da planilha como sistema."
"Dado estruturado. Decisão sem espera."
"Diagnóstico gratuito em 30 minutos."
```

### Exemplos proibidos
```
✗ "Transforme seu negócio com IA e Big Data"
✗ "Soluções inteligentes para marketing e vendas"
✗ "Ecossistema integrado de dados para toda a empresa"
✗ "Maximize o ROI com dashboards em tempo real"
```

---

## 9. Mobile / Responsividade

### Breakpoint único relevante: `900px` (`sm` no Tailwind = `640px`)

```css
@media (max-width: 900px) {
  .ts-hero          { grid-template-columns: 1fr; }
  .ts-hero-visual   { display: none; }   /* collage some no mobile */
  .ts-works-top     { grid-template-columns: 1fr; }
  .ts-works-collage { display: none; }
  .ts-cap-grid      { grid-template-columns: 1fr; }
  .ts-cap-preview   { display: none; }
  .ts-diag-section  { grid-template-columns: 1fr; }
  .ts-tools-grid    { grid-template-columns: repeat(2, 1fr); }
  .ts-code-collage  { flex-direction: column; height: auto; }
}
```

**Regra de ouro mobile:** se um elemento é puramente decorativo (collage, figuras), some no mobile com `hidden sm:block`. O conteúdo de texto fica sempre.

---

## 10. Checklist — Nova Página

Antes de subir qualquer nova página, confirmar:

- [ ] Uma única `export default function NomePagina()` no arquivo
- [ ] Imports apenas dos componentes realmente usados
- [ ] Nenhuma menção a "marketing", "vendas", "financeiro", "CRM" no copy
- [ ] Todos os `<img>` têm `alt` descritivo e `loading="lazy"` (exceto hero que é `eager`)
- [ ] Todos os `<img>` têm comentário `{/* eslint-disable-next-line @next/next/no-img-element */}` imediatamente antes
- [ ] `btn-accent` e `btn-outline` sempre em par
- [ ] Headings terminam em ponto final
- [ ] `section-divider` antes de cada seção
- [ ] `section-eyebrow` como label de contexto em cada seção
- [ ] Mobile: collage/visual ocultos, texto sempre visível
- [ ] `ts-escape-outline` usa webkit-text-stroke (sem fill)
- [ ] GSAP: sem `pin: true`, sem `scrub` — usar apenas `toggleActions`
- [ ] `npm run typecheck` passa sem erros antes do build
- [ ] `npm run dev:stable` (nunca `--turbo` no OneDrive)

---

## 11. Classes CSS de Referência Rápida

### Navegação
| Classe | Uso |
|--------|-----|
| `.ts-nav` | Container nav pill |
| `.ts-nav-logo` | Link logo com ícone |
| `.ts-nav-logo-icon` | Quadrado accent com iniciais |
| `.ts-nav-pill` | Centro: links de navegação |
| `.ts-nav-action` | CTA direita |

### Hero
| Classe | Uso |
|--------|-----|
| `.ts-hero` | Grid 2 colunas |
| `.ts-hero-h1` | H1 display gigante |
| `.ts-hero-sub` | Tagline abaixo do H1 |
| `.ts-hero-dash` | Linha `—` estilo editorial |
| `.ts-hero-copy` | Parágrafo de copy |
| `.ts-stat-pill` | Pílula de destaque (→ texto) |
| `.ts-cta-row` | Linha de CTAs |
| `.ts-cta-label` | Label micro ao lado do CTA |
| `.ts-hero-visual` | Container das figuras flutuantes |
| `.ts-hv-1/2/3` | Figuras individuais rotacionadas |

### Works / Ferramentas
| Classe | Uso |
|--------|-----|
| `.ts-works-top` | Grid 2 colunas da seção works |
| `.ts-works-h2` | H2 stacked em 3 spans |
| `.ts-works-collage` | Container figuras colagem direita |
| `.ts-wc-1/2/3` | Figuras individuais works |
| `.ts-tools-grid` | Grid 4 colunas de ferramentas |
| `.ts-tool-item` | Item de ferramenta |
| `.ts-tool-num` | Número `0X` em accent |
| `.ts-tool-name` | Nome da ferramenta |
| `.ts-tool-desc` | Descrição curta |

### Escape
| Classe | Uso |
|--------|-----|
| `.ts-escape-section` | Container da seção tipográfica |
| `.ts-escape-line` | Linha de texto |
| `.ts-escape-xl` | Linha gigante muted |
| `.ts-escape-mid` | Container da linha do meio |
| `.ts-escape-outline` | Palavra com apenas stroke |
| `.ts-escape-solid` | Palavra preenchida |
| `.ts-escape-sm` | Linha accent menor |

### Code Strip
| Classe | Uso |
|--------|-----|
| `.ts-code-strip` | Seção com fundo surface |
| `.ts-code-collage` | Flex container das figuras |
| `.ts-cc-main` | Screenshot principal (62%) |
| `.ts-cc-side` | Screenshot lateral (34%) |

### Capacidades
| Classe | Uso |
|--------|-----|
| `.ts-cap-header` | Bloco de header da seção |
| `.ts-cap-grid` | Grid 2 colunas |
| `.ts-cap-item` | Item de capacidade |
| `.ts-cap-num` | Número `0X` |
| `.ts-cap-body` | Container título + desc |
| `.ts-cap-row` | Linha título + tag |
| `.ts-cap-title` | H3 display |
| `.ts-cap-tag` | Pill de categoria |
| `.ts-cap-desc` | Descrição muted |
| `.ts-cap-preview` | Container figuras preview |
| `.ts-cap-figure` | Figura individual preview |

### Diagnóstico
| Classe | Uso |
|--------|-----|
| `.ts-diag-section` | Grid 2 colunas |
| `.ts-diag-h2` | H2 display grande |
| `.ts-diag-desc` | Descrição copy |
| `.ts-diag-cta-row` | Linha CTA + label |
| `.ts-diag-label` | Label micro "Sem custo · 30 min" |
| `.ts-diag-visual` | Figura com sombra |

### Globais
| Classe | Uso |
|--------|-----|
| `.section-divider` | Linha gradiente separadora |
| `.section-eyebrow` | Label uppercase accent |
| `.section-title` | H2 padrão de seção |
| `.section-copy` | Parágrafo padrão muted |
| `.reveal-up` | Animação de entrada scroll |
| `.btn-accent` | CTA primário violeta |
| `.btn-outline` | CTA secundário transparente |

---

## 12. Estrutura de Arquivos

```
Website/
├── app/
│   ├── layout.tsx          ← Outfit + DM Serif Display, metadata PT-BR
│   ├── globals.css         ← TODO o CSS. Sem CSS Modules. Sem styled-components.
│   └── page.tsx            ← Página principal
├── components/
│   ├── LeadCaptureForm.tsx ← NÃO MODIFICAR (form + API)
│   ├── MarqueeBand.tsx     ← Marquee de ferramentas
│   ├── TasteDesireMotion.tsx ← GSAP stack cards
│   └── HeroCarousel.tsx    ← Criado, não usado (reserva)
├── public/
│   ├── images/
│   │   ├── code-python.png ← Screenshot Python (SALVAR MANUALMENTE)
│   │   └── code-sql.png    ← Screenshot SQL (SALVAR MANUALMENTE)
│   └── svg/
│       └── etl-pipeline.svg ← Pipeline ETL custom
├── lib/
│   ├── db.ts
│   ├── rate-limit.ts
│   ├── sanitization.ts
│   ├── types.ts
│   └── validations.ts
└── TASTE_v2.md             ← Este arquivo
```

---

## 13. Comandos Essenciais

```powershell
# SEMPRE usar dev:stable (sem Turbopack — OneDrive tem problema com --turbo)
npm run dev:stable

# Typecheck antes de qualquer deploy
npm run typecheck

# Build de produção
npm run build

# Se o servidor travar na porta 3000:
$proc = Get-NetTCPConnection -LocalPort 3000 -ErrorAction SilentlyContinue |
  Select-Object -ExpandProperty OwningProcess -Unique
if ($proc) { Stop-Process -Id $proc -Force }
npm run dev:stable
```

---

*Última atualização: v2.0 — tasteskill.dev clone structure*
