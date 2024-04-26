describe('Kitchen Sink - Querying', () => {
  beforeEach(() => {
    cy.visit('https://example.cypress.io/commands/querying');
  });

  it('should query the button and div via cy.get() command', function () {
    cy.get('#query-btn').should('contain', 'Button');
    cy.get('[data-test-id="test-example"]').should('have.class', 'example');
  });

  it('should find elements by their contents via cy.contains()', function () {
    cy.get('.query-list').contains('apples').should('have.class', 'first');
  });

  it('should find elements using both get and within and write in each box', function () {
    // Storing name, email and password for test to reuse them later for assertion
    const testName = 'Test';
    const testEmail = 'Testing@email.com';
    const testPassword = '123passtest*';

    cy.get('#inputName')
      .should('have.attr', 'placeholder', 'Name')
      .type(`${testName}`);
    cy.get('.query-form').within(() => {
      cy.get('input:first')
        .should('have.attr', 'placeholder', 'Email')
        .type(`${testEmail}`);
      cy.get('input:last')
        .should('have.attr', 'placeholder', 'Password')
        .type(`${testPassword}`);
    });

    // Asserting that the correct information was typed into the input fields using the variables from above
    cy.get('#inputName').should('have.value', testName);
    cy.get('#inputEmail').should('have.value', testEmail);
    cy.get('#inputPassword').should('have.value', testPassword);
  });

  it('should use cy.root() to find the root of the specified DOM element', function () {
    cy.get('.query-ul').within(() => {
      cy.root().should('have.class', 'query-ul');
    });
  });
});
