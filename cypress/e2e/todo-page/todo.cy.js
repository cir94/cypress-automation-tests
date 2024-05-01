describe('Todos Page', function () {
  beforeEach(() => {
    cy.visit('https://example.cypress.io/todo');
  });

  it('should ensure there are two tasks in the todo list', function () {
    cy.get('.todo-list li').should('have.length', 2);
  });

  it('should be able to add annother item to the list', function () {
    // Creating variable to use in multiple statements
    const newTask = 'Finishing up my Cypress practice';

    cy.get('[data-test=new-todo]').type(`${newTask}{enter}`);

    // Asserting that the new item was added to the list
    cy.get('.todo-list li')
      .should('have.length', 3)
      .last()
      .should('have.text', newTask);
  });
});
