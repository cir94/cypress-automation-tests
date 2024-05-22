describe('Kitchen Sink - Actions', function () {
  beforeEach(() => {
    cy.visit('https://example.cypress.io/commands/actions');
  });

  it('should focus on a DOM element by using the .focus() command', function () {
    cy.get('.action-focus').focus();
    cy.get('.action-focus')
      .should('have.class', 'focus')
      .prev()
      .should('have.attr', 'style', 'color: orange;');
  });
});
