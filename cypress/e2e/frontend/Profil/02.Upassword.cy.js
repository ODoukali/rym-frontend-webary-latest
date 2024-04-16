const baseUrl = Cypress.config('baseUrl') || 'https://rym-students.webaryco.com';
function login(email, psw) {

  cy.visit(baseUrl);
  cy.get('.css-qt9lmr > .MuiButton-root').click();

  cy.get('#\\:r1\\:', { timeout: 1000 }).should('be.visible').type(email);
  cy.get('#\\:r2\\:', { timeout: 1000 }).should('be.visible').type(psw);

  cy.get(':nth-child(1) > form > .MuiButton-root').should('be.enabled').click();
}




describe('update Password', () => {
  beforeEach(() => {
    cy.fixture('users').then(testdata => {
      const user = testdata.user[0]; 
      login(user.email, user.password);  // Ensure 'login' is defined globally or imported
  });
  });


    it('Update user password', () => {
      cy.fixture('users').then(testdata => {
        const user = testdata.user[0]; 

        cy.get(':nth-child(2) > .MuiTypography-inherit > .MuiBadge-root > .MuiTypography-root').click();
        cy.wait(1000);
        cy.get('.css-b93e9j > :nth-child(3)').click();
        cy.wait(500);
        cy.get('#\\:r8\\:').clear().type(user.password).wait(500);
        cy.get('#\\:r9\\:').clear().type(user.password).wait(500);
        cy.get('#\\:ra\\:').clear().type(user.password).wait(500);
        cy.get('.MuiDialogActions-root > .MuiButtonBase-root').click();
    
        cy.wait(500);
        cy.get('.css-1w1d21h > .MuiTypography-root').should('have.text', 'The new password cannot be the same as the old password.');


        cy.wait(1000);
        cy.get('#\\:r8\\:').clear().type(user.password).wait(500);
        cy.get('#\\:r9\\:').clear().type(user.wpassword).wait(500);
        cy.get('#\\:ra\\:').clear().type('AZERTY123').wait(500);
        cy.get('.MuiDialogActions-root > .MuiButtonBase-root').click();
    
        cy.wait(500);
        cy.get('.css-1w1d21h > .MuiTypography-root').should('have.text', 'The new passwords must match.');


        cy.wait(1000);
        cy.get('#\\:r8\\:').clear().type(user.wpassword).wait(500);
        cy.get('#\\:r9\\:').clear().type(user.password).wait(500);
        cy.get('#\\:ra\\:').clear().type(user.password).wait(500);
        cy.get('.MuiDialogActions-root > .MuiButtonBase-root').click();
    
        cy.wait(500);
        cy.get('.css-1w1d21h > .MuiTypography-root').should('have.text', 'Old password is not correct.');

        cy.reload();
        cy.wait(2000);

      });

    });

  
  });




    




// Additional tests...

