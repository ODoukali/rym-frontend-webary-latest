// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// No changes are required here since the credentials will be passed as arguments
// In cypress/support/commands.js
Cypress.Commands.add('login', () => {
  
  cy.fixture('users').then(testdata => {
    const user = testdata.user[0];
    cy.session([user.email, user.password], () => {
      cy.visit('https://rym-students.webaryco.com');
      cy.wait(1500);
      cy.get('.css-qt9lmr > .MuiButton-root').click();
      cy.get('#\\:r1\\:').type(user.email);
      cy.get('#\\:r2\\:').type(user.password);
      cy.wait(1500);
      cy.get(':nth-child(1) > form > .MuiButton-root').click();
    }, {
      cacheAcrossSpecs: true
    });
  });
  cy.clearCookies();
  cy.clearLocalStorage();
  cy.clearAllSessionStorage();
});





  