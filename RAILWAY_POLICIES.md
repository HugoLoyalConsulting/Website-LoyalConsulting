# Railway Policies

Aplicacao: esta politica deve ser considerada obrigatoria para qualquer projeto Railway neste workspace.

## Bloqueios absolutos
Nao permitir deploy/hosting/distribuicao de:
- Mirrors / Userbots
- Crypto Miners
- DMCA Protected Content sem permissao legal explicita
- Torrent Aggregators
- VNC / Virtual Desktops
- Anything Illegal

## Checklist obrigatorio antes de qualquer deploy Railway
1. Confirmar que o projeto e o uso sao legais e compativeis com as regras da Railway.
2. Revisar codigo, assets, scripts, rotas e docs para garantir ausencia dos itens bloqueados.
3. Se houver risco, interromper imediatamente e nao executar comandos de deploy.

## Fluxo seguro (sempre)
1. `railway status`
2. Validacao de politica
3. `railway link` (se necessario)
4. `railway up`
5. Revisao de logs e comportamento do servico

## Regra de parada
Se houver duvida juridica, de copyright, ou de classificacao de conteudo:
- parar deploy
- registrar risco encontrado
- solicitar confirmacao explicita antes de continuar
