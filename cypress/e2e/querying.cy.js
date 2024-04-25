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
    const name = 'Test';
    const testEmail = 'Testing@email.com';
    const testPassword = '123passtest*';

    cy.get('#inputName')
      .should('have.attr', 'placeholder', 'Name')
      .type(`${name}`);
    cy.get('.query-form').within(() => {
      cy.get('input:first')
        .should('have.attr', 'placeholder', 'Email')
        .type(`${testEmail}`);
      cy.get('input:last')
        .should('have.attr', 'placeholder', 'Password')
        .type(`${testPassword}`);
    });
  });
});
