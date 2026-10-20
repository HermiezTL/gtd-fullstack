# Maskinoppsett, Ubuntu

Gjøres én gang, sammen med veileder, før eller på dag 1. Hver kommando skrives av eleven. Det er terminaltrening. Hopp over det som allerede er installert.

## Node

```bash
curl -fsSL https://deb.nodesource.com/setup_22.x | sudo -E bash -
sudo apt install -y nodejs
node -v    # 22.x. Minst 20.11 trengs.
npm -v
```

## VS Code

```bash
sudo snap install code --classic
code --version
```

## Git

```bash
git config --global user.name "Fornavn"           # vises offentlig på GitHub. Fornavn holder.
git config --global user.email "din@epost.no"      # samme som GitHub-kontoen
git config --global init.defaultBranch main
git config --global pull.rebase false
```

## GitHub CLI

Offisiell oppskrift fra https://github.com/cli/cli/blob/trunk/docs/install_linux.md:

```bash
(type -p wget >/dev/null || sudo apt-get install wget -y) \
  && sudo mkdir -p -m 755 /etc/apt/keyrings \
  && wget -qO- https://cli.github.com/packages/githubcli-archive-keyring.gpg | sudo tee /etc/apt/keyrings/githubcli-archive-keyring.gpg > /dev/null \
  && sudo chmod go+r /etc/apt/keyrings/githubcli-archive-keyring.gpg \
  && echo "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/githubcli-archive-keyring.gpg] https://cli.github.com/packages stable main" | sudo tee /etc/apt/sources.list.d/github-cli.list > /dev/null \
  && sudo apt update \
  && sudo apt install gh -y

gh auth login
# GitHub.com → HTTPS → Yes, authenticate git → Login with a web browser
gh auth status
```

## Docker

```bash
sudo apt install -y docker.io docker-compose-v2
sudo usermod -aG docker $USER
# Logg ut og inn igjen. Ja, helt ut. Så:
docker run --rm hello-world
docker compose version
```

Mangler `docker-compose-v2` i pakkelista, følg https://docs.docker.com/engine/install/ubuntu/ i stedet.

## Claude Code

```bash
curl -fsSL https://claude.ai/install.sh | bash
# Åpne et nytt terminalvindu, så:
claude --version
```

Første gang `claude` kjøres i repoet: logg inn med abonnementet eleven skal bruke, og svar ja på spørsmålet om du stoler på mappa («trust this folder»). Uten det ignoreres deler av `.claude/settings.json`. Claude Code må startes **fra repo-mappa**, ellers leser den ikke `CLAUDE.md` og finner ikke `/start`.

## VS Code-utvidelser, valgfritt

- ESLint
- Prettier
- Thunder Client, hvis curl blir slitsomt. Men lær curl først.

## Sjekk at alt virker

```bash
cd ~/gtd-fullstack     # eller der forken ble klonet
git status
gh auth status
docker ps
claude
```
