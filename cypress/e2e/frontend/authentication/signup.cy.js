

/* describe('Sign up', () => {
    it('Sign up', () => {
        cy.fixture('user').then(testdata => {
            const user = testdata.users[0];
        cy.visit('https://rym-students.webaryco.com')
        cy.get('.css-qt9lmr > .MuiButton-root').click();
        cy.get('.MuiToggleButtonGroup-lastButton').click();
        cy.get('#\\:r3\\:').type(user.firstname);
        cy.get('#\\:r4\\:').type(user.lastName);
        cy.get('#\\:r5\\:').type(user.nickname);
        cy.wait(1100); // Consider using cy.wait() for specific network calls instead of a fixed time.
        cy.get('#\\:r6\\:').clear().type(user.phonenum);
        cy.wait(1100); // As above regarding cy.wait().
        cy.get('#\\:r8\\:').type(user.email);
        cy.get('#\\:r9\\:').type(user.password);
        cy.get('#\\:ra\\:').type(user.confirmPassword);
        cy.get('[style="width: 304px; height: 78px;"] > div > iframe').click();
        cy.wait(3000);    
        cy.get('.active > :nth-child(2) > form > .MuiButton-root').click();
        cy.get('.active > :nth-child(2) > form > :nth-child(2)').should('have.text' , 'Invalid reCAPTCHA. Please try again.');

        
        
    })
  })}) */

  /* describe('Sign up', () => {
    it('Sign up', () => {
      cy.visit('https://rym-students.webaryco.com')
      cy.get('.css-qt9lmr > .MuiButton-root').click();
      cy.get('.MuiToggleButtonGroup-lastButton').click();
      cy.get('#\\:r3\\:').type('John');
      cy.get('#\\:r4\\:').type('Terry');
      cy.get('#\\:r5\\:').type('John_terry');
      cy.wait(1100);
      cy.get('#\\:r6\\:').clear().type('+212708170061');
      cy.wait(1100);
      cy.get('#\\:r8\\:').type('Terry@gmail.com');
      cy.get('#\\:r9\\:').type('Abc123@@');
      cy.get('#\\:ra\\:').type('Abc123@@');
      
      // This attempts to interact with the reCAPTCHA iframe, which typically won't work in automated tests
      // You'll need to handle reCAPTCHA in a test environment differently, such as by using a testing key or disabling it for test runs
      cy.get('[style="width: 304px; height: 78px;"] > div > iframe').click();
      
      cy.wait(3000);    
      cy.get('.active > :nth-child(2) > form > .MuiButton-root').click();
      cy.get('.active > :nth-child(2) > form > :nth-child(2)').should('have.text', 'Invalid reCAPTCHA. Please try again.');
    });
  }); */
  
/*   describe('Sign up', () => {
    it('Sign up using fixture user', () => {
      cy.fixture('signupTestuser').then((user) => {
        cy.visit('https://rym-students.webaryco.com')
        cy.get('.css-qt9lmr > .MuiButton-root').click();
        cy.get('.MuiToggleButtonGroup-lastButton').click();
        cy.get('#\\:r3\\:').type(user.firstname);
        cy.get('#\\:r4\\:').type(user.lastName);
        cy.get('#\\:r5\\:').type(user.nickname);
        cy.wait(1100); // Consider using cy.wait() for specific network calls instead of a fixed time.
        cy.get('#\\:r6\\:').clear().type(user.phonenum);
        cy.wait(1100); // As above regarding cy.wait().
        cy.get('#\\:r8\\:').type(user.email);
        cy.get('#\\:r9\\:').type(user.password);
        cy.get('#\\:ra\\:').type(user.confirmPassword);
        
        // Handling reCAPTCHA is challenging in automated tests due to its design to prevent automation.
        // You'll likely need to mock this out or have a test-specific bypass for testing purposes.
  
        // Attempting to interact with reCAPTCHA; this will likely not work as expected in automated tests.
        cy.get('[style="width: 304px; height: 78px;"] > div > iframe').click();
        
        cy.wait(3000); // Again, consider waiting for specific network calls or conditions.
        cy.get('.active > :nth-child(2) > form > .MuiButton-root').click();
        // This assertion will likely need to be adjusted based on the actual response or page state.
        cy.get('.active > :nth-child(2) > form > :nth-child(2)').should('have.text', 'Invalid reCAPTCHA. Please try again.');
      });
    });
  }); */
  
  describe('Sign up', () => {
    it('Sign up', () => {
      cy.fixture('users').then(testdata => {
          const user = testdata.user[0]; // Corrected to match your JSON structure
        cy.visit('https://rym-students.webaryco.com')
        cy.get('.css-qt9lmr > .MuiButton-root').click();
        cy.get('.MuiToggleButtonGroup-lastButton').click();
        cy.get('#\\:r3\\:').type(user.firstname);
        cy.get('#\\:r4\\:').type(user.lastName);
        cy.get('#\\:r5\\:').type(user.nickname);
        cy.wait(1100);
        cy.get('#\\:r6\\:').clear().type(user.phonenum);
        cy.wait(1100);
        cy.get('#\\:r8\\:').type(user.email);
        cy.get('#\\:r9\\:').type(user.password);
        cy.get('#\\:ra\\:').type(user.confirmPassword);
        cy.get('[style="width: 304px; height: 78px;"] > div > iframe').click();
        cy.wait(3000);    
        cy.get('.active > :nth-child(2) > form > .MuiButton-root').click();
        cy.get('.active > :nth-child(2) > form > :nth-child(2)').should('have.text' , 'Invalid reCAPTCHA. Please try again.');
      });
    });
  });
  