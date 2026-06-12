# Integrações — HubSpot & Microsoft Clarity

Toda a infraestrutura já está no código. Para ativar, basta preencher variáveis de
ambiente — **nenhum deploy de código novo é necessário**, apenas re-executar o build.

Sem as variáveis configuradas, nada é carregado no site e nada é enviado: zero
impacto em performance ou privacidade.

---

## 1. Microsoft Clarity (heatmaps + gravações de sessão)

1. Crie a conta em [clarity.microsoft.com](https://clarity.microsoft.com) (gratuito, sem limite).
2. Crie um projeto para `www.loyalconsulting.com.br` e copie o **Project ID**
   (string curta tipo `abc1de2fgh`, visível em Settings → Overview).
3. No GitHub: repositório → **Settings → Secrets and variables → Actions → Variables →
   New repository variable**:
   - Nome: `CLARITY_PROJECT_ID`
   - Valor: o Project ID
4. Re-execute o deploy (aba **Actions → Deploy Website to GitHub Pages → Run workflow**,
   ou faça qualquer push na `main`).

Pronto: heatmaps, scroll maps, gravações e dead/rage clicks em todas as páginas,
incluindo a LP `/discovery`.

> Enquanto isso, o site já tem telemetria própria (page views, scroll depth,
> tempo de leitura) gravada no Postgres via `/api/telemetry` — o Clarity soma
> heatmaps visuais e session replay por cima.

---

## 2. HubSpot

São duas camadas independentes (pode ativar uma, outra ou ambas):

### 2a. Tracking no site (jornada do visitante, chat, pop-ups)

1. Crie a conta no HubSpot (CRM gratuito serve).
2. Copie o **Hub ID / Portal ID** (número no canto superior direito do painel,
   ou em Settings → Account Setup → Account Defaults).
3. No GitHub: **Settings → Secrets and variables → Actions → Variables**:
   - Nome: `HUBSPOT_PORTAL_ID`
   - Valor: o Portal ID (ex.: `145678901`)
4. Re-execute o deploy.

Isso carrega o script oficial do HubSpot em todas as páginas: páginas visitadas,
origem do tráfego, e habilita chat/CTAs/pop-ups criados no painel do HubSpot.

### 2b. Leads do formulário direto no CRM

O backend (Railway) já encaminha cada lead salvo no Postgres para o HubSpot.
Escolha **um** dos modos:

**Modo 1 — Forms API (recomendado, sem token):**

1. No HubSpot: **Marketing → Forms → Create form** (tipo Embedded, não precisa publicar em lugar nenhum).
2. Adicione os campos: `email`, `firstname`, `lastname`, `phone`, `jobtitle`, `message`
   (todos são propriedades padrão do contato).
3. Copie o **Form GUID** — está na URL do editor
   (`.../forms/editor/<FORM_GUID>`) ou em Share → Embed code.
4. No **Railway** (serviço do site, não o Postgres!) → Variables:
   - `HUBSPOT_PORTAL_ID` = Portal ID
   - `HUBSPOT_FORM_GUID` = Form GUID
5. Redeploy do serviço no Railway.

Vantagem: junto com o cookie `hubspotutk` (que o formulário do site já captura e
envia), o contato chega ao HubSpot com **atribuição completa** — origem, páginas
visitadas, campanha. Dores, serviços de interesse, fontes de dados e UTMs vão no
campo `message`.

**Modo 2 — Contacts API (token):**

1. No HubSpot: **Settings → Integrations → Private Apps → Create private app**.
2. Escopos: `crm.objects.contacts.write` e `crm.objects.contacts.read`.
3. Copie o token e configure no Railway: `HUBSPOT_ACCESS_TOKEN` = token.
4. Redeploy do serviço no Railway.

Faz upsert do contato por e-mail (sem duplicar). Menos atribuição de marketing
que o Modo 1.

> O webhook genérico (`CRM_WEBHOOK_URL` + `CRM_WEBHOOK_SECRET`) continua
> funcionando em paralelo, para qualquer outro CRM/Zapier/n8n.

---

## Resumo das variáveis

| Onde | Variável | O que ativa |
|---|---|---|
| GitHub Actions (Variables) | `CLARITY_PROJECT_ID` | Heatmaps/replays do Clarity no site |
| GitHub Actions (Variables) | `HUBSPOT_PORTAL_ID` | Script de tracking do HubSpot no site |
| Railway (Variables) | `HUBSPOT_PORTAL_ID` + `HUBSPOT_FORM_GUID` | Lead → formulário HubSpot (Forms API) |
| Railway (Variables) | `HUBSPOT_ACCESS_TOKEN` | Lead → contato HubSpot (Contacts API) |
| Railway (Variables) | `CRM_WEBHOOK_URL` (+`CRM_WEBHOOK_SECRET`) | Lead → webhook genérico |

⚠️ **Atenção no Railway**: confira que está adicionando variáveis no serviço do
**site Node.js**, nunca no serviço **Postgres** (ver `RAILWAY_POLICIES.md`).
