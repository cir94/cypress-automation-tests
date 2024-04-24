# Cypress-Automation-Tests

This repo is comprised of tests that are written to automate tests via Cypress. The only site currently being tested is the Kitchen Sink example page Cypress themselves offer, with other sites being included in the future. There are currently only E2E tests in the repo.

Both ESLint and Prettier are used for linting and formatting code to follow a uniform standard. Husky and lint-staged are used as well in this repo, with Husky running pre-commit hooks, using lint-staged to run the `prettier --write` script on all staged files to ensure any code being commited for a push is formatted properly.

## To setup project for use on system

- Run `npm install`

## To run tests

- Run `npm run cy:open` in your terminal

## Packages

The packages used in this project are:

- cypress
- eslint
- prettier
- husky
- lint-staged
