# GTD Fullstack

> Todo or not todo. Det er spørsmålet.

Et læringsprosjekt på åtte dager. Du starter med en todo-liste i nettleseren og ender med en app som har sin egen server, sitt eget API med Swagger, og en ekte database i Docker. Hvert lag legges på fordi det forrige gjør vondt.

Du skriver all koden selv. Claude sitter ved siden av og forklarer, spør og peker. Claude har ikke lov til å skrive i filene dine. Det er ikke en feil.

## Dagplan

| Dag | Milepæl | Du lærer | Smerten som løses |
|---|---|---|---|
| 1 | [M1 Liste i nettleseren](milestones/M1-liste-i-nettleseren.md) | variabler, array, objekt, løkke, if/else, DOM | |
| 2 | [M2 Git og ferdig frontend](milestones/M2-git-og-frontend.md) | fork, clone, commit, branch, PR, funksjoner, localStorage | «Alt forsvinner når jeg refresher» |
| 3 | [M3 Første server](milestones/M3-forste-server.md) | Node, Express, ruter, HTTP, JSON, Swagger | «Lista finnes bare på denne PC-en» |
| 4 | [M4 Koble sammen](milestones/M4-koble-sammen.md) | fetch, async/await, statuskoder, Network-fanen | «To faner er uenige» |
| 5 | [M5 Database](milestones/M5-database.md) | Docker Compose, SQL, SELECT/INSERT/WHERE, pg | «Serveren glemmer ved restart» |
| 6 | [M6 Persistens ferdig](milestones/M6-persistens.md) | UPDATE/DELETE, validering, .env, Dockerfile | «Funker på min maskin» |
| 7 | [M7a React](milestones/M7a-react.md) eller [M7b Kontekster](milestones/M7b-kontekster.md) | komponenter og state, eller JOIN og fremmednøkler | «Koden begynner å bli rotete» |
| 8 | [M8 Rapport](milestones/M8-rapport.md) | README, arkitektur, refaktorering | «Om tre måneder husker jeg ingenting» |

Dag 8 er halvt buffer. Henger du etter, er det her du tar det igjen.

## Slik jobber du

1. **Én oppgave om gangen.** Milepælfila sier hva. Du finner ut hvordan.
2. **Commit etter hver oppgave.** Små commits med engelske meldinger: `Add remove button per todo`.
3. **Kryss av** i milepælfila når en oppgave er ferdig. Det er sånn Claude vet hvor du er.
4. **Kjerne først, så bonus, så rapport.** Blir du fort ferdig, er det alltid mer å gjøre. Blir du ikke ferdig, er det kjernen som teller.
5. **Logg hver dag** i [rapport/LOGG.md](rapport/LOGG.md). Tre linjer. Det tar to minutter og blir rapporten din.
6. **Spør Claude om alt.** Men Claude gir deg ikke svaret, bare neste steg. Spør veileder når Claude ikke strekker til.

## Kom i gang

```bash
# 1. Fork dette repoet til din egen GitHub-konto (Fork-knappen øverst til høyre på GitHub)
# 2. Klon din fork
gh repo clone <ditt-brukernavn>/gtd-fullstack
cd gtd-fullstack
# 3. Start Claude i repoet. Da leser den reglene og finner kommandoene.
claude
# 4. Skriv /start
```

## Oppdater fra malen

Malen er repoet du forket fra. Veileder legger inn nye bonusoppgaver, rettelser og nye «vanlige feil» der underveis. gh la til malen som remote `upstream` da du klonet, så du henter dem slik:

```bash
git switch main
git pull upstream main
git push
```

Er dagen i gang på en branch: `git switch <branchen din>` og `git merge main` etterpå. Gjør det hver morgen, eller når veileder sier «det ligger noe nytt».

Kommandoer du har i Claude:

| Kommando | Når |
|---|---|
| `/start` | Første ting hver dag |
| `/hint` | Står fast |
| `/forklar <begrep>` | Et ord du ikke skjønner |
| `/sjekk` | Tror du er ferdig med en milepæl |
| `/quiz` | Vil sjekke at det sitter |
| `/dagslutt` | Siste ting hver dag |

## Struktur

```
milestones/         én fil per milepæl: smerte, mål, oppgaver, ferdig når, bonus, kontrollspørsmål
frontend/           nettleserkoden din (index.html, style.css, app.js)
backend/            serveren din, fra dag 3
docker-compose.yml  databasen, fra dag 5
db/init.sql         tabellene dine, fra dag 5
rapport/            daglig logg og rapportmal
docs/               ordliste, terminal-jukselapp, maskinoppsett, veilederdok
CLAUDE.md           spillereglene Claude følger. Les dem, de gjelder deg også.
```

## Språk

Oppgaver, dokumentasjon, logg og rapport er på norsk. Kode, kommentarer, variabelnavn, filnavn, branch-navn og commit-meldinger er på engelsk. Sånn er det i de fleste jobber, så vi starter der.

## For veileder

Repoet er en mal. Hver elev forker det og jobber i sin egen fork. Malen inneholder aldri løsninger eller status.

Se [docs/for-veileder.md](docs/for-veileder.md).
