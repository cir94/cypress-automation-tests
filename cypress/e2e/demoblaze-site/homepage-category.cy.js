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

  it('should click on the laptops category and ensure they are visible on page', function () {
    cy.get(`a[onclick*="byCat('notebook')"`)
      .should('have.text', 'Laptops')
      .click();
    cy.get('#tbodyid')
      .children()
      .should('have.length', 6)
      .first()
      .should('contain', 'Sony vaio i5');
    cy.get('#tbodyid').children().last().should('contain', 'MacBook Pro');
  });

  it('should click on the monitors category and ensure they are visible on page', function () {
    cy.get(`a[onclick*="byCat('monitor')"]`)
      .should('have.text', 'Monitors')
      .click();
    cy.get('#tbodyid')
      .children()
      .should('have.length', 2)
      .first()
      .should('contain', 'Apple monitor 24');
    cy.get('#tbodyid').children().last().should('contain', 'ASUS Full HD');
  });
});
