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
	rm -rf .next
	rm -rf node_modules
	rm -rf package-lock.json
	rm -rf yarn.lock
	rm -rf pnpm-lock.yaml

install: ## Install dependencies
	@test -f .env.local || cp .env .env.local
	$(PACKAGE_MANAGER) install

dev: ## Run the development server
	$(PACKAGE_MANAGER) dev

build: install ## Build the application
	$(PACKAGE_MANAGER) run build

prisma: ## Generate prisma client
	$(X_MANAGER) prisma generate

prisma-seed: ## Generate prisma client
	$(X_MANAGER) prisma:seed

prisma-migrate: ## Migrate prisma
	$(X_MANAGER) prisma migrate dev

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

git-rebase: ## Rebase current branch
	@git pull --rebase origin main

message ?= $(shell git branch --show-current | sed -E 's/^([0-9]+)-([^-]+)-(.+)/\2: \#\1 \3/' | sed "s/-/ /g")
auto-commit: ## Auto commit
	@git add .
	@git commit -m "${message}" || true

current_branch=$(shell git rev-parse --abbrev-ref HEAD)
git-push: ## Push current branch
	@git push origin "$(current_branch)" --force-with-lease

commit: analyze auto-commit git-push ## Commit and push
push: commit