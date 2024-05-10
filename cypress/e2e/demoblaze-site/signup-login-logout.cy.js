import {
  userRandomizer,
  passRandomizer,
} from '../demoblaze-site/user-pass-randomizer.js';

describe('Demoblaze - Signing Up', function () {
  // To ensure the same username and password are available between specs, a before hook is being used to hold the variables
  before(() => {
    let username = userRandomizer();
    let password = passRandomizer();
    cy.wrap(username).as('username');
    cy.wrap(password).as('password');
  });
  beforeEach(() => {
    cy.visit('https://www.demoblaze.com/index.html#');
  });

  it('should successfully create an account', function () {
    cy.get('#signin2').should('have.text', 'Sign up').click();

    // The two cy.get calls here type in the username and password created in the before hook and assert that what's been typed in is the same as the variables.
    cy.get('input#sign-username.form-control')
      .clear()
      .click()
      .type(this.username, { delay: 0 })
      .should('have.value', this.username);
    cy.get('input#sign-password.form-control')
      .clear()
      .click()
      .type(this.password, { delay: 0 })
      .should('have.value', this.password);

    cy.get(`button[onclick*="register()"]`)
      .should('contain', 'Sign up')
      .click();
    cy.get('#signInModal').should('be.hidden');
    cy.on('window:alert', (text) => {
      expect(text).to.eq('Sign up successful.');
    });
  });

  it('should be able to login with created account, then logout', function () {
    // Logging in with created account
    cy.get(`a[data-target="#logInModal"]`).should('contain', 'Log in').click();
    cy.get('input#loginusername.form-control')
      .clear()
      .click()
      .type(this.username, { delay: 0 })
      .should('have.value', this.username);
    cy.get('input#loginpassword.form-control')
      .clear()
      .click()
      .type(this.password, { delay: 0 })
      .should('have.value', this.password);
    cy.get('button[onclick*="logIn()"]').should('have.text', 'Log in').click();
    cy.get(`a#nameofuser`).should('have.text', `Welcome ${this.username}`);
    cy.get(`a[onclick*="logOut()"]`)
      .should('be.visible')
      .should('have.text', 'Log out');

    // Logging out of created account
    cy.get(`a[onclick*="logOut()"]`).click();
    cy.get(`a#nameofuser`).should('be.hidden');
    cy.get(`a[onclick*="logOut()"]`).should('be.hidden');
    cy.get('a[data-target="#logInModal"]')
      .should('be.visible')
      .should('have.text', 'Log in');
    cy.get('#signin2').should('be.visible').should('have.text', 'Sign up');
  });
});
