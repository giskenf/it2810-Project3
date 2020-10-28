describe('Start Page', () => {
    it('gets correct  starting page', () => {
        // Go to website and fetch from correct end-point
        cy.server();
        //cy.route('GET', '/pokemon/?skip=0&sort=id').as('getPokemon');
        //cy.visit(Cypress.config('appUrl'));
        cy.visit(Cypress.config('appUrl'));
        cy.contains('Premier League');
    })

    it('has all types as buttons with correct color and text', () => {
        cy.contains('Search').should('be.visible');
        cy.contains('Sort by name').should('be.visible');
        cy.contains('Sort by goals').should('be.visible');
        /*cy.get('.filterButton').should('have.length', types.length);
        for (let i = 0; i < types.length; i++) {
            const expectedType = types[i];
            const expectedColor = Color(colorFromType[types[i]]).toString();
            cy.get('.filterButton')
                .eq(i)
                .should('have.text', expectedType)
                .and('have.css', 'background-color')
                .and('eq', expectedColor);
        }*/
    });
});