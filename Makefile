include .env
ifneq ("$(wildcard .env.local)","")
	include .env.local
endif

PACKAGE_MANAGER ?= bun
X_MANAGER ?= bunx
NEXT_PORT ?= 3000

.DEFAULT_GOAL := dev

## —— React Makefile ———————————————————————————————————
help: ## Outputs this help screen
	@grep -E '(^[a-zA-Z0-9_-]+:.*?## .*$$)|(^## )' Makefile | awk 'BEGIN {FS = ":.*?## "}{printf "\033[32m%-30s\033[0m %s\n", $$1, $$2}' | sed -e 's/\[32m##/[33m/'

## —— Npm server ———————————————————————————————————

sync: docker-restart clean install prisma-migrate dev

clean:
	@rm -rf node_modules .next yarn.lock bun.lockb pnpm-lock.yaml package-lock.json

install: ## Install dependencies
	@test -f .env.local || cp .env .env.local
	$(PACKAGE_MANAGER) install

dev: ## Run the development server
	$(PACKAGE_MANAGER) dev

build: install ## Build the application
	$(PACKAGE_MANAGER) run build

## —— Prisma ———————————————————————————————————
prisma: ## Generate prisma client
	$(X_MANAGER) prisma generate

prisma-seed: ## Generate prisma client
	$(X_MANAGER) prisma:seed

prisma-migrate: ## Migrate prisma
	$(X_MANAGER) prisma migrate dev --preview-feature

prisma-studio: ## Migrate prisma
	$(X_MANAGER) prisma studio

prisma-reset: ## Reset prisma
	$(X_MANAGER) prisma migrate reset
	$(X_MANAGER) prisma migrate dev

## —— Linters ———————————————————————————————————
lint: ## Run all linters
	$(X_MANAGER) biome check --write
	$(PACKAGE_MANAGER) lint

analyze: lint build ## Run all linters and tests

## —— Git ———————————————————————————————————
git-clean-branches: ## Clean merged branches
	@git remote prune origin
	(git branch --merged | egrep -v "(^\*|main|master|dev)" | xargs git branch -d) || true

git-rebase-main:
	git pull origin main --rebase

git-pull-porcelain: ## Met à jour le code depuis le dépôt git avec rebase
	@if [ "$(shell git status --porcelain | wc -l)" -gt 0 ]; then git stash && git pull --rebase && git stash pop; else git pull --rebase; fi

msg ?= $(shell git branch --show-current | sed -E 's/^([0-9]+)-([^-]+)-(.+)/\2: \#\1 \3/' | sed "s/-/ /g")
auto-commit: ## Auto commit
	@if [ "$(shell git status --porcelain | wc -l)" -gt 0 ]; then git add .; git commit -m "$(msg)" || true; fi

push: format auto-commit ## Ajoute, commit et pousse les modifications vers le dépôt git
	git pull origin $(shell git branch --show-current) --rebase
	git push origin "$(shell git branch --show-current)"