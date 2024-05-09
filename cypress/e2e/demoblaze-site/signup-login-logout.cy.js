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

  it('should successfully create an account', async function () {
    cy.visit('https://www.demoblaze.com/index.html#');
    cy.get('#signin2').should('have.text', 'Sign up').click();

    // The two cy.get calls here type in the username and password created in the before hook and assert that what's been typed in is the same as the variables.
    cy.get('input#sign-username.form-control')
      .clear()
      .click()
      .type(await this.username, { delay: 0 })
      .should('have.value', this.username);
    cy.get('input#sign-password.form-control')
      .clear()
      .click()
      .type(await this.password, { delay: 0 })
      .should('have.value', this.password);

    cy.get(`button[onclick*="register()"]`)
      .should('contain', 'Sign up')
      .click();
    cy.get('#signInModal').should('be.hidden');
  });
});
