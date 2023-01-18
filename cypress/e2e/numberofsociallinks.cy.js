describe('My Test Suite', () => {
	it('checks for number of <a> elements inside div element with class .contacts', () => {
		cy.visit('/');
		cy.get('section.block')
			.should('exist')
			.within(() => {
				cy.get('div.contacts').should('exist').find('a').should('have.length', 6);
			});
	});
});
