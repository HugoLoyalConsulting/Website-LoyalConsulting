# 📄 ESPECIFICAÇÃO — LANDING PAGE (OTIMIZADA + CRM-READY)

```md id="lp9f3a"
# 1. OBJETIVO

Criar uma Landing Page altamente conversiva para consultoria de BI, com:

- Infraestrutura mínima (Railway)
- Baixo custo (free tier friendly)
- Performance alta
- Estrutura pronta para evoluir para CRM próprio

---

# 2. ARQUITETURA (SIMPLIFICADA E EFICIENTE)

[Client (Browser)]
        ↓
[Next.js App (FE + API)]
        ↓
[PostgreSQL (Railway)]

SEM:
- Firebase
- Supabase
- Ferramentas externas desnecessárias

---

# 3. STACK

- Next.js 14+ (App Router)
- TailwindCSS
- Framer Motion (leve, opcional)
- PostgreSQL (Railway)
- Node.js (API interna)

---

# 4. PRINCÍPIOS DE OTIMIZAÇÃO

- Minimizar requests HTTP
- Evitar libs pesadas
- Priorizar SSR/SSG
- Usar API interna (sem gateways externos)
- Evitar polling → usar eventos simples

---

# 5. ESTRUTURA DO PROJETO

/app
  /page.tsx
  /api
    /leads/route.ts

/components
  Hero.tsx
  Services.tsx
  Proof.tsx
  Dashboard.tsx
  Process.tsx
  CTA.tsx
  Form.tsx
  FAQ.tsx
  Footer.tsx

/lib
  db.ts
  validations.ts

/styles
  globals.css

---

# 6. DESIGN SYSTEM

## Paleta

- bg: #0A0A0F
- surface: #14141F
- primary: #FF00FF
- secondary: #00FFFF
- text: #FFFFFF
- muted: #A0A0B0

## Regras

- border-radius: 16–24px
- sombra: glow neon leve
- hover:
  - scale(1.02)
  - brilho gradiente
- transições: 200–300ms

---

# 7. ESTRUTURA DA LANDING PAGE

## 7.1 HERO

- Headline orientada a resultado
- Subheadline clara
- CTA primário (form)
- CTA secundário (scroll)
- Imagem ou embed leve

---

## 7.2 SERVIÇOS

Lista:

- Power BI
- Modelagem de dados
- SQL performance
- ETL com Python
- Dashboards executivos
- Integração de dados

Formato:
- Card com hover
- Texto curto + benefício

---

## 7.3 PROVA

- Métricas (simuladas ou reais)
- Antes vs depois
- Foco em impacto

---

## 7.4 DASHBOARD (EMBED)

- iframe lazy-loaded
- fallback estático (imagem)

---

## 7.5 PROCESSO

1. Diagnóstico
2. Estruturação
3. Desenvolvimento
4. Entrega
5. Evolução

---

## 7.6 FORMULÁRIO (CRÍTICO)

Campos:

- nome (required)
- email (required)
- empresa
- cargo
- receita
- dor (select)
- mensagem

---

# 8. BACKEND (API INTERNA)

## Endpoint

POST /api/leads

## Regras

- validar inputs
- sanitizar dados
- evitar spam (rate limit simples)

---

# 9. BANCO DE DADOS (CRM-READY)

## Tabela: leads

CREATE TABLE leads (
  id SERIAL PRIMARY KEY,
  nome TEXT NOT NULL,
  email TEXT NOT NULL,
  empresa TEXT,
  cargo TEXT,
  receita TEXT,
  dor TEXT,
  mensagem TEXT,
  status TEXT DEFAULT 'novo',
  score INT DEFAULT 0,
  origem TEXT DEFAULT 'lp',
  created_at TIMESTAMP DEFAULT NOW()
);

---

## Tabela futura: interactions

CREATE TABLE interactions (
  id SERIAL PRIMARY KEY,
  lead_id INT,
  tipo TEXT,
  descricao TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

---

# 10. LÓGICA DE CAPTURA

Fluxo:

Form → POST API → DB → resposta sucesso

Retorno:

{
  success: true
}

---

# 11. VALIDAÇÕES

Frontend:

- email válido
- nome obrigatório

Backend:

- sanitização
- evitar duplicidade (email)

---

# 12. SEGURANÇA BÁSICA

- rate limit simples (IP)
- evitar SQL injection (query parametrizada)
- CORS restrito

---

# 13. PERFORMANCE

- imagens otimizadas
- iframe lazy
- bundle < 200kb (ideal)
- evitar re-render desnecessário

---

# 14. SEO

- title otimizado
- meta description
- headings estruturados

---

# 15. TRACKING (SEM FERRAMENTAS PAGAS)

Implementar:

- log de eventos no backend

Tabela futura:

events:
- tipo
- origem
- timestamp

---

# 16. UX (CRÍTICO)

- CTA visível sempre
- formulário simples
- sem fricção
- foco em dor → solução

---

# 17. PREPARAÇÃO PARA CRM

O sistema já deve permitir:

- listar leads
- filtrar por status
- atualizar status manualmente (futuro)

---

# 18. ROADMAP FUTURO

- painel interno (/admin)
- autenticação
- lead scoring automático
- automações de follow-up

---

# 19. CRITÉRIOS DE ACEITAÇÃO

- página carrega < 3s
- formulário funcional
- dados salvos no DB
- estrutura pronta para CRM
- responsivo (mobile-first)
```

---

# Considerações técnicas (objetivas)

### Fatos estabelecidos

* Consolidar FE + BE + DB em um único ambiente (como Railway) **reduz latência e complexidade**
* Menos dependências externas → menor custo e menor risco operacional

### Interpretação predominante

* Para MVPs e early-stage, essa arquitetura é:

  * mais rápida de iterar
  * mais fácil de manter
  * suficientemente escalável no início

### Limitações / incertezas

* Railway free tier pode ter:

  * cold starts
  * limites de uso
* Escalabilidade alta pode exigir separação futura (não agora)