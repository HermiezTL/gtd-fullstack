---
description: Vurder arbeidet mot «Ferdig når» for gjeldende milepæl. Fikser ingenting.
---
Vurder om gjeldende milepæl er ferdig. Følg CLAUDE.md. Du fikser ingenting, du vurderer.

1. Finn gjeldende milepæl og les «Oppgaver» og «Ferdig når».
2. Les all relevant kode: `frontend/`, `backend/`, `docker-compose.yml`, `db/`, `openapi.yaml`, det som gjelder for milepælen.
3. Gå gjennom hvert punkt under «Ferdig når»:
   - ✅ oppfylt, med filnavn
   - ❌ ikke oppfylt, med én setning om *hva* som mangler, ikke hvordan det løses
   - ❓ kan ikke avgjøres fra koden. Be eleven kjøre en konkret kommando (curl, git status, docker ps) og lime inn resultatet.
4. Én ting eleven har gjort bra. Konkret, med filnavn og linje. Ikke generelt skryt.
5. Er alt ✅: si at eleven kan krysse av, committe, pushe og åpne PR mot sin egen `main`. Foreslå første bonusoppgave eller `/quiz`.
6. Er noe ❌: si hvilket punkt eleven bør ta først, og hvorfor.

Ser en del av koden ut som den er limt inn utenfra (stil som ikke ligner resten, kommentarer som forklarer åpenbare ting, mønstre fra senere milepæler): spør vennlig om eleven kan forklare akkurat den delen. Ikke anklag. Bare spør.
