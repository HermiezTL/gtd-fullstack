# M2 · Git og ferdig frontend

**Måldag:** 2 · **Branch:** `m2-frontend` · **Kjerne ≈** 5 t

## Smerten

> Alt forsvinner når du refresher. Og hvis du sletter en linje feil, er den borte for alltid. Appen din har hukommelse som en gullfisk, og gullfisken har ikke engang backup.

Begge deler fikser vi i dag. Git gir deg angreknapp. localStorage gir appen hukommelse. Git først, så du har angreknappen mens du jobber med resten.

## Mål

Koden din ligger på GitHub i din egen fork, delt i tre filer og ryddet i funksjoner. Todos kan krysses av som gjort. Lista overlever refresh.

## Nye begreper

- **fork**: din egen kopi av et repo på GitHub
- **clone**: last ned et repo fra GitHub til maskinen din
- **commit**: et lagringspunkt med en melding. Du kan alltid gå tilbake hit.
- **push / pull**: send commits opp til GitHub, hent commits ned
- **branch**: en parallell arbeidslinje. Du jobber på en branch, `main` holder seg ren.
- **pull request**: «her er endringene mine, kan noen se på dem før de går inn i main?»
- **origin og upstream**: navnene git bruker på forken din og på malen du forket fra
- **parameter og returverdi**: det en funksjon får inn, og det den gir tilbake
- **boolean**: `true` eller `false`. Ikke `"true"`.
- **JSON**: objekter og arrays skrevet som tekst, så de kan lagres og sendes
- **localStorage**: en liten lagringsplass nettleseren har per nettsted. Lagrer bare tekst.

## Oppgaver

- [x] 2.1 **GitHub-konto og fork.** Lag konto hvis du ikke har. Fork `edgarbjorntvedt/gtd-fullstack` til din konto. Se at adressen nå har ditt brukernavn.
- [x] 2.2 **Clone og oppsett.** `gh auth login`, så `gh repo clone <deg>/gtd-fullstack`. Åpne mappa i VS Code med `code .`. Sett `git config --global user.name` og `user.email` hvis veileder ikke har gjort det. Test: `git status` sier «nothing to commit», og `git remote -v` viser både `origin` (din fork) og `upstream` (malen).
- [x] 2.3 **Flytt dag 1-koden inn i `frontend/`**, delt i `index.html`, `style.css` og `app.js`. Lå alt i én fil: del den opp, og se at det fortsatt virker når du åpner `index.html` i nettleseren. Første commit: `git add .`, `git commit -m "Add day 1 todo app"`, `git push`. Gå til GitHub og se koden din der.
- [x] 2.4 **Branch.** `git switch -c m2-frontend`. Resten av dagen skjer her. Test: `git branch` viser en stjerne ved `m2-frontend`.
- [x] 2.5 **Rydd i funksjoner.** Koden din skal ha minst `addTodo(name)`, `removeTodo(id)` og `render()`. Hver funksjon gjør én ting. Ingenting tegner på skjermen utenom `render()`. Test: appen virker akkurat som før. Commit.
- [x] 2.6 **Gjort-avkryssing.** Hver todo får `done: false` når den lages. `render()` lager en checkbox per todo. `toggleDone(id)` snur verdien. Gjorte todos får en CSS-klasse som streker dem over. Test: kryss av, kryss på. Commit.
- [ ] 2.7 **Hukommelse.** `saveTodos()` skriver arrayet til localStorage som JSON. `loadTodos()` leser det tilbake ved oppstart. Kall `saveTodos()` etter hver endring. Test: legg til tre, refresh, de er der. Åpne DevTools → Application → Local Storage og se dem. Commit.
- [ ] 2.8 **Pull request.** `git push -u origin m2-frontend`. Åpne PR på GitHub. **Base skal være `main` i din egen fork**, ikke edgarbjorntvedt sin. Skriv tre linjer om hva du har gjort. Be veileder se på den. Merge. `git switch main`, `git pull`.

## Ferdig når

- [ ] Koden ligger i `frontend/` i tre filer, på GitHub, i din fork
- [ ] Minst fire commits med meldinger som sier hva som ble gjort, på engelsk
- [ ] Alt som tegner på skjermen skjer i `render()`
- [ ] Checkbox snur `done`, og gjorte todos ser annerledes ut
- [ ] Refresh beholder lista
- [ ] PR åpnet mot din egen `main` og merget

## Bonus

1. Enter-tasten legger til, ikke bare knappen
2. Tomt tekstfelt gir ingen todo. Vis gjerne en liten beskjed.
3. Teller: «3 igjen» som oppdateres
4. Filter: Alle / Aktive / Gjort. Tre knapper, én variabel som husker valget.
5. «Fjern alle gjorte»-knapp, med `filter`
6. Sortér gjorte nederst, så på navn
7. Dobbeltklikk på navnet for å redigere det
8. Bytt `Date.now()` som id med `crypto.randomUUID()`, og finn ut hvorfor det er tryggere

## Kontrollspørsmål

1. Hva er forskjellen på `commit` og `push`?
2. Hvorfor må vi `JSON.stringify` før vi lagrer i localStorage, og `JSON.parse` når vi leser?
3. Hva gjør `!done`? Hva blir `!true`?
4. Hva er en branch, og hvorfor jobber vi ikke rett på `main`?
5. Hva skjer hvis to todos får samme `id`?

## Vanlige feil

- **Gullfisk-feilen.** Du lagret ikke etter endringen. `saveTodos()` må kalles etter *hver* endring av arrayet. Hint: finnes det ett sted alle endringer passerer?
- **Strengen som trodde den var et array.** localStorage gir deg tekst tilbake. `todos.push(...)` på en tekst eksploderer. Du mangler `JSON.parse`.
- **Første gang er tom.** Første gang finnes ingenting i localStorage. `JSON.parse(null)` gir `null`, og `null.push` er ikke noe man vil oppleve. Hva gjør du da?
- **`git push` sier «no upstream branch».** Første push på en ny branch trenger `-u origin <branch>`. Bare første gang.
- **PR-en peker på feil repo.** GitHub foreslår alltid originalen som base. Bytt til din egen fork.
- **Strengen som trodde den var et tall**, igjen. `data-id` på knappen er tekst. Enten `Number(...)` den, eller lag id-er som er tekst fra starten.
