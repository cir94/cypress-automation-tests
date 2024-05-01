describe('Demoblaze Site - Testing Homepage', () => {
  beforeEach(() => {
    cy.visit('https://www.demoblaze.com/index.html#');
  });

  it('should start at the home page and see 9 items', function () {
    cy.get('#tbodyid').children().should('have.length', 9);
  });

  it('should have a navbar at the top', function () {
    cy.get('.navbar-nav li')
      .should('have.length', 8)
      .last()
      .contains('Sign up');
  });

  it('should have 4 links in the categories section', function () {
    cy.get('.list-group')
      .children()
      .should('have.length', 4)
      .last()
      .should('have.text', 'Monitors');
  });
});
