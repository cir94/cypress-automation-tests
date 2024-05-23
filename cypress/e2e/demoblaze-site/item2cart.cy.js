import { recurse } from 'cypress-recurse';

describe('Demoblaze - Adding item to cart and purchasing', function () {
  it('should click on the Nexus 6 item on the homepage, add it to the cart, and confirm it is there before purchasing', function () {
    cy.visit(`https://www.demoblaze.com/index.html#`);
    cy.contains('Nexus 6').click();

    // Asserting the correct item was clicked on in the homepage
    cy.get('.name').should('have.text', 'Nexus 6');
    cy.contains('Add to cart').should('be.visible').click();

    // Ensuring the item was added via checking for an alert window to appear
    cy.on('window:alert', (text) => {
      expect(text).to.eq('Product added');
    });

    // Going to the cart and ensuring the item was properly added
    cy.get('#cartur').should('have.text', 'Cart').click();
    cy.get('#tbodyid').children().should('contain', 'Nexus 6');

    // Assigning the order information to variables for assertion later
    const custName = 'Mina Rocheforte';
    const custCountry = 'Eorzea';
    const custCity = 'New Gridania';
    const custcardNum = '1212343456567878';
    const custcardMonth = '07/30';
    const custcardYear = '94';

    // Clicking on the Place Order button and entering information
    cy.get('.btn-success').should('contain', 'Place Order').click();

    // The recursive function below is used to prevent flakiness from typing in a long string with .type(), specifically in a Docker container. This doubles as an assertion
    recurse(
      () => cy.get('input#name').clear().type(custName),
      ($name) => $name.val() === custName,
      {
        delay: 0,
      }
    );
    // cy.get('input#name').type(`${custName}`).should('have.value', custName);
    cy.get('input#country').type(custCountry).should('have.value', custCountry);
    cy.get('input#city').type(custCity).should('have.value', custCity);
    cy.get('input#card').type(custcardNum).should('have.value', custcardNum);
    cy.get('input#month')
      .type(custcardMonth)
      .should('have.value', custcardMonth);
    cy.get('input#year').type(custcardYear).should('have.value', custcardYear);

    // Clicking Purchase button and asserting information entered is correct
    cy.get('button[onClick*="purchaseOrder()"')
      .should('have.text', 'Purchase')
      .click();
    cy.get('.lead').should('contain', custName);
    cy.get('.lead').should('contain', custcardNum);
  });
});
