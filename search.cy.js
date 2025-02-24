/* ==== Test Created with Cypress Studio ==== */
it('create', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('https://v2.jubelio.com/');
    cy.get('#textfield-email').clear();
    cy.get('#textfield-email').type('storevjubelio@gmail.com');
    cy.get('#textfield-password').clear('Jubelio@321');
    cy.get('#textfield-password').type('Jubelio@321');
    cy.get('.MuiButton-root').click();
    cy.get('.navbar-toggler').click();
    cy.get('.navbar-collapse').should('be.visible'); // Klik navbar jika perlu
    cy.get('.MuiList-root > [href="/sales"]').click();
    cy.get('[href="/sales/transactions"] > :nth-child(1) > .d-flex > .flex-grow-1 > .font-size-sm').click();
    cy.get('input[name="q"]')
    .clear()
    .type('SO-000000072{enter}');
    cy.contains('SO-000000072').should('be.visible');

  
});
