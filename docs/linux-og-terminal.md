# Terminalen, jukselapp

Ny på Linux og terminalen? Det går fint. Dette er kommandoene du trenger, og tre taster.

## Tre taster

- **Tab**: fullfører filnavn. Skriv `cd fro` + Tab, få `cd frontend/`. Bruk den hele tiden.
- **Pil opp**: forrige kommando. Pil opp, Enter, er halve jobben.
- **Ctrl+C**: stopp det som kjører. Serveren, en kommando som henger, hva som helst.

## Finne fram

```bash
pwd            # hvor er jeg?
ls             # hva ligger her?
ls -la         # ... inkludert skjulte filer som .env og .gitignore
cd frontend    # gå inn i mappa
cd ..          # ett hakk opp
cd ~           # hjem
cd -           # tilbake dit du var
```

## Filer

```bash
mkdir backend          # ny mappe
touch server.js        # ny tom fil
cat server.js          # vis innholdet
code .                 # åpne denne mappa i VS Code
rm fil.txt             # slett. Ingen papirkurv. Ingen angre.
```

Om `rm -rf`: det sletter en mappe med alt i, uten å spørre. Du kommer til å se det i svar på nettet. Les kommandoen to ganger før Enter. Tre ganger hvis det står `/` eller `~` i den.

## Programmer

```bash
node --watch server.js     # kjør, og start på nytt når fila endres
npm install express        # hent et bibliotek
npm run dev                # kjør scriptet "dev" fra package.json
curl localhost:3000/api/todos
lsof -i :3000              # hvem bruker port 3000?
```

## Git, de du bruker hver dag

```bash
git status                 # hva har jeg endret?
git add .                  # gjør alt klart for commit
git commit -m "Add thing"  # lagre et punkt
git push                   # send til GitHub
git switch -c m3-server    # ny branch
git switch main            # bytt branch
git pull                   # hent fra GitHub
git log --oneline          # historikken, kort
git diff                   # hva er endret, linje for linje
git pull upstream main     # hent nye oppgaver fra malen (stå på main)
git merge main             # ta dem med inn i branchen du jobber på
```

## Docker

```bash
docker compose up -d       # start i bakgrunnen
docker compose down        # stopp, behold data
docker compose down -v     # stopp, slett data
docker ps                  # hva kjører?
docker compose logs db     # hva sier databasen?
```

## Når noe er rart

- `command not found`: programmet er ikke installert, eller du må åpne et nytt terminalvindu.
- `Permission denied`: du prøver noe som krever `sudo`, eller Docker-gruppa mangler.
- `No such file or directory`: du er i feil mappe. `pwd`.
- Terminalen er full av rot: `clear`, eller Ctrl+L.
- `CONFLICT` etter `git pull` eller `git merge`: to har endret samme linje. Åpne fila, finn `<<<<<<<` og `>>>>>>>`, behold det som skal være igjen, slett markørene, `git add`, `git commit`. Ikke panikk, det er bare tekst.
