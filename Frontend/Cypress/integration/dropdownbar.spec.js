describe('Searchbar', () => {
    beforeEach(() => {
        cy.visit(Cypress.config('appUrl'));
        cy.waitForReact();
    });

    it('Test drop down menu', () => {
        const typeInput = 'manchester uni';
        cy.get('.select').should('be.visible');
        cy.get('.select').type(typeInput).should('have.value', typeInput);
        cy.contains(typeInput).click();
        cy.contains('Search').click();
        cy.get('.playersList').contains('Lingard');
    });


});