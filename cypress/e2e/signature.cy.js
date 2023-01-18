describe('signature', () => {
    it('checks for the image with alt attribute "footer-signature"', () => {
        cy.visit('/')
        cy.get('img[alt="footer-signature"]').should('exist')
    })
})