describe('Demoblaze - Adding item to cart', function () {
  beforeEach(() => {
    cy.visit(`https://www.demoblaze.com/index.html#`);
  });

  it('should click on the Nexus 6 item on the homepage and add it to the cart', function () {
    cy.contains('Nexus 6').click();
    cy.get('.name').should('have.text', 'Nexus 6');
    cy.contains('Add to cart').should('be.visible').click();
    cy.on('window:alert', (text) => {
      expect(text).to.eq('Product added');
    });
  });
});
