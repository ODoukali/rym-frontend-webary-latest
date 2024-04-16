----------------------------------------------------Project: RYM---------------------------------------------------------

----------------------------------------------------Description----------------------------------------------------------

This project involves the creation of automation scripts. To view a demonstration of our automation efforts, please follow the setup and execution instructions below.

Installation

First, you need to install the necessary packages:

npm install

npm install cypress --save-dev

----------------------------------------------------Running Tests---------------------------------------------------------

Automated Testing

To run automated tests and generate a report, use the following command:


npx cypress run --browser chrome --spec "cypress/e2e/frontend/smoke/*.cy.js"

Interactive Test Runner

To open Cypress in interactive mode, run:

npx cypress open





