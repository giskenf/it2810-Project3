describe('Drop Down Bar', () => {
    beforeEach(() => {
        cy.visit(Cypress.config('appUrl'));
        cy.waitForReact();
    });

    it('Test drop down menu', () => {
        const typeInput = 'liverpool';
        cy.get('.react-select')
            .type(typeInput)
            .contains('Liverpool')
            .should('not.have.value', 'Arsenal')
        cy.contains('Search')
            .click()
            .get('.playersList')
            .contains('Sokratis Papastathopoulos')
            .should('not.have.value', 'Henderson');
    });

    it('Test drop down menu', () => {
        const typeInput = 'arsenal';
        cy.get('.react-select')
            .type(typeInput)
            .contains('Arsenal')
            .should('not.have.value', 'Everton')
        cy.contains('Search')
            .click()
            .get('.playersList')
            .contains('Sokratis Papastathopoulos')
            .should('not.have.value', 'Henderson');
    });
});