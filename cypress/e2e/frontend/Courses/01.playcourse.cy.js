
const baseUrl = Cypress.config('baseUrl') || 'https://rym-students.webaryco.com';

function login(email, psw) {
  // Visit the login page
  cy.visit(baseUrl);

  // Click the login button
  cy.get('.css-qt9lmr > .MuiButton-root').click();

  // Type the email and password into their respective fields
  // Ensure the elements are visible and enabled before typing
  cy.get('#\\:r1\\:', { timeout: 1000 }).should('be.visible').type(email);
  cy.get('#\\:r2\\:', { timeout: 1000 }).should('be.visible').type(psw);

  // Submit the form
  cy.get(':nth-child(1) > form > .MuiButton-root').should('be.enabled').click();
}
describe('Play courses', () => {
  beforeEach(() => {
    cy.fixture('users').then(testdata => {
      const user = testdata.user[0]; 
      login(user.email, user.password);  // Ensure 'login' is defined globally or imported
    });
  });

    it('play course', () => {
   
        cy.get('.css-17pg5h4 > :nth-child(1)').click();
        cy.wait(1000);
        cy.get(':nth-child(1) > .css-9qyz8t > .MuiStack-root > .MuiButtonBase-root').click();
        cy.wait(2000);
        cy.get('.play-btn > media-play-button > .MuiButtonBase-root').click();
        cy.wait(3000);

        
    })
});

