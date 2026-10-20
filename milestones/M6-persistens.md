# M6 · Persistens ferdig

**Måldag:** 6 · **Branch:** `m6-persistence` · **Kjerne ≈** 5 t

## Smerten

> Avkryssing funker ikke lenger, for `PATCH` snakker fortsatt med et array som ikke finnes. Passordet til databasen ligger i koden din, på GitHub, offentlig. Og appen starter bare hvis du husker tre kommandoer i riktig rekkefølge.

Passordet er riktignok `gtd`, og ingen bryr seg. Men vanen er det som teller. I dag blir prosjektet voksent.

## Mål

Alle fire operasjoner går mot databasen. Ugyldig input avvises med riktig statuskode. Konfigurasjon ligger i `.env`, ikke i koden. Hele stacken starter med `docker compose up --build`.

## Nye begreper

- **UPDATE ... RETURNING**: endre en rad og få den tilbake i samme spørring
- **validering**: aldri stol på det klienten sender. Sjekk, og svar 400 hvis det er tull.
- **feilhåndtering**: når databasen feiler, skal klienten få 500 og en generell melding, ikke stack tracen din
- **miljøvariabel og `.env`**: verdier som er forskjellige per maskin, som passord og porter, lest inn ved oppstart. Aldri i git.
- **`.env.example`**: samme fil uten hemmeligheter, så andre vet hva de må fylle ut
- **Dockerfile**: oppskriften for å pakke *din* server som et image
- **`.dockerignore`**: `.gitignore` for Docker. `node_modules` skal ikke kopieres inn.
- **service name som hostname**: inne i Compose heter databasen `db`, ikke `localhost`
- **healthcheck og `depends_on`**: «ikke start API-et før databasen faktisk svarer»

## Oppgaver

- [ ] 6.1 **PATCH mot databasen.** `UPDATE todos SET done = $1 WHERE id = $2 RETURNING *`. 404 hvis ingen rad. Test: avkryssing virker igjen, og overlever restart. Commit.
- [ ] 6.2 **Validering.** `POST` uten `name`, med tomt `name` eller bare mellomrom: `400` og `{ "error": "name is required" }`. `PATCH` der `done` ikke er `true` eller `false`: `400`. Id som ikke er et tall: `400`. Test alle i Swagger. Legg 400-svarene inn i `openapi.yaml`. Commit.
- [ ] 6.3 **Feilhåndtering.** Stopp databasen og gjør et `GET`. Hva ser klienten? Legg til en feilhåndterer i Express med fire parametre nederst i `server.js`, som logger feilen og svarer `500` med `{ "error": "something went wrong" }`. Express 5 sender feil fra `async`-ruter dit automatisk. Test igjen. Commit.
- [ ] 6.4 **Konfig ut av koden.** `backend/.env` med `DATABASE_URL=...` og `PORT=3000`. Les med `process.env`. Start med `node --watch --env-file=.env server.js`. Legg `.env` i `.gitignore` hvis den ikke er der, og lag `.env.example` uten passordet. Sjekk med `git status` at `.env` ikke er med. Commit.
- [ ] 6.5 **npm-scripts.** I `package.json`: `"dev"` som kjører kommandoen over, `"start"` som kjører `node server.js`. Fra nå: `npm run dev`. Commit.
- [ ] 6.6 **Dockerfile.** `backend/Dockerfile` som starter fra `node:22-alpine`, setter `WORKDIR`, kopierer `package*.json`, kjører `npm ci`, kopierer resten, og starter med `npm start`. `backend/.dockerignore` med `node_modules` og `.env`. Test: `docker build -t gtd-api ./backend` bygger uten feil. Commit.
- [ ] 6.7 **Hele stacken i Compose.** Legg til tjenesten `api` i `docker-compose.yml` med skjelettet under. `docker compose up --build`. Åpne `http://localhost:3000`. Alt virker, og du startet ingenting manuelt. Stopp den lokale `npm run dev` først hvis porten er opptatt. Commit.
- [ ] 6.8 **Dokumenter.** `openapi.yaml` dekker alle ruter med alle statuskoder. Skriv «Slik kjører du»-avsnittet i README-en din: to kommandoer, maks. Push, PR, merge.

### Skjelett til `api`-tjenesten

```yaml
  api:
    build: ./backend
    ports:
      - "3000:3000"
    environment:
      DATABASE_URL: postgres://gtd:gtd@db:5432/gtd
      PORT: 3000
    depends_on:
      db:
        condition: service_healthy
```

Legg merke til `@db`. Inne i Compose er `db` navnet på databasen. `localhost` inne i `api`-containeren er containeren selv, og der bor det ingen elefant.

## Ferdig når

- [ ] `GET`, `POST`, `PATCH` og `DELETE` går mot databasen
- [ ] Ugyldig input gir 400 med feilmelding i JSON, databasefeil gir 500 uten detaljer
- [ ] `.env` finnes lokalt og finnes ikke på GitHub. `.env.example` finnes på GitHub.
- [ ] `docker compose up --build` fra et tomt utgangspunkt gir en fungerende app på `localhost:3000`
- [ ] `openapi.yaml` stemmer med virkeligheten. Alle ruter, alle statuskoder.

## Bonus

1. `GET /api/health` som kjører `SELECT 1` og svarer `{ "ok": true }`, eller 503 hvis databasen er nede
2. Healthcheck på `api`-tjenesten i Compose som bruker ruten over
3. `PATCH` kan også endre `name`, ikke bare `done`. Én spørring, begge felt valgfrie. Vanskeligere enn det høres ut.
4. Første test: `backend/test/todos.test.js` med Node sin innebygde `node --test` og `fetch` mot en kjørende server. Test at `POST` uten navn gir 400. Så én til.
5. `npm run db:reset` som kjører `docker compose down -v && docker compose up -d`
6. Les om «12-factor app», punkt III (Config). Du har nettopp gjort det.
7. Skriv `// @ts-check` som første linje i `frontend/app.js` og `backend/server.js`. Ingen verktøy, ingen oppsett, VS Code begynner bare å typesjekke. Se hvor den setter rød strek. Minst én av dem er strengen som trodde den var et tall. Det er dette TypeScript er til for, og du har nettopp fått det gratis.

## Kontrollspørsmål

1. Hvorfor skal `.env` aldri på GitHub, når passordet bare er `gtd`?
2. Forskjellen på 400, 404 og 500. Hvem sin feil er hver av dem?
3. Hvorfor heter databasen `db` fra API-containeren, men `localhost` fra terminalen din?
4. Hva er forskjellen på et image og en container? Hva er `docker build` og hva er `docker compose up`?
5. Hva garanterer `depends_on` uten `condition`, og hvorfor er det ikke nok?

## Vanlige feil

- **`ECONNREFUSED` inne i Docker, men ikke lokalt.** Du bruker `localhost` i `DATABASE_URL` inne i containeren. Skal være `db`.
- **API-et starter før databasen er klar.** Du mangler `condition: service_healthy`, eller `db` mangler healthcheck. Den ligger i compose-fila allerede, se etter den.
- **Koden endret, Docker kjører gammel kode.** Du glemte `--build`. Et image er et øyeblikksbilde.
- **Imaget er enormt og bygger i evigheter.** `node_modules` fra maskinen din ble kopiert inn. `.dockerignore`.
- **Serveren bare henger når databasen er nede.** Da har du Express 4, ikke 5. Sjekk `npm ls express`. Express 4 sender ikke feil fra `async`-ruter videre av seg selv.
- **`.env` havnet på GitHub.** `git rm --cached backend/.env`, commit. Og i en ekte jobb: bytt passordet. Alltid. Selv om du tok det bort to minutter etterpå. Internett glemmer ikke.
- **`npm ci` feiler i Docker.** Du mangler `package-lock.json`. Den skal være committet.
