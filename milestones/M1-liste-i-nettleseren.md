# M1 · Liste i nettleseren

**Måldag:** 1 · **Branch:** ingen, git kommer i M2 · **Kjerne ≈** 4 t · **Hele dagen:** sammen med veileder

## Smerten

Ingen ennå. Dag 1 er ren glede: du skriver tekst i en fil, og nettleseren gjør noe. Smerten kommer i morgen.

## Mål

En HTML-side med et tekstfelt, en knapp og en liste. Du kan legge til, sortere på navn og fjerne én og én. Hvert element i lista er et objekt med `id` og `name`.

Lag en mappe `gtd` på skrivebordet og jobb der. I M2 flyttes den inn i et git-repo.

## Nye begreper

- **HTML**: strukturen på siden. `<input>`, `<button>`, `<ul>` og `<li>`.
- **JavaScript**: det som skjer når du trykker på noe
- **DevTools og konsollen**: F12 i nettleseren. `console.log` skriver dit. Feilmeldinger havner også der.
- **variabel**: en navngitt boks med en verdi
- **funksjon**: en bit kode med navn som du kan kjøre flere ganger
- **event**: noe som skjer, som et klikk, som koden din kan reagere på
- **array**: en liste med verdier, i rekkefølge, med indeks fra 0
- **løkke**: gjør noe for hvert element
- **if / else**: ta et valg
- **objekt**: en ting med navngitte egenskaper, `{ id: 3, name: "Buy milk" }`
- **DOM**: HTML-siden sett fra JavaScript, det du endrer når du lager og fjerner `<li>`

## Oppgaver

- [ ] 1.1 **Siden.** `index.html` med en overskrift, et tekstfelt, en knapp med teksten «Add» og en tom `<ul>`. Åpne fila i nettleseren. Test: du ser alle tre.
- [ ] 1.2 **Første JavaScript.** En `<script>`-tag nederst, eller en egen `app.js`. `console.log("hello")`. Åpne DevTools, se at det står der. Så: når knappen trykkes, logg det som står i tekstfeltet. Test: skriv noe, trykk, se det i konsollen.
- [ ] 1.3 **Lista.** En variabel `todos` som er et tomt array. Klikk legger teksten inn i arrayet. En funksjon `render()` tømmer `<ul>` og lager én `<li>` per element med en løkke. Kall `render()` etter hvert klikk. Test: tre klikk, tre linjer på skjermen.
- [ ] 1.4 **Ikke tomt.** Trykker du med tomt felt, skal ingenting skje. `if` / `else`. Tøm tekstfeltet etter at noe er lagt til. Test: tomt felt gir ingen linje.
- [ ] 1.5 **Objekter.** Hvert element blir `{ id: Date.now(), name: teksten }`. `render()` viser `name`. Test: ser likt ut, men `console.log(todos)` viser objekter.
- [ ] 1.6 **Sortér.** En knapp «Sort» som sorterer `todos` på `name` og kaller `render()`. Test: «banana», «apple», «cherry» blir alfabetisk.
- [ ] 1.7 **Fjern.** Hver `<li>` får en knapp «Remove» som fjerner akkurat den todoen fra arrayet, basert på `id`, og kaller `render()`. Test: fjern den i midten, de to andre står igjen.

## Ferdig når

- [ ] Legg til, sortér og fjern virker i nettleseren
- [ ] Lista er et array av objekter med `id` og `name`
- [ ] Alt som tegnes på skjermen tegnes av `render()`
- [ ] Tomt felt gir ingen todo
- [ ] Du kan forklare hva som skjer fra klikk til ny linje på skjermen

## Bonus

1. `style.css` med litt farge og luft. Appen fortjener det.
2. Enter-tasten legger til, ikke bare knappen
3. Teller over lista: «3 todos»
4. Sortér-knappen bytter mellom A–Å og Å–A
5. Fjern-knappen spør «Are you sure?» først

## Kontrollspørsmål

Disse får du som oppvarming på dag 2. Svar uten å se på koden.

1. Hva er forskjellen på et array og et objekt? Når bruker du hva?
2. Hvorfor fjerner vi på `id` og ikke på `name`?
3. Hva skjer i løkka i `render()`? Gå gjennom den steg for steg med to elementer.
4. Hva er forskjellen på å endre arrayet og å endre det som vises på skjermen? Må du gjøre begge deler?

## Vanlige feil

- **Konsollen sier ingenting.** Scriptet er ikke koblet til sida, eller det ligger over elementene det prøver å finne. Legg `<script>` nederst i `<body>`.
- **Skjermen lyver.** Du endret arrayet, men glemte å kalle `render()`. Arrayet er sannheten, skjermen er bare et bilde av den.
- **Lista dobler seg.** `render()` legger til uten å tømme `<ul>` først.
- **Strengen som trodde den var et tall.** Alt du henter fra HTML er tekst. `"3" === 3` er `false`. Hvis fjern-knappen ikke fjerner noe, er det nesten alltid dette. Du kommer til å møte den igjen. Mange ganger.
