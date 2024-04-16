/* import '../authentication/01.login.cy.js';
import '../Profil/01.Uprofil.cy.js';  // Correct as it goes up to the parent then into the Profil folder
import '../Profil/02.Upassword.cy.js'; // Should also use '../' to go up to the parent first
import '../Courses/01.playcourse.cy.js'; */

describe('update profile', () => {
    beforeEach(() => {
      cy.fixture('users').then(testdata => {
        const user = testdata.user[0]; 

        cy.visit('https://rym-students.webaryco.com');
        cy.wait(1500);
        cy.get('.css-qt9lmr > .MuiButton-root').click();
        cy.get('#\\:r1\\:').type(user.email);
        cy.get('#\\:r2\\:').type(user.password);
        cy.wait(1500);
        cy.get(':nth-child(1) > form > .MuiButton-root').click();

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



      it('play course', () => {
   
        cy.get('.css-17pg5h4 > :nth-child(1)').click();
        cy.wait(1000);
        cy.get(':nth-child(1) > .css-9qyz8t > .MuiStack-root > .MuiButtonBase-root').click();
        cy.wait(2000);
        cy.get('.play-btn > media-play-button > .MuiButtonBase-root').click();
        cy.wait(3000);
        
        
    })

  });




/* 

  describe('update profile', () => {
    before(() => {
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
                // Optionally check for a logout button or some element that confirms login
            });
        });
    });

    beforeEach(() => {
        // Refresh the page before each test to start fresh from the logged-in state
        cy.visit('https://rym-students.webaryco.com');
    });

    it('displays user profile information', () => {
        cy.fixture('users').then(testdata => {
            const user = testdata.user[0];
            cy.get(':nth-child(2) > .MuiTypography-inherit > .MuiBadge-root > .MuiTypography-root').click();
            cy.get('.MuiTypography-inherit > .MuiTypography-root').should('contain', 'Hi, ' + user.firstname + ' ' + user.lastName);
        // Updating some field, assumed to be a username change
            cy.get(':nth-child(3) > form > .css-1onnlki > .MuiStack-root > .MuiButtonBase-root')
            .click();
            cy.get('#\\:r2\\:').clear().type(user.nickname); // Assuming this is a username field
            cy.get('.css-1shwd71').click(); // Save changes button
    
            // Updating contact number
            cy.get(':nth-child(4) > form > .css-1onnlki > .MuiStack-root > .MuiButtonBase-root')
            .click();
            cy.get('#\\:r3\\:').clear().type(user.phonenum); // Assuming this is a phone number field
            cy.get(':nth-child(4) > form > .css-1onnlki > .css-1dufvrh > .MuiStack-root > .css-1shwd71').click();
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

    it('play course', () => {
        // Steps to navigate and interact with the course
        cy.get('.css-17pg5h4 > :nth-child(1)').click();
        cy.wait(1000);
        cy.get(':nth-child(1) > .css-9qyz8t > .MuiStack-root > .MuiButtonBase-root').click();
        cy.wait(2000);
        cy.get('.play-btn > media-play-button > .MuiButtonBase-root').click();
        cy.wait(3000);
    });
});
 */