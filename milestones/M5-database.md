# M5 · Database

**Måldag:** 5 · **Branch:** `m5-database` · **Kjerne ≈** 5 t · **Første time:** sammen med veileder

## Smerten

> Serveren husker alt. Helt til du restarter den. Så husker den ingenting. Vi trenger noe som husker selv om strømmen går. Vi trenger en elefant.

Postgres sin logo er en elefant. Det er ikke tilfeldig.

## Mål

En Postgres-database kjører i Docker. Du har skrevet SQL for hånd. `GET`, `POST` og `DELETE` leser og skriver til databasen i stedet for arrayet. Serveren kan restartes uten å miste noe.

## Nye begreper

- **container**: et lite, ferdig pakket program med alt det trenger, kjørende isolert på maskinen din. Ikke en virtuell maskin, mer som en veldig streng mappe.
- **image**: oppskriften en container lages fra. `postgres:17` er et image.
- **Docker Compose**: en fil som beskriver flere containere og hvordan de henger sammen. `docker compose up` starter alt.
- **volume**: der dataene bor, utenfor containeren, så de overlever at containeren slettes
- **database, tabell, rad, kolonne**: regneark-analogien holder langt. En tabell er et ark, en rad er en linje, en kolonne har en type.
- **primærnøkkel**: kolonnen som identifiserer raden. `id`. Databasen passer på at den er unik.
- **SQL**: språket du spør databasen med. `SELECT`, `INSERT`, `UPDATE`, `DELETE`, `WHERE`.
- **Adminer**: en nettside der du kan skrive SQL og se tabellene dine
- **pg**: biblioteket Node bruker for å snakke med Postgres
- **parameterisert spørring**: `$1` i stedet for å lime tekst rett inn i SQL-en. Les om Bobby Tables: https://xkcd.com/327/

## Oppgaver

- [ ] 5.1 **Start elefanten.** Fra repo-rota: `docker compose up -d`. `docker ps` viser to containere. Åpne `http://localhost:8080`. Logg inn: System PostgreSQL, Server `db`, bruker `gtd`, passord `gtd`, database `gtd`. Les `docker-compose.yml` linje for linje med veileder. Du skal kunne si hva hver linje gjør.
- [ ] 5.2 **SQL for hånd.** I Adminer → «SQL command». Skriv og kjør, én om gangen:
  1. `CREATE TABLE todos` med `id SERIAL PRIMARY KEY`, `name TEXT NOT NULL`, `done BOOLEAN NOT NULL DEFAULT false`
  2. `INSERT` tre rader. Bare `name`, la databasen fikse resten.
  3. `SELECT * FROM todos`
  4. `UPDATE` én rad til `done = true`, med `WHERE id = ...`
  5. `SELECT` bare de som ikke er gjort
  6. `DELETE` én rad med `WHERE`
  7. `SELECT ... ORDER BY name`

  Skriv alle sju spørringene inn i `rapport/LOGG.md`. Det er dagens viktigste notat.
- [ ] 5.3 **Tabellen lages automatisk.** Lim `CREATE TABLE` inn i `db/init.sql`. Kjør `docker compose down -v` og `docker compose up -d`. Sjekk i Adminer at tabellen finnes, og er tom. Hva gjorde `-v`? Commit.
- [ ] 5.4 **Node snakker med elefanten.** `npm install pg` i `backend/`. Lag `db.js` som eksporterer en `Pool` med connection string `postgres://gtd:gtd@localhost:5432/gtd`. I `server.js`: kjør `SELECT now()` ved oppstart og logg svaret. Test: tidspunktet printes når serveren starter. Commit.
- [ ] 5.5 **GET fra databasen.** `GET /api/todos` kjører `SELECT * FROM todos ORDER BY id` og svarer med `rows`. Ruten må bli `async`. Test: legg inn en rad i Adminer, refresh appen, der er den. Det øyeblikket er grunnen til at folk blir utviklere. Commit.
- [ ] 5.6 **POST til databasen.** `INSERT INTO todos (name) VALUES ($1) RETURNING *`. Svar med den nye raden. Test fra appen og se raden i Adminer. Commit.
- [ ] 5.7 **DELETE fra databasen.** `DELETE FROM todos WHERE id = $1`. 404 hvis `rowCount` er 0. Slett `todos`-arrayet fra `server.js`. Det trengs ikke lenger. Commit.
- [ ] 5.8 **Elefanttesten.** Lag tre todos. Stopp serveren. Start den. Lista er der. Stopp databasen med `docker compose down` (uten `-v`). Start den. Lista er der fortsatt. Skriv i loggen hvor dataene faktisk bor. Push, PR, merge.

## Ferdig når

- [ ] `docker compose down -v && docker compose up -d` gir en fungerende, tom tabell uten at du gjør noe manuelt
- [ ] `GET`, `POST` og `DELETE` går mot databasen. Arrayet i `server.js` er borte.
- [ ] Serveren kan restartes uten å miste todos
- [ ] Alle spørringer bruker `$1`, ingen limer tekst inn i SQL
- [ ] De sju SQL-spørringene står i loggen din, og du kan forklare hver av dem

## Bonus

1. Kolonne `created_at TIMESTAMPTZ NOT NULL DEFAULT now()`. Vis den i appen.
2. `ORDER BY done, name` så gjorte havner nederst
3. `GET /api/todos/stats` som svarer `{ "total": 7, "remaining": 3 }` med `COUNT` og `WHERE`
4. `db/seed.sql` med ti morsomme todos, og et npm-script som kjører den
5. Terminalen i stedet for Adminer: `docker compose exec db psql -U gtd gtd`. Kjør `\dt` og `SELECT * FROM todos;`. Avslutt med `\q`.
6. Hva skjer med `INSERT INTO todos (name) VALUES (NULL)`? Hvorfor? Hvilken statuskode burde API-et gi da?

## Kontrollspørsmål

1. Hva er en primærnøkkel, og hvem bestemmer verdien?
2. Hva gjør `UPDATE todos SET done = true` uten `WHERE`? Si det høyt.
3. Hvorfor `$1` i stedet for å lime `name` inn i teksten? Hva kan en bruker skrive i tekstfeltet hvis du ikke gjør det?
4. Hva er forskjellen på containeren og volumet? Hvor bor dataene når containeren er stoppet?
5. Hvorfor kjører `init.sql` bare første gang?

## Vanlige feil

- **`ECONNREFUSED 127.0.0.1:5432`.** Databasen kjører ikke. `docker ps`. Eller noen andre har port 5432, som en Postgres du installerte lokalt en gang.
- **`password authentication failed`.** Connection string og `docker-compose.yml` er uenige. Les begge én gang til.
- **`relation "todos" does not exist`.** `init.sql` kjører bare på et tomt volum. Du endret fila etter første start. `down -v`, `up -d`.
- **`Cannot read properties of undefined (reading 'rows')`.** Du glemte `await` foran `pool.query`. Serveren har også løfter.
- **Alle er ferdige!** Du kjørte `UPDATE` uten `WHERE`. Alle gjør det én gang. Nå har du gjort det, og du gjør det aldri igjen. Det er derfor vi øver i Adminer og ikke i produksjon.
- **`permission denied while trying to connect to the Docker daemon`.** Brukeren din er ikke i `docker`-gruppa, eller du har ikke logget ut og inn etter at veileder la deg til.
