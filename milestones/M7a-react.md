# M7a · React

**Måldag:** 7 · **Branch:** `m7-react` · **Kjerne ≈** 5 t · **Alternativ:** M7b

## Smerten

> `render()`-funksjonen din tegner hele lista på nytt hver gang noen nyser. Den fungerer, men den vokser, og snart holder du styr på tretti elementer for hånd. React gjør akkurat det du gjør i `render()`, bare automatisk og bare for det som faktisk endret seg.

Du kommer til å kjenne igjen alt. Det er poenget med å ha skrevet vanilla først.

## Mål

Den samme appen, skrevet i React med Vite, delt i komponenter, mot det samme API-et. Ikke én `document.querySelector`.

## Nye begreper

- **Vite**: verktøyet som starter en dev-server og bygger React-koden til vanlig JavaScript
- **JSX**: HTML skrevet inni JavaScript. Det ser rart ut i ti minutter.
- **komponent**: en funksjon som returnerer JSX. `<TodoItem />`.
- **props**: det en komponent får inn fra den over. Som parametre.
- **state og `useState`**: verdier komponenten husker mellom tegninger. Endrer du state, tegner React på nytt.
- **immutabilitet**: du lager et nytt array i stedet for å endre det gamle. `[...todos, newTodo]`, ikke `todos.push`.
- **`useEffect`**: kjør noe etter at komponenten er tegnet, som å hente data
- **`key`**: det React bruker for å kjenne igjen hvert element i en liste. Din gamle venn `id`.
- **proxy**: Vite videresender `/api` til Express på port 3000, så du slipper CORS

## Oppgaver

- [ ] 7a.1 **Nytt prosjekt.** Fra repo-rota: `npm create vite@latest frontend-react -- --template react`. `cd frontend-react`, `npm install`, `npm run dev`. Åpne adressen. Se gjennom filene. Slett demo-innholdet i `App.jsx` og `App.css`. Commit.
- [ ] 7a.2 **Hardkodet liste.** `App.jsx` har et array med tre todos og tegner dem med `.map()` til `<li>`. Hver trenger `key`. Test: tre linjer på skjermen. Commit.
- [ ] 7a.3 **State.** Flytt arrayet inn i `useState`. Et tekstfelt med egen state og en knapp som legger til en todo i state. Ingen `push`. Test: legg til, den dukker opp uten at du tegner noe selv. Commit.
- [ ] 7a.4 **Hent fra API-et.** Sett opp `server.proxy` i `vite.config.js` så `/api` går til `http://localhost:3000`. `useEffect` med tomt avhengighetsarray som henter `/api/todos` og legger svaret i state. Start Express ved siden av. Test: de ekte todoene vises. Commit.
- [ ] 7a.5 **Komponenter.** Del opp i `AddTodoForm`, `TodoList` og `TodoItem`. Data går ned som props, hendelser går opp som funksjoner i props. `TodoItem` har checkbox og fjern-knapp. Test: alt ser likt ut, men `App.jsx` er kort. Commit.
- [ ] 7a.6 **Skriv til API-et.** Legg til, kryss av og fjern går via `fetch` som før, og henter lista på nytt etterpå. Test: Network-fanen viser samme requests som den gamle appen sendte. Push, PR, merge.

## Ferdig når

- [ ] React-appen gjør det samme som `frontend/` gjorde
- [ ] Minst tre komponenter i egne filer
- [ ] Null treff på `document.` i `src/`
- [ ] Ingen `push`, `splice` eller direkte endring av state
- [ ] Du kan forklare hva som skjer når du trykker på checkboxen, fra klikk til ny tegning

## Bonus

1. «Laster...» og «Server is down» som egne tilstander i state
2. Filter Alle / Aktive / Gjort, som state i `App`
3. En egen hook `useTodos()` som eier all fetching, så `App` blir nesten tom
4. `npm run build`, og la Express servere `frontend-react/dist` i stedet for `frontend/`. Nå er det én server igjen.
5. CSS Modules eller bare en ordentlig `App.css`. Appen fortjener det.
6. React DevTools i nettleseren. Se komponenttreet og state live.
7. Lag prosjektet på nytt med `--template react-ts` i stedet. Flytt komponentene over. Se hva editoren fanger før du har kjørt noe som helst. Det er TypeScript, og du har allerede skrevet 90 % av det.

## Kontrollspørsmål

1. Hvorfor `setTodos([...todos, x])` og ikke `todos.push(x)`? Hva skjer med det siste?
2. Hva er forskjellen på props og state? Hvem eier hva?
3. Hva skjer hvis du glemmer `key`? Hvorfor bryr React seg?
4. Når kjører `useEffect` med `[]`? Og uten `[]`?
5. Hvilket problem løser React som `render()`-funksjonen din hadde?

## Vanlige feil

- **Uendelig løkke.** `setState` rett i komponentkroppen, eller `useEffect` uten avhengighetsarray som setter state. Komponenten tegner, setter state, tegner, setter state. Nettleseren gir opp.
- **`onClick={removeTodo(id)}`.** Det kaller funksjonen med en gang, under tegning. Du mente `onClick={() => removeTodo(id)}`.
- **Skjermen oppdateres ikke.** Du muterte state med `push` og kalte `setTodos(todos)`. Samme array, React ser ingen forskjell.
- **`Each child in a list should have a unique "key" prop`.** Du vet hva den vil ha.
- **404 på `/api/todos`.** Proxyen er ikke satt opp, eller Express kjører ikke. Vite serverer bare React, API-et bor fortsatt på 3000.
