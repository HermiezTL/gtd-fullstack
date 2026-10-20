# Milepæler

Åtte milepæler, én per dag, dag 7 har to spor. Hver fil har samme form:

- **Smerten**: hvorfor dette laget finnes. Du skal ha kjent den på kroppen før du leser videre.
- **Mål**: hva som skal være sant når dagen er over.
- **Nye begreper**: ordene du kommer til å møte. Slå dem opp i [docs/ordliste.md](../docs/ordliste.md) eller spør `/forklar`.
- **Oppgaver**: kjernen. Små steg. Kryss av etter hvert. Commit etter hver.
- **Ferdig når**: sjekklista `/sjekk` bruker.
- **Bonus**: hvis du er ferdig før tiden. Rekkefølgen er et forslag.
- **Kontrollspørsmål**: det du skal kunne svare på uten å se på koden. `/quiz` henter herfra.
- **Vanlige feil**: der folk før deg har sittet fast. Les dem før du sitter fast selv.

## Regler

- Kjerne før bonus. Bonus før neste milepæl. Rapport når du vil puste.
- Ny branch per milepæl: `git switch -c m3-server`. Branch-navnet står øverst i hver fil.
- Når «Ferdig når» er grønn: push, åpne pull request **i din egen fork** (base må være din `main`, ikke edgarbjorntvedt sin), be veileder se på den, merge, `git switch main`, `git pull`.
- M7a og M7b er alternativer. Velg én sammen med veileder. Den andre kan du ta hjemme.
- Henger du etter: kutt bonus, aldri kjerne. Blir det krise, er det M7 som ryker, ikke M5 og M6.

## Oversikt

| Milepæl | Branch | Kjerne ≈ |
|---|---|---|
| [M1 Liste i nettleseren](M1-liste-i-nettleseren.md) | – | 4 t |
| [M2 Git og ferdig frontend](M2-git-og-frontend.md) | `m2-frontend` | 5 t |
| [M3 Første server](M3-forste-server.md) | `m3-server` | 5 t |
| [M4 Koble sammen](M4-koble-sammen.md) | `m4-connect` | 5 t |
| [M5 Database](M5-database.md) | `m5-database` | 5 t |
| [M6 Persistens ferdig](M6-persistens.md) | `m6-persistence` | 5 t |
| [M7a React](M7a-react.md) | `m7-react` | 5 t |
| [M7b Kontekster](M7b-kontekster.md) | `m7-contexts` | 5 t |
| [M8 Rapport](M8-rapport.md) | `m8-report` | 3 t |
