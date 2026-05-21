# Loyal Consulting Website

Landing page em Next.js 14 com captura de leads para PostgreSQL (Railway), pronta para integração com CRM futuro.

## Cloud-first (Railway)

Este projeto está preparado para rodar diretamente no Railway com migration automática no boot.

### Variáveis obrigatórias

- `DATABASE_URL`
- `APP_ORIGIN` (URL pública do serviço, exemplo `https://loyal-consulting.up.railway.app`)
- `ALLOWED_ORIGINS` (lista separada por vírgula)
- `RATE_LIMIT_MAX` (exemplo `20`)
- `RATE_LIMIT_WINDOW_MS` (exemplo `60000`)

### Variáveis opcionais (recomendadas)

- `CRM_WEBHOOK_URL` (Webhook do CRM pessoal/HubSpot bridge)
- `CRM_WEBHOOK_SECRET` (segredo para validar origem no receptor)
- `HUBSPOT_WEBHOOK_URL` (alternativa ao CRM_WEBHOOK_URL)
- `TELEMETRY_DASH_TOKEN` (protege `/telemetria` e `GET /api/telemetry`)
- `NEXT_PUBLIC_TELEMETRY_ENDPOINT` (para frontend estático no GitHub Pages)

### Deploy via Railway CLI

1. Instale dependências:
   `npm install`
2. Login no Railway:
   `npx @railway/cli login`
3. Vincule ou crie projeto:
   `npx @railway/cli link`
4. Provisione PostgreSQL no projeto Railway.
5. Defina as variaveis do servico web.
6. Publique:
   `npx @railway/cli up`

`railway.toml` já aponta o start command para `npm run start:cloud`.

## Local (opcional)

1. Instale dependências: `npm install`
2. Copie variáveis de `.env.example` para `.env.local`
3. Rode migration manual: `npm run db:migrate`
4. Inicie: `npm run dev`

## Endpoints

- `POST /api/leads` captura lead
- `GET /api/leads?status=novo&page=1&pageSize=20` lista leads
- `POST /api/telemetry` registra telemetria simplificada
- `GET /api/telemetry` resumo + eventos recentes (com token opcional)

## Telemetria simplificada

- Painel: `/telemetria`
- Captura automática de:
   - page_view
   - page_exit
   - profundidade de scroll
   - tempo de leitura aproximado

Para proteger o painel em produção, defina `TELEMETRY_DASH_TOKEN`.
Uso: `/telemetria?token=SEU_TOKEN`

## Frontend apontando para Railway

Para usar o site estático (ex.: GitHub Pages) e enviar formulário para um backend no Railway:

1. Defina `NEXT_PUBLIC_LEADS_ENDPOINT` com URL completa do backend, por exemplo:
   `https://api.loyalconsulting.com.br/api/leads`
2. Garanta que `ALLOWED_ORIGINS` no backend inclua o domínio do site público.
3. O formulário da home usa essa variável automaticamente; se ela não estiver definida, usa `/api/leads`.

## GitHub Pages (frontend) + Railway (backend/db)

O workflow em `.github/workflows/deploy-gh-pages.yml` publica o frontend estático em GitHub Pages.

Passos no GitHub (repo `Website-LoyalConsulting`):

1. Settings > Pages: Source = GitHub Actions
2. Settings > Secrets and variables > Actions > Variables:
   - `PUBLIC_BACKEND_URL` = URL pública Railway (ex.: `https://seu-backend.up.railway.app`)
3. Push na `main` ou execute o workflow manualmente.

Com isso:
- Frontend serve no GitHub Pages
- Formulário e telemetria continuam enviando para o backend Railway
- Banco PostgreSQL fica centralizado no Railway
