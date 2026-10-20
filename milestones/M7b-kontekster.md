# M7b · Kontekster

**Måldag:** 7 · **Branch:** `m7-contexts` · **Kjerne ≈** 5 t · **Alternativ:** M7a

## Smerten

> «Kjøp melk» og «skriv rapport» ligger i samme liste. GTD handler om kontekster: hva kan jeg gjøre akkurat nå, akkurat her? Én liste for alt er ikke GTD. David Allen gråter.

I dag får todos en kontekst, og du lærer det som gjør en database til en *relasjons*database.

## Mål

En ny tabell `contexts`. Hver todo kan tilhøre én kontekst. API-et kan liste kontekster og filtrere todos på dem. Frontenden har en nedtrekksmeny.

## Nye begreper

- **relasjon**: at en rad i én tabell peker på en rad i en annen
- **fremmednøkkel**: kolonnen som peker. `context_id` i `todos` peker på `id` i `contexts`. Databasen nekter å la den peke på noe som ikke finnes.
- **JOIN**: hent fra to tabeller i én spørring, satt sammen på nøkkelen
- **LEFT JOIN**: som JOIN, men ta med radene som ikke har noen å peke på
- **alias**: `todos.name AS todo_name`, fordi to tabeller kan ha kolonner med samme navn
- **query string**: `?context=2` på slutten av en URL. `req.query.context` i Express.
- **NULL**: «ingen verdi». Ikke 0, ikke tom tekst. Ingenting.
- **GROUP BY**: tell eller summer per gruppe

## Oppgaver

- [ ] 7b.1 **Ny tabell.** I `db/init.sql`: `contexts` med `id SERIAL PRIMARY KEY` og `name TEXT NOT NULL UNIQUE`. Legg til `context_id INTEGER REFERENCES contexts(id)` i `todos`. Rekkefølgen i fila betyr noe. `down -v`, `up -d`. Commit.
- [ ] 7b.2 **SQL for hånd, runde to.** I Adminer: `INSERT` tre kontekster, for eksempel `home`, `work`, `errands`. Lag noen todos og sett `context_id` med `UPDATE`. Så: `SELECT` med `JOIN` som viser todo-navn og kontekst-navn side om side. Prøv å sette `context_id = 99`. Les feilmeldingen. Lag en todo uten kontekst, kjør JOIN-en igjen, og se at den mangler. Bytt til `LEFT JOIN`. Alle spørringene inn i loggen.
- [ ] 7b.3 **Kontekst-API.** `GET /api/contexts` og `POST /api/contexts`. Samme mønster som todos. Duplikat navn gir hvilken feil fra databasen? Hvilken statuskode bør det bli? 409 finnes. Commit.
- [ ] 7b.4 **Todos med kontekst.** `GET /api/todos` bruker `LEFT JOIN` og svarer med `contextName` på hver todo. `GET /api/todos?context=2` legger til `WHERE context_id = $1`. `POST /api/todos` tar imot valgfri `contextId`. Oppdater `openapi.yaml`. Commit.
- [ ] 7b.5 **Frontend.** En nedtrekksmeny over lista med «Alle» pluss kontekstene fra API-et. Velger du én, hentes lista med `?context=`. En nedtrekksmeny i legg-til-skjemaet velger kontekst for nye todos. Vis kontekstnavnet på hver todo. Commit.
- [ ] 7b.6 **Det vanskelige spørsmålet.** Slett en kontekst som har todos. Hva skjer? Velg: `ON DELETE SET NULL` i tabellen, eller `409` fra API-et med en forklaring. Begrunn valget i loggen. Push, PR, merge.

## Ferdig når

- [ ] En todo kan ha en kontekst, eller ingen
- [ ] Filtrering på kontekst virker fra frontenden og i Swagger
- [ ] `JOIN` finnes i koden din og du kan forklare hvorfor det er `LEFT`
- [ ] Databasen nekter ugyldig `context_id`, og API-et svarer fornuftig på det
- [ ] Du har tatt et valg om sletting og kan forsvare det

## Bonus

1. `due_date DATE` på todos. `GET /api/todos?overdue=true` med `WHERE due_date < current_date`. Rød farge i frontenden.
2. `GET /api/contexts` svarer også med antall åpne todos per kontekst. `LEFT JOIN`, `COUNT`, `GROUP BY`. Det er den vanskeligste spørringen i hele prosjektet.
3. «Inbox»: todos uten kontekst, `WHERE context_id IS NULL`. I ekte GTD er det der alt starter.
4. Gi nytt navn til en kontekst med `PATCH /api/contexts/:id`. Se at alle todos følger med, uten at du rører dem. Det er hele poenget med fremmednøkler.
5. En test med `node --test` som lager en kontekst, en todo i den, og sjekker at filteret finner den.

## Kontrollspørsmål

1. Hva er en fremmednøkkel, og hva nekter databasen deg på grunn av den?
2. Forskjellen på `JOIN` og `LEFT JOIN`. Når forsvinner rader?
3. Hvorfor ikke bare lagre kontekstnavnet som tekst i `todos`? Hva går galt når noen bytter navn på `work` til `office`?
4. Hva betyr `NULL` i `context_id`? Er det det samme som 0?
5. Hva gjør `GROUP BY`, i én setning?

## Vanlige feil

- **`column reference "name" is ambiguous`.** Begge tabellene har `name`. Skriv `todos.name` og `contexts.name`, og bruk `AS`.
- **Todos forsvinner etter JOIN.** De uten kontekst. Du ville ha `LEFT JOIN`.
- **`violates foreign key constraint`.** Du prøvde å peke på en kontekst som ikke finnes. Databasen gjør jobben sin. API-et bør svare 400, ikke 500.
- **`init.sql` feiler på `REFERENCES`.** `contexts` må lages *før* `todos` i fila.
- **Nedtrekksmenyen sender `"2"`, ikke `2`.** Strengen som trodde den var et tall. Femte gang. Du begynner å like den.
