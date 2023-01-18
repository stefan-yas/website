describe('div exists', () => {
    it('checks for div element with class .contacts inside section element with class .block', () => {
        cy.visit('/');
        cy.get('section.block')
          .should('exist')
          .within(() => {
            cy.get('div.contacts')
              .should('exist');
          });
    });
});