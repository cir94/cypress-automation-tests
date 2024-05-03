describe('Demoblaze - Adding item to cart and purchasing', function () {
  it('should click on the Nexus 6 item on the homepage, add it to the cart, and confirm it is there before purchasing', function () {
    cy.visit(`https://www.demoblaze.com/index.html#`);
    cy.contains('Nexus 6').click();
    cy.get('.name').should('have.text', 'Nexus 6');
    cy.contains('Add to cart').should('be.visible').click();
    cy.on('window:alert', (text) => {
      expect(text).to.eq('Product added');
    });
    cy.get('#cartur').should('have.text', 'Cart').click();
    cy.get('#tbodyid').children().should('contain', 'Nexus 6');
  });
});
