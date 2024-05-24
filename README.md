# Cypress-Automation-Tests

This repo is comprised of tests that are written to automate tests via Cypress.

The sites currently being tested in this repo are:

- Cypress Example Page: Kitchen Sink
- Cypress Example Page: To-do list
- Automation Practicing Page: Demoblaze

There are currently only E2E tests in the repo.

Both ESLint and Prettier are used for linting and formatting code to follow a uniform standard. Husky and lint-staged are used as well in this repo, with Husky running pre-commit hooks, using lint-staged to run the `prettier --write` script on all staged files to ensure any code being commited for a push is formatted properly.

There's both a `Dockerfile` and a `compose.yaml` file available to use in Docker if one chooses to use that to run the tests instead. Running it through Docker will guarantee that the tests run clean. Please note that the tests are only ran in Headless mode through Docker.

# To setup project for use on system

- Run `npm install`

# To run tests

## Using Cypress Application

To run the tests in the Cypress Application, run the following command

- `npm run cy:open`

## Using Docker

To run the tests in a Docker container, run the following command in your terminal

- `docker compose up --build`

## Packages

The packages used in this project are:

- cypress
- cypress-recurse
- eslint
- eslint-plugin-cypress
- prettier
- husky
- lint-staged
