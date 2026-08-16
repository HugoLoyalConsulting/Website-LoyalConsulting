# Auditoria de direção visual — LP Argon-Bras

**Objetivo:** criar uma LP de comunicação visual com energia editorial, galeria em movimento e controles refinados. As referências servem apenas como **princípios abstratos** (ritmo, movimento, acabamento); não reutilizar layout, texto, assets, código, nomenclatura ou elementos distintivos de Taste/FlutterFlow.

## Diagnóstico do estado acessível

- A página `app/(pt)/argon/page.tsx` já usa imagens locais reais da Argon e tem uma sequência de conteúdo útil: hero, transformação, soluções, processo, FAQ e orçamento.
- A galeria do hero e as fitas de serviços já empregam duplicação de imagens para loop. Isso cria energia, mas hoje as duas soluções são contínuas e competem com a leitura do título/CTA.
- `app/globals.css` concentra muitas versões sobrepostas do sistema Argon (v1/v2, claro/escuro e vários `!important`). Há regras mobile repetidas para a navegação com alturas conflitantes. Consolidar antes de adicionar movimento.
- O fallback de redução de movimento cobre a marquee, mas não de maneira centralizada os reels, flutuação, zoom por hover ou transições. A nav móvel usa botão e `aria-expanded`, porém não fecha por `Escape` nem devolve foco ao gatilho.
- O formulário usa controles nativos e mensagens `role=status/alert`, uma boa base. Seus rótulos visuais devem continuar associados aos campos e os chips de serviço precisam preservar área-alvo mínima.

## Direção original proposta: “sinal em movimento”

**Ideia:** a Argon transforma superfícies físicas em sinais legíveis. A composição usa recortes de obras reais, faixas de cor e uma grade de produção — não um conjunto de cards SaaS.

### Regras de composição

1. **Canvas claro Argon:** fundo off-white com halos suaves de ciano/azul/violeta em baixa opacidade; texto azul-marinho. Use cor forte para orientar ação/estado, não para preencher cada bloco.
2. **Hero como cena, não dashboard:** título e CTA em bloco de leitura estável à esquerda; atrás/direita, 4–6 recortes verticais de fotos reais em profundidades e ângulos sutis. Deixar sempre uma faixa limpa atrás do texto.
3. **Ritmo assimétrico:** alternar seções de largura editorial (texto + 1 imagem dominante) com faixas compactas de processo. Evitar repetir painéis iguais, bento grids e números/“provas” não confirmados.
4. **Superfícies físicas:** bordas finas, sombra curta e raio moderado (16–24 px) para lembrar chapas, acrílico e luminárias. Glass só em nav e caixa do hero; não em todas as seções.
5. **Imagem manda:** usar somente `/public/images/argon/*`, com alt específico por projeto/local/aplicação quando a informação existir. Não escurecer/filtar tanto a ponto de apagar acabamento e cor real.

## Componentes e interações executáveis

### 1. `ProjectRail` — hero e portfólio
- Recebe itens reais `{src, alt, category}`; renderiza uma única lista semântica e uma cópia apenas decorativa (`aria-hidden=true`) para loop.
- Desktop: deslocamento horizontal lento, somente enquanto a seção estiver visível; pausa em `:hover`, `:focus-within` e quando a aba perder visibilidade.
- Mobile: substituir autoplay por trilho horizontal com `overflow-x:auto`, `scroll-snap-type:x mandatory`, botões anterior/próximo e indicador “1 de N”. Não esconder a scrollbar sem alternativa.
- Clique/toque abre diálogo de imagem com `dialog`, botão Fechar, foco preso, `Escape`, legenda e navegação anterior/próxima. Não usar zoom automático.

### 2. `ServiceSwitchboard` — soluções, sem grade SaaS
- Trocar os grupos atuais por um seletor de 2–4 serviços reais em `tablist` ou botões segmentados: “Fachadas”, “Luminosos e neon”, “PDV e displays”, “Sinalização”.
- Ao selecionar, atualizar **uma** foto principal, uma lista de aplicações e CTA contextual; animar só opacidade/`translateY` de 8–12 px em 180–240 ms.
- Estados de botão: padrão, hover, foco visível, selecionado (`aria-selected=true`) e pressionado; área mínima 44 × 44 px.

### 3. `ProcessLine` — percurso de produção
- Manter os quatro passos existentes em uma linha com conectores, não em cartões elevados. Cada etapa mostra número, título e 1 frase.
- Em scroll de mouse fino, revelar o conector uma vez; em teclado/mobile, deixar todos os passos completos e estáticos. Não usar scroll-jacking nem pinning.

### 4. `MaterialCaption` — credibilidade sem métricas inventadas
- Sob fotos-chave, usar legenda factual curta: tipo de peça, aplicação e/ou cidade **apenas se confirmado pelo cliente**.
- Se não houver dado confirmado, manter a legenda genérica atual; não introduzir depoimentos, logos de clientes, percentuais ou contadores.

### 5. Navegação e CTA
- Nav compacta e nítida, com um CTA primário “Solicitar orçamento” e WhatsApp persistente com rótulo acessível. Evitar dois botões verdes flutuantes concorrentes no hero.
- Em mobile, menu abre como painel/drawer: foco inicial no primeiro link, fecha com `Escape`, clique fora e seleção de link; ao fechar, devolver foco ao botão.
- Reservar espaço inferior para o WhatsApp fixo, inclusive em `safe-area-inset-bottom`, para não encobrir submit/campos.

## SOP de implementação (checklist)

- [ ] Criar branch e capturar screenshots desktop (1440 px), tablet (768 px) e mobile (390 px) antes de mexer.
- [ ] Inventariar `public/images/argon/`: aprovar somente imagens reais, definir alt descritivo e escolher 4–6 para hero/rail; não buscar assets de referências.
- [ ] Em `globals.css`, extrair o CSS Argon para um único bloco/arquivo ordenado: tokens → base → componentes → breakpoints → redução de movimento. Remover versões mortas e resolver regras de nav conflitantes antes de novos estilos.
- [ ] Definir tokens: fundo claro, ink, ciano, azul, violeta, magenta de acento, borda, sombra, raio e durações (180/240/480 ms). Validar contraste de texto/controle com WCAG AA (4,5:1 para texto normal; 3:1 para UI).
- [ ] Construir `ProjectRail` com fotos locais; manter texto/CTA em camada estável; usar transform/opacity, `will-change` apenas durante animação e nunca animar layout, blur ou filtros pesados continuamente.
- [ ] Implementar `ServiceSwitchboard` com botões semânticos, estado de teclado (Setas/Home/End se `tablist`) e conteúdo associado por `aria-controls`.
- [ ] Trocar processo por `ProcessLine` e inserir `MaterialCaption` somente com fatos aprovados; preservar FAQ nativo e formulário nativo.
- [ ] Unificar CTA: primário para orçamento, secundário discreto para WhatsApp. Conferir que o botão fixo não sobrepõe conteúdo nem cria duplicidade de destino na mesma dobra.
- [ ] Adicionar foco visível consistente em links, botões, `<summary>`, inputs, chips e controles de galeria; nunca depender apenas de cor/hover.
- [ ] Implementar menu mobile com foco, Escape e retorno de foco. Testar Tab/Shift+Tab, Enter/Espaço e 200% de zoom.
- [ ] Aplicar o bloco global abaixo e garantir que nenhuma animação contínua seja iniciada em modo reduzido:

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    scroll-behavior: auto !important;
    transition-duration: 0.01ms !important;
  }
  .project-rail { overflow-x: auto; }
}
```

- [ ] Testar: navegação só por teclado, leitor de tela (nomes/estado dos controles), zoom 200–400%, largura 320 px, foco no menu/modal, `prefers-reduced-motion`, imagens lentas/ausentes e contraste.
- [ ] Executar `npm run typecheck` e `npm run build`; conferir visualmente as três larguras e confirmar que nenhum texto, layout, asset ou padrão distintivo de terceiros foi copiado.

## Critérios de aceite

- A primeira dobra comunica “comunicação visual” e leva ao orçamento sem sacrificar legibilidade para a galeria.
- O movimento valoriza fotos reais, pode ser pausado/controlado e desaparece corretamente em redução de movimento.
- A página parece uma composição de sinalização e aplicação física da Argon, não uma galeria/mosaico ou interface de produto de outra marca.
- Sem métricas, depoimentos ou alegações além do conteúdo validado na página atual.
