describe('Demoblaze - Changing Categories on Homepage', function () {
  beforeEach(() => {
    cy.visit('https://www.demoblaze.com/index.html#');
  });

  it('should click on the phones category and ensure they are visible on page', function () {
    cy.get(`a[onclick*="byCat('phone')"`).should('have.text', 'Phones').click();
    cy.get('#tbodyid')
      .children()
      .should('have.length', 7)
      .first()
      .should('contain', 'Samsung galaxy s6');
    cy.get('#tbodyid').children().last().should('contain', 'HTC One M9');
  });
});
