describe('Searchbar', () => {
    beforeEach(() => {
        cy.visit(Cypress.config('appUrl'));
        cy.waitForReact();
    });

    it('Find buttons', () => {
        cy.contains('Search')
            .click();
        cy.contains('Sort by name')
            .click();
        cy.contains('Sort by goals')
            .click();
    });

//Test search functionality

    it('Correct player appears after search', () => {
        const typeInput = 'Rashf';
        cy.get('.searchInput')
            .type(typeInput)
            .should('have.value', typeInput)
        cy.contains('Search')
            .click()
            .get('.playersList')
            .contains('Rashford')
            .should('not.have.value', 'Henderson');
    });
});