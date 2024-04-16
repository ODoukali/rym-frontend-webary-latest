
/* const baseUrl = Cypress.config('baseUrl') || 'https://rym-students.webaryco.com';

function login(email, psw) {

  cy.visit(baseUrl);

  cy.get('.css-qt9lmr > .MuiButton-root').click();

  cy.get('#\\:r1\\:', { timeout: 1000 }).should('be.visible').type(email);
  cy.get('#\\:r2\\:', { timeout: 1000 }).should('be.visible').type(psw);

  cy.get(':nth-child(1) > form > .MuiButton-root').should('be.enabled').click();
} */

describe('update profile', () => {
  beforeEach(() => {
    cy.fixture('users').then(testdata => {
      const user = testdata.user[0]; 
      cy.login(user.email, user.password);  // Ensure 'login' is defined globally or imported
    });
  });

  it('displays user profile information', () => {
    cy.fixture('users').then(testdata => {
      const user = testdata.user[0];

      // Navigate to the user profile page
      cy.get(':nth-child(2) > .MuiTypography-inherit > .MuiBadge-root > .MuiTypography-root').click()

      cy.get('.MuiTypography-inherit > .MuiTypography-root').should('contain', 'Hi, ' + user.firstname + ' ' + user.lastName); // Profile greeting

      // Updating some field, assumed to be a username change
      cy.get(':nth-child(3) > form > .css-1onnlki > .MuiStack-root > .MuiButtonBase-root')
        .click();
      cy.get('#\\:r2\\:').clear().type(user.nickname); // Assuming this is a username field
      cy.get('.css-1shwd71').click(); // Save changes button

      // Updating contact number
      cy.get(':nth-child(4) > form > .css-1onnlki > .MuiStack-root > .MuiButtonBase-root')
        .click();
      cy.get('#\\:r3\\:').clear().type(user.phonenum); // Assuming this is a phone number field
      cy.get(':nth-child(4) > form > .css-1onnlki > .css-1dufvrh > .MuiStack-root > .css-1shwd71').click(); // Save changes button
    });
  });
});


   /* cy.get(':nth-child(1) > form > .css-1onnlki > .MuiStack-root > .MuiButtonBase-root').click();
            cy.wait(500);
            cy.get('#\\:r0\\:').clear().type('John1');
            cy.wait(500);
            cy.get(':nth-child(1) > form > .css-1onnlki > .css-1dufvrh > .MuiStack-root > .css-1shwd71').click();
            cy.wait(500);

            cy.get(':nth-child(2) > form > .css-1onnlki > .MuiStack-root > .MuiButtonBase-root').click();
            cy.wait(500);
            cy.get('#\\:r1\\:').clear().type('Terry1');
            cy.wait(500);
            cy.get(':nth-child(2) > form > .css-1onnlki > .css-1dufvrh > .MuiStack-root > .css-1shwd71').click(); 
            cy.wait(500); */
  