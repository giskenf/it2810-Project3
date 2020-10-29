describe('Searchbar', () => {
    beforeEach(() => {
        cy.visit(Cypress.config('appUrl'));
        cy.waitForReact();
    });

    it('Find buttons', () => {
        cy.contains('Search').click();
        cy.contains('Sort by name').click();
        cy.contains('Sort by goals').click();
    });


    it('Test search input', () => {
        const typeInput = 'Rashford';
        cy.get('.searchInput')
        .type(typeInput)
        .should('have.value', typeInput);
    });

    it('Shows players after clicking search button', () => {
        cy.contains('Search').click();
        cy.get('.playersList').should('be.visible');
    });

    it('Correct player appears after search', () => {
        cy.server();
        cy.route('/players/?skip=0&name=rashford').as('search');
        cy.get('.searchInput').type('rashf').should('have.value', 'rashf');
        cy.contains('Search').click();
        cy.get('.playersList').first().contains('Rashford');
    });
});