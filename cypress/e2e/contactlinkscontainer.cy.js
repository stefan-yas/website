describe('section with the class .block is present', () => {
	it('checks for section element with class .block', () => {
		cy.visit('/');
		cy.get('section.block').should('exist');
	});
});
