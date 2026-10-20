# Ordliste

Én linje per ord. Trenger du mer: `/forklar <ord>`.

## Programmering

- **variabel** (variable): en navngitt boks med en verdi
- **array**: en liste med verdier, i rekkefølge, første har indeks 0
- **objekt** (object): en ting med navngitte egenskaper, `{ id: 1, name: "Milk" }`
- **funksjon** (function): navngitt kodebit du kan kjøre flere ganger
- **parameter**: det en funksjon får inn
- **returverdi** (return value): det en funksjon gir tilbake
- **boolean**: `true` eller `false`
- **if / else**: ta et valg
- **løkke** (loop): gjør noe for hvert element
- **callback**: en funksjon du sender til en annen funksjon, som skal kjøres senere
- **event**: noe som skjer, som et klikk, som koden kan reagere på
- **DOM**: HTML-siden sett fra JavaScript
- **JSON**: objekter og arrays som tekst, for lagring og sending
- **localStorage**: nettleserens lille lagringsplass per nettsted, bare tekst
- **Promise**: et løfte om en verdi som kommer senere
- **async / await**: skriv kode som venter på løfter
- **try / catch**: prøv noe, og gjør noe annet hvis det feiler
- **mutere** (mutate): endre noe på stedet, i motsetning til å lage en ny kopi

## Git

- **repo**: en mappe git følger med på, med hele historikken
- **fork**: din egen kopi av et repo på GitHub
- **clone**: last ned et repo til maskinen din
- **commit**: et lagringspunkt med melding
- **branch**: en parallell arbeidslinje
- **push / pull**: send opp til GitHub / hent ned fra GitHub
- **pull request (PR)**: forespørsel om å få endringene sine inn i en branch, med mulighet for review
- **merge**: slå sammen en branch inn i en annen
- **diff**: forskjellen mellom to versjoner, linje for linje

## Server og API

- **server**: et program som venter på spørsmål og svarer
- **klient** (client): den som spør
- **HTTP**: språket klient og server snakker
- **HTTP-metode**: GET henter, POST lager, PATCH endrer, DELETE sletter
- **rute** (route): metode + sti, `GET /api/todos`
- **request / response**: spørsmålet inn, svaret ut
- **statuskode**: 200 ok, 201 laget, 204 ok uten innhold, 400 feil fra klient, 404 finnes ikke, 409 konflikt, 500 feil på server
- **port**: nummeret et program lytter på. 3000 for oss.
- **API**: settet med ruter en server tilbyr
- **REST**: en vanlig måte å organisere et API på, med ressurser som `/todos` og HTTP-metodene
- **OpenAPI / Swagger**: fila som beskriver API-et, og nettsiden som viser og tester det
- **Express**: biblioteket vi lager serveren med
- **middleware**: en funksjon som kjører på hver request før ruten, som `express.json()`
- **statiske filer** (static files): filer serveren sender som de er
- **fetch**: nettleserens måte å sende en request fra JavaScript
- **CORS**: nettleserens regel om hvem som får snakke med hvem på tvers av adresser
- **validering**: sjekk at det klienten sendte er gyldig før du bruker det
- **miljøvariabel** (environment variable): en verdi satt utenfor koden, som `DATABASE_URL`
- **.env**: fil med miljøvariabler for denne maskinen, aldri i git

## Database

- **database**: et program som lagrer data trygt og lar deg spørre etter dem
- **tabell, rad, kolonne** (table, row, column): regneark-analogien
- **primærnøkkel** (primary key): kolonnen som identifiserer raden, unik
- **fremmednøkkel** (foreign key): kolonne som peker på en rad i en annen tabell
- **SQL**: språket du spør databasen med
- **SELECT / INSERT / UPDATE / DELETE**: hent / lag / endre / slett
- **WHERE**: hvilke rader det gjelder. Glem den, og det gjelder alle.
- **ORDER BY**: sortering
- **JOIN / LEFT JOIN**: sett sammen to tabeller / også radene uten match
- **NULL**: ingen verdi
- **SERIAL**: tall som databasen teller opp selv
- **parameterisert spørring**: `$1` i stedet for å lime inn tekst, mot SQL-injeksjon
- **pg**: Node-biblioteket som snakker med Postgres
- **Adminer**: nettside for å se og spørre databasen

## Docker

- **container**: et isolert, kjørende program med alt det trenger
- **image**: oppskriften en container lages fra
- **Dockerfile**: fila som beskriver hvordan ditt image bygges
- **Docker Compose**: fil og kommando for å kjøre flere containere sammen
- **volume**: der data bor utenfor containeren
- **service**: én container i compose-fila, med et navn som også er hostname

## React

- **komponent** (component): en funksjon som returnerer JSX
- **JSX**: HTML inni JavaScript
- **props**: det en komponent får inn fra den over
- **state**: det en komponent husker, endres med `useState`
- **hook**: funksjoner som `useState` og `useEffect`
- **useEffect**: kjør noe etter tegning, som å hente data
- **key**: det React bruker for å kjenne igjen elementer i en liste
- **Vite**: dev-server og byggverktøy
