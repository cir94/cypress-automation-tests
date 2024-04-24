describe('Kitchen Sink - Querying', () => {
  beforeEach(() => {
    cy.visit('https://example.cypress.io/commands/querying')
  })
  it('should query the button and div via cy.get() command', function() {
    cy.get('#query-btn').should('contain', 'Button');
    cy.get('[data-test-id="test-example"]').should('have.class', 'example')
  })
})