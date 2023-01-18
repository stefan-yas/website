describe('social links show vertically on mobile, but horizontally on desktop', () => {
    it('checks for flex-direction of div element with class .contacts', () => {
        cy.visit('/');
        cy.get('section.block')
          .should('exist')
          .within(() => {
            cy.get('div.contacts')
              .should('exist')
              .then(($el) => {
                cy.viewport('macbook-15')
                cy.wrap($el).should('have.css', 'flex-direction', 'row')
                cy.viewport('iphone-6')
                cy.wrap($el).should('have.css', 'flex-direction', 'column')
              });
          });
    });
});