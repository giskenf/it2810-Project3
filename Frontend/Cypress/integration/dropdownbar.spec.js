describe('Drop Down Bar', () => {
    beforeEach(() => {
        cy.visit(Cypress.config('appUrl'));
        cy.waitForReact();
    });

    it('Test drop down menu', () => {
        const typeInput = 'arsenal';
        cy.get('.react-select')
            .type(typeInput)
            .contains('Arsenal');
        /*cy.contains('Search')
            .click()
        cy.get('.playersList')
            .contains('Henderson');
        cy.log(cy.get('.playersList'));*/
    });
});