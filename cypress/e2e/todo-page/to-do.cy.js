describe('Todos Page', function () {
  beforeEach(() => {
    cy.visit('https://example.cypress.io/todo');
  });

  it('should ensure there are two tasks in the todo list', function () {
    cy.get('.todo-list li').should('have.length', 2);
  });
});
