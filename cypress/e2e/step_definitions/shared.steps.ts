import { When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { HomePage } from '../pages/HomePage';

const homePage = new HomePage();

When('I open the site at {string}', (url: string) => {
  cy.visit(url);
});

When('I go to the signup&login page', () => {
  homePage.clickSignupLogin();
});

Then('I should see the error message {string}', (message: string) => {
  cy.contains(message).should('be.visible');
});
