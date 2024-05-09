import {
  userRandomizer,
  passRandomizer,
} from '../demoblaze-site/user-pass-randomizer.js';

describe('Demoblaze - Signing Up', function () {
  // Rather than using beforeAll like most other spec files in this repo do, this spec file is using a normal before call to ensure that each test has the same username and password generated so that it can properly log in with the same credentials in later steps, rather than using beforeALl which would generate a different username and password for each one.

  // As such, each test will instead call cy.visit on its own with the proper testing site URL

  before(() => {
    let username = userRandomizer();
    let password = passRandomizer();
    cy.wrap(username).as('username');
    cy.wrap(password).as('password');
  });

  it('should successfully create an account', function () {
    cy.visit('https://www.demoblaze.com/index.html#');
  });
});
