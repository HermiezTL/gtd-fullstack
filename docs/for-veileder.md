# For veileder

Repoet er en mal. Hver elev forker det og jobber i sin egen fork. Malen skal aldri inneholde løsninger, status eller noe som gjelder én bestemt elev. Har du lært noe underveis som bør inn i malen, send en PR til malen, ikke til forken.

Du er den eneste kontrollen som faktisk virker. Resten er stillas.

## Daglig rytme

- **Morgen, 10 min.** Eleven kjører `/start`. Du hører på oppvarmingsspørsmålet. Avtal hva «ferdig i dag» betyr.
- **Dag 1: hele dagen sammen.** Første time på dag 3 og dag 5: par. Oppsett av Express og Docker er der nybegynnere mister en halv dag på en skrivefeil. Sitt ved siden av, la eleven skrive, du peker.
- **Ettermiddag, 15 min.** Eleven forklarer dagens kode for deg uten Claude. Så ber du om én liten endring, live: «gjør så fjern-knappen spør først». Går det på fem minutter, er koden elevens. Går det ikke, er det der dere starter i morgen.
- **Eleven kjører `/dagslutt`**, svarer på de tre spørsmålene og limer inn loggblokken Claude setter sammen av svarene.

## Hva du ser etter per dag

| Dag | Eleven skal kunne | Rødt flagg |
|---|---|---|
| 1 | forklare forskjellen på array og objekt, vise at fjern virker på id | alt er limt inn fra et sted, `render()` finnes ikke |
| 2 | forklare commit vs push, vise PR-en sin, forklare JSON.parse | koden ligger fortsatt i én fil, ingen commits før kl. 14 |
| 3 | tegne request → rute → response, forklare 201 vs 404 | hele `server.js` limt inn fra et sted, kan ikke si hva `express.json()` gjør |
| 4 | forklare `await` i én setning, vise requesten i Network-fanen | `[object Promise]` eleven ikke skjønner, localStorage fortsatt i koden |
| 5 | skrive `SELECT ... WHERE` på tavla, forklare `$1` | spørringene er ikke i loggen, Adminer er ikke åpnet |
| 6 | forklare hvorfor `.env` ikke er i git, hva `db` betyr i connection string | `.env` på GitHub, `--build` glemt tre ganger |
| 7 | forklare hvorfor `push` på state er feil, eller tegne JOIN som to sirkler | all React-kode på én gang, ingen commits |
| 8 | forklare hele flyten fra klikk til rad uten å se på koden | rapporten er skrevet av Claude. Du merker det på ordene. |

## Hvordan stillaset virker

- `.claude/settings.json` sperrer Edit, Write og Bash. Claude kan lese og snakke. Ingenting annet. Eleven kan slå det av ved å redigere fila, så si fra at du ser det i git-historikken.
- `CLAUDE.md` er den myke sperren: ingen komplette løsninger, maks fem linjer kode, spørsmål før forklaring. Eleven kan lese den. Det er bedre at eleven vet reglene enn tror Claude er dum.
- Ingenting hindrer eleven i å åpne claude.ai i nettleseren og lime inn oppgaven. Derfor ettermiddagsritualet. Du trenger ikke være mistenksom, bare nysgjerrig. «Forklar denne linja» holder.
- Bruker eleven ditt Claude-abonnement, teller sesjonene på din kvote. Går kvoten tom midt på dagen, er det en fin anledning til å lese dokumentasjon.
- Claude Code må startes **fra repo-mappa**. Ellers leser den ikke `CLAUDE.md`, og `/start` finnes ikke.

## PR-review

Eleven åpner PR i sin egen fork, mot sin egen `main`. Du finner dem på `github.com/<elev>/gtd-fullstack/pulls`. Kommenter, ikke fiks. Én ting som er bra, ett spørsmål, ett forslag. Eleven merger selv.

## Hvis eleven ligger foran

Bonus i gjeldende milepæl, så logg og rapport, så det andre M7-sporet. Ikke neste milepæl før dagen er omme, med mindre du vil. Det er lov å bli ferdig tidlig og lese MDN.

## Hvis eleven ligger bak

Kutt bonus. Kutt M7 helt. Dag 8 er halv buffer. Aldri kutt M5 og M6, databasen er kjernen i læringsmålene. Sprekker dag 5, ta M5 på dag 6 og slå sammen M6 og M8.

## Hvis eleven sitter fast

Tre `/hint` eller tjue minutter: eleven skal hente deg. Si det høyt på dag 1, for det føles som juks når man er ny. Det er ikke juks, det er sånn jobben er.

## Før dag 1

Se [oppsett-maskin.md](oppsett-maskin.md). Alt på lista gjøres sammen med eleven, det er en time og god terminaltrening. Sjekk at eleven har en GitHub-konto, og at `git config --global user.name` ikke er hele navnet hvis eleven ikke vil det. Forken er offentlig.

## Endre malen underveis

Du kan legge inn nye bonusoppgaver, rettelser og nye «vanlige feil» i malen mens eleven jobber. Eleven henter dem med «Oppdater fra malen» i README. Én regel gjør at det aldri blir konflikt: **legg til nederst i Bonus og Vanlige feil, og endre oppgavelinjer bare i milepæler eleven ikke har nådd.** Eleven krysser av i oppgavelinjene, og git fletter bare rent så lenge dere rører forskjellige linjer.

Forken er offentlig, så den som skriver oppgavene kan lese koden eleven faktisk har laget og tilpasse dem til den. Sitter eleven fast på noe som ikke står under «Vanlige feil», legg det inn samme dag, så slipper neste elev.

Blir det konflikt likevel: behold begge sider. Det er en fin ting å lære på dag 4.

## Neste elev

Ny elev, ny fork fra malen. Ikke gjenbruk en tidligere elevs fork. Rydd gjerne i malen etter hvert gjennomløp: «Vanlige feil» blir bedre av hver elev som har sittet fast.
