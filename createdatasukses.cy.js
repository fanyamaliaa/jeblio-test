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
  cy.contains('Tambah Baru').click();
  cy.get('input[placeholder="Pilih pelanggan"]').click();  // Buka dropdown
cy.contains('li', 'Akulaku').click();  // Pilih opsi "Akulaku"
cy.get('input[placeholder="Pilih pelanggan"]').should('have.value', 'Akulaku'); // Verifikasi
cy.get('#mui-19').type('123456');
cy.intercept('/api/locations').as('loadLocations');
cy.get('input[placeholder="Pilih lokasi"]').click();  // Buka dropdown
cy.contains('li', 'Jakarta').click();  // Pilih opsi "Akulaku"
cy.get('input[placeholder="Pilih lokasi"]').should('have.value', 'Jakarta');
cy.contains('button', 'Tambah Baru').click(); // Klik tombol "Tambah Baru"
cy.contains('div', 'Blue - Blue').should('be.visible').click(); // Pilih opsi "Blue - Blue"
cy.get('.jss49').should('contain', 'Blue - Blue'); // Verifikasi opsi terpilih

// cy.get('.MuiGrid-container > :nth-child(4) > .text-primary').click();
// cy.get('#mui-52').clear().type('depsos');
// //cy.get('#mui-52').clear().type('Indonesia');
// cy.get('.MuiButton-root.MuiButton-contained').click();
cy.get('#mui-29').clear().type('081234567890');



//cy.get('.MuiButton-containedPrimary').click();
cy.get('#mui-37').clear('20');
cy.get('#mui-37').type('2.000');
cy.get('#mui-38').clear('10');
cy.get('#mui-38').type('1.000');
cy.get('input[name="is_paid"]').click();


// cy.get('#mui-158').clear('in');
// cy.get('#mui-158').type('indonesia');
// cy.get('.d-flex > .MuiButton-root > .MuiButton-startIcon > svg').click();
// cy.get('#mui-32').clear('0');
// cy.get('#mui-32').type('02188354266');
// cy.get('div > .MuiButton-root').click();

// cy.get('#mui-39').clear('10');
// cy.get('#mui-39').type('1.000');
// cy.get('#mui-40').clear('10');
// cy.get('#mui-40').type('1.000');
// cy.get('.MuiGrid-container > :nth-child(4) > .text-primary').click();
// cy.get('#mui-157').clear('d');
// cy.get('#mui-157').type('depsos');
// cy.get('#mui-158').clear('in');
// cy.get('#mui-158').type('indonesia');
// cy.get('.d-flex > .MuiButton-root > .MuiButton-startIcon > svg').click();
// cy.get('#mui-32').clear('0');
// cy.get('#mui-32').type('02188354266');
// cy.get('div > .MuiButton-root').click();
//cy.get('input[name="add_disc"]').type('1000');







 // cy.get('[href="/sales/transactions"] > :nth-child(1) > .d-flex > .flex-grow-1 > .font-size-sm').click();
// cy.get('.MuiButton-root > .d-flex').click();
// cy.get('#mui-21').click();
// cy.get('#mui-21-option-0').click();
// cy.get('#mui-22').clear('1');
// cy.get('#mui-22').type('16111611');
// cy.get('.MuiGrid-spacing-xs-5 > :nth-child(2) > .align-items-center').click();
// cy.get('#mui-28').click();
// cy.get('#mui-28-option-0').click();
// cy.get('#mui-29').click();
// cy.get('.justify-content-between > .MuiGrid-grid-md-8 > .MuiFormControlLabel-root > .MuiSwitch-root > .MuiSwitch-switchBase > .MuiSwitch-input').check();
// cy.get('.css-1o9xw9j > .MuiButton-root').click();
// cy.get('[data-index="0"] > [style="height: 74px;"] > .css-1rjpksd > .flex-row > .jss48 > :nth-child(2)').click();
// cy.get('.css-1o9xw9j > .MuiButton-root').click();
// cy.get('[data-index="1"] > [style="height: 74px;"] > .css-1rjpksd > .flex-row > .jss48 > :nth-child(3)').click();
// cy.get(':nth-child(25) > .MuiFormControlLabel-root > .MuiSwitch-root > .MuiSwitch-switchBase > .MuiSwitch-input').check();
// cy.get('#mui-37').clear('20');
// cy.get('#mui-37').type('2.000');
// cy.get('#mui-38').clear('10');
// cy.get('#mui-38').type('1.000');
// cy.get('#mui-39').clear('10');
// cy.get('#mui-39').type('1.000');
// cy.get('#mui-40').clear('10');
// cy.get('#mui-40').type('1.000');
// cy.get('.MuiGrid-container > :nth-child(4) > .text-primary').click();
// cy.get('#mui-157').clear('d');
// cy.get('#mui-157').type('depsos');
// cy.get('#mui-158').clear('in');
// cy.get('#mui-158').type('indonesia');
// cy.get('.d-flex > .MuiButton-root > .MuiButton-startIcon > svg').click();
// cy.get('#mui-32').clear('0');
// cy.get('#mui-32').type('02188354266');
cy.get('div > .MuiButton-root').click();
// /* ==== End Cypress Studio ==== */

// cy.contains('a', 'Penjualan').scrollIntoView().should('be.visible').click();
// cy.url().should('include', '/sales');


  /* ==== End Cypress Studio ==== */
});