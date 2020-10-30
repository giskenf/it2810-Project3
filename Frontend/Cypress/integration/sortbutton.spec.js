describe('Drop Down Bar', () => {
    beforeEach(() => {
        cy.visit(Cypress.config('appUrl'));
        cy.waitForReact();
    });

    //Test sort on all players that has "k" in their name
    it('Test sort by name and sort ascending button on players that has the letter k in their name', () => {
        const typeInput = 'k';
        cy.get('.searchInput')
            .type(typeInput)
        cy.contains('Search')
            .click()
            .get('.playersList')
            .get('.popupButton')
            .first()
            .contains('Sokratis Papastathopoulos')
        cy.contains('Sort by name')
            .click()
        cy.contains('Search')
            .click()
            .get('.playersList')
            .get('.popupButton')
            .first()
            .contains('Zack Steffen')
        cy.contains('Sort ascending')
            .click()
        cy.contains('Search')
            .click()
            .get('.playersList')
            .get('.popupButton')
            .first()
            .contains('Aaron Wan-Bissaka')
            .should('not.have.value','Zack Steffen' );
    });

    it('Test sort by most goals scored on all players', () => {
        cy.contains('Sort by goals scored')
            .click()
        cy.contains('Search')
            .click()
            .get('.popupButton')
            .first()
            .contains('Heung-Min Son')
            .should('not.have.value', 'Mohamed Salah');
    });
});