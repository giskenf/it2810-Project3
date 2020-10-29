describe('Drop Down Bar', () => {
    beforeEach(() => {
        cy.visit(Cypress.config('appUrl'));
        cy.waitForReact();
    });

    it('Test drop down menu', () => {
        const typeInput = 'arsenal';
        cy.get('.react-select')
            //.type(typeInput)
            .should('have.value', 'Manchester United');
            //.contains('Arsenal');
        /*cy.contains('Search')
            .click()
            .get('.playersList')
            .contains('Rashford');*/
    });
});