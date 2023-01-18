describe('title', () => {
    it('checks for h1 element and its text', () => {
        cy.visit('/');
        cy.get('h1')
          .should('exist')
          .and('contain', "Hi, I'm Stefan");
    });
});