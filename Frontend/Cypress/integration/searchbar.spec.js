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

    it('Test drop down menu', () => {
        const typeInput = 'Rashford';
        cy.get('.select').should('be.visible');
            /*.type(typeInput)
            .should('have.value', typeInput);*/
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

});