# M3 · Første server

**Måldag:** 3 · **Branch:** `m3-server` · **Kjerne ≈** 5 t · **Første time:** sammen med veileder

## Smerten

> Lista di finnes bare i denne nettleseren, på denne maskinen. Mobilen din aner ingenting. Det er ikke en app, det er en hemmelighet.

Vi trenger ett sted alle kan spørre: en server. I dag lager du den, og den husker lista for alle som spør. Fram til du restarter den, men det er morgendagens problem.

## Mål

En Node-server med Express som svarer på `GET`, `POST` og `DELETE` under `/api/todos`, med lista i minnet, dokumentert i Swagger UI.

## Nye begreper

- **server**: et program som venter på spørsmål og svarer. Ikke en maskin i et kjellerrom, bare et program.
- **klient**: den som spør. Nettleseren din, `curl`, Swagger.
- **Node**: JavaScript utenfor nettleseren
- **npm og package.json**: kodebiblioteker andre har skrevet, og lista over hvilke du bruker
- **Express**: et bibliotek som gjør det lett å lage en server
- **port**: et nummer på maskinen din som serveren lytter på. 3000 er vår.
- **HTTP-metode**: `GET` henter, `POST` lager, `PATCH` endrer, `DELETE` sletter
- **rute**: metode + sti, som `GET /api/todos`. Serveren har én funksjon per rute.
- **request og response**: spørsmålet som kommer inn, svaret som går ut
- **statuskode**: 200 ok, 201 laget, 400 du spurte feil, 404 finnes ikke, 500 jeg feilet
- **JSON over HTTP**: svaret er tekst som ser ut som JavaScript-objekter
- **OpenAPI / Swagger**: en fil som beskriver API-et ditt, og en nettside som leser fila og lar deg prøve det

## Oppgaver

- [ ] 3.1 **Node fungerer.** `node -v` skal si 20.11 eller nyere. I `backend/`: `npm init -y`, legg til `"type": "module"` i `package.json`, `npm install express`. Åpne `package.json` og `node_modules/` og se hva som skjedde. Hvorfor ligger `node_modules` i `.gitignore`? Commit.
- [ ] 3.2 **Hello, server.** `server.js` som lager en Express-app, svarer `"Hello from the server"` på `GET /` og lytter på port 3000. Start med `node --watch server.js`. Åpne `http://localhost:3000`. Endre teksten, lagre, refresh. Hva gjør `--watch`? Commit.
- [ ] 3.3 **Lista bor på serveren.** Et array `todos` i `server.js` med to hardkodede todos. `GET /api/todos` svarer med arrayet som JSON. Åpne adressen i nettleseren. Du ser JSON. Det er API-et ditt. Commit.
- [ ] 3.4 **Legg til via POST.** `app.use(express.json())` øverst. `POST /api/todos` leser `name` fra `req.body`, lager en todo med ny id og `done: false`, legger den i arrayet, svarer `201` med den nye todoen. Test fra terminalen:
  ```bash
  curl -X POST localhost:3000/api/todos -H 'Content-Type: application/json' -d '{"name":"Buy milk"}'
  curl localhost:3000/api/todos
  ```
  Commit.
- [ ] 3.5 **Swagger UI.** `npm install swagger-ui-express yaml`. Lag `backend/openapi.yaml` med skjelettet under, og legg til `POST` selv. Monter Swagger på `/docs`. Åpne `http://localhost:3000/docs`, trykk «Try it out» på POST, lag en todo. Commit.
- [ ] 3.6 **Slett via DELETE.** `DELETE /api/todos/:id` finner todoen på `req.params.id`, fjerner den og svarer `204`. Finnes den ikke: `404` med `{ "error": "todo not found" }`. Legg ruten i `openapi.yaml`. Test begge utfall i Swagger. Commit.
- [ ] 3.7 **Gullfisktesten.** Lag tre todos. Stopp serveren med Ctrl+C. Start den igjen. Hent lista. Skriv i `rapport/LOGG.md` hvorfor den er tom. Push, PR, merge.

### Skjelett til `openapi.yaml`

```yaml
openapi: 3.0.3
info:
  title: GTD API
  version: 0.1.0
paths:
  /api/todos:
    get:
      summary: List all todos
      responses:
        "200":
          description: A list of todos
```

Hvordan du monterer den i Express står i README-en til `swagger-ui-express`. Hvordan du leser YAML-fila til et objekt står i README-en til `yaml`. Det er tre linjer til sammen. Les dem selv, det er sånn det er å jobbe.

## Ferdig når

- [ ] `node --watch server.js` starter serveren uten feil
- [ ] `GET`, `POST` og `DELETE` virker fra både `curl` og Swagger
- [ ] `DELETE` på ukjent id gir 404 med en feilmelding i JSON
- [ ] `openapi.yaml` beskriver alle tre rutene
- [ ] `node_modules` er ikke på GitHub
- [ ] Du kan forklare hva som skjer fra `curl` trykkes til svaret kommer

## Bonus

1. `PATCH /api/todos/:id` som setter `done` fra body. Trengs i morgen uansett.
2. Validering: `POST` uten `name`, eller med tomt `name`, gir `400` og `{ "error": "name is required" }`
3. `GET /api/todos/:id` for én todo
4. Flytt rutene til `routes/todos.js` med `express.Router()`
5. `scripts/smoke.sh` med alle curl-kallene, så du kan teste alt med én kommando
6. Logg hver request til terminalen: metode, sti, statuskode. Én `app.use` øverst.

## Kontrollspørsmål

1. Hva er en port? Hva skjer hvis to programmer vil ha samme port?
2. Hva er forskjellen på `GET` og `POST`? Hvorfor ikke bare bruke `GET` til alt?
3. Hva gjør `express.json()`? Hva er `req.body` uten den?
4. Hva er forskjellen på 200, 201 og 404? Hvem bryr seg?
5. Hvorfor husker ikke serveren todos etter restart? Hvor lå de?

## Vanlige feil

- **`EADDRINUSE: address already in use :::3000`.** En gammel server kjører fortsatt. Finn den: `lsof -i :3000`. Eller let etter terminalfanen du glemte.
- **`req.body` er `undefined`.** Du glemte `express.json()`, eller du la den etter rutene. Rekkefølge betyr noe i Express.
- **Serveren som aldri svarer.** Nettleseren spinner for alltid. Du har en rute som aldri kaller `res.send`, `res.json` eller `res.status(...).end()`. Hver rute må svare, alltid, i alle grener.
- **Strengen som trodde den var et tall, nå på serveren.** `req.params.id` er tekst. Samme feil som dag 1 og dag 2. Du kjenner den nå.
- **`Cannot use import statement outside a module`.** Du mangler `"type": "module"` i `package.json`.
- **curl sier `Unexpected token`.** JSON-en din i `-d` har enkle fnutter inni, eller mangler fnutter rundt nøkkelen. JSON er streng på fnutter.
