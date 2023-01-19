describe('link titles correct', () => {
	it('checks for text content of <p> elements inside <a> elements inside div element with class .contacts', () => {
		cy.visit('/');
		cy.get('section.block')
			.should('exist')
			.within(() => {
				cy.get('div.contacts')
					.should('exist')
					.find('a')
					.should('have.length', 6)
					.each(($el, index) => {
						cy.wrap($el)
							.find('p')
							.should(
								'have.text',
								['Telegram', 'Email', 'Matrix', 'Threema', 'Session', 'GitHub'][index]
							);
					});
			});
	});
});
