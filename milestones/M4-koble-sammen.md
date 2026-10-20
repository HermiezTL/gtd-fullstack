# M4 · Koble sammen

**Måldag:** 4 · **Branch:** `m4-connect` · **Kjerne ≈** 5 t

## Smerten

> Nå har du to lister som ikke snakker sammen: én i nettleseren, én på serveren. Det er som å ha to kalendere. Du vet hvordan det går.

I dag blir det én liste. Serveren eier sannheten. Nettleseren bare viser den og ber om endringer.

## Mål

Frontend serveres fra Express og bruker `fetch` mot API-et for alt. localStorage er borte. To faner viser samme liste.

## Nye begreper

- **statiske filer**: filer serveren bare sender som de er, som `index.html` og `app.js`
- **fetch**: nettleserens måte å sende en HTTP-request fra JavaScript
- **Promise**: et løfte om et svar som kommer senere. Ikke svaret selv.
- **async / await**: skriv kode som venter på løfter, uten at den ser rar ut
- **source of truth**: det ene stedet som har rett når to er uenige. Fra i dag: serveren.
- **Network-fanen**: DevTools-fanen som viser hver request nettleseren sender, med svar og statuskode
- **CORS**: nettleserens regel om at en side fra én adresse ikke får snakke med en server på en annen adresse uten lov. Vi unngår den i dag ved å servere alt fra samme sted.

## Oppgaver

- [ ] 4.1 **Serveren serverer frontenden.** `express.static` med stien til `frontend/`. Åpne `http://localhost:3000` og se den gamle appen din, servert av din egen server. Åpne DevTools → Network, refresh, og se filene komme én og én. Commit.
- [ ] 4.2 **Første fetch.** Gjør om `loadTodos()` så den henter fra `/api/todos` med `fetch`, gjør svaret om til JSON med `await`, legger det i `todos` og kaller `render()`. Funksjonen må bli `async`. Test: lista viser det serveren har, ikke det localStorage har. Commit.
- [ ] 4.3 **Legg til via API.** `addTodo(name)` sender `POST` med `method`, `headers` med `Content-Type: application/json` og `body` som JSON-tekst. Etterpå: hent lista på nytt fra serveren. Ikke oppdater arrayet lokalt selv. Test: legg til, se requesten i Network, se svaret 201. Commit.
- [ ] 4.4 **Fjern via API.** `removeTodo(id)` sender `DELETE`, så hent lista på nytt. Commit.
- [ ] 4.5 **Kryss av via API.** Tok du ikke bonusen i går: lag `PATCH /api/todos/:id` på serveren som setter `done` fra body. `toggleDone(id)` sender `PATCH` med `{ "done": true }` eller `false`, så hent lista på nytt. Commit.
- [ ] 4.6 **Fjern localStorage.** Slett `saveTodos()` og alt som har med localStorage å gjøre. Se i `git diff` hvor mye som forsvant. Mindre kode er bra. Test: åpne to faner, legg til i den ene, refresh den andre. Commit.
- [ ] 4.7 **Når serveren er nede.** Stopp serveren. Trykk «legg til» i nettleseren. Hva skjer? Ingenting, stille. Det er den verste typen feil. Pakk fetch-kallene i `try`/`catch` og vis en melding på siden: «Server is down. Is it running?». Start serveren, meldingen skal forsvinne ved neste vellykkede kall. Commit, push, PR, merge.

## Ferdig når

- [ ] `localStorage` finnes ikke i `app.js` lenger. Søk etter det.
- [ ] Legg til, fjern og kryss av går via API-et, og du kan vise det i Network-fanen
- [ ] To faner er enige etter refresh
- [ ] Serveren nede gir en synlig melding, ikke stillhet
- [ ] Du kan tegne flyten fra klikk til server og tilbake, med tre bokser og to piler

## Bonus

1. Vis «Laster...» mens første fetch pågår
2. Optimistisk oppdatering: oppdater skjermen først, send requesten etterpå, rull tilbake hvis den feiler. Kjenn på hvor mye vanskeligere det er.
3. `GET /api/todos?sort=name` på serveren. Sortering flytter fra nettleser til server. Hvorfor kan det være lurt?
4. CORS-eksperimentet: åpne `index.html` med VS Code «Live Server» på port 5500 i stedet. Se feilen i konsollen. Les den. Installer `cors` i backend, se at den forsvinner. Nå vet du hva CORS er, på den eneste måten noen lærer det.
5. Skriv om fra `await` til `.then()` på ett sted, bare for å se at det er det samme. Bytt tilbake.

## Kontrollspørsmål

1. Hva gjør `await`? Hva skjer hvis du glemmer det foran `res.json()`?
2. Hva er en Promise, i én setning, uten ordet «asynkron»?
3. Hvorfor henter vi lista på nytt fra serveren etter hver endring, i stedet for å endre arrayet selv?
4. Hva viser Network-fanen deg som konsollen ikke gjør?
5. Hvorfor fikk vi ikke CORS-trøbbel i dag?

## Vanlige feil

- **`[object Promise]` på skjermen.** Du glemte `await`. Det du har er løftet, ikke svaret.
- **Serveren får tom body.** Du glemte `JSON.stringify` på `body`, eller `Content-Type`-headeren. Uten headeren vet ikke `express.json()` at den skal lese.
- **Lista er tom et øyeblikk, så kommer den.** Du kalte `render()` før svaret kom. Det er faktisk riktig oppførsel. Se bonus 1.
- **Gammel kode kjører.** Nettleseren husker `app.js` fra forrige gang. Ctrl+Shift+R.
- **404 på `/api/todos` fra frontenden, men curl funker.** Du åpnet `index.html` som fil (`file://`) i stedet for via serveren. Adresselinja skal si `localhost:3000`.
- **`express.static` finner ikke filene.** Stien er relativ til der du *startet* `node`, ikke der `server.js` ligger. Bruk `import.meta.dirname` og `path.join`.
