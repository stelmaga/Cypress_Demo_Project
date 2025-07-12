import { When, Then } from '@badeball/cypress-cucumber-preprocessor';

import { SignupLoginPage } from '../pages/LoginPage';
import { RegistrationPage } from '../pages/RegistrationPage';
import { users } from '../../fixtures/users';
import { generateDynamicUser } from '../../support/test-data/generatedUser';
import { TestUser } from '../../support/test-data/types';

let dynamicUser: TestUser;

const signupPage = new SignupLoginPage();
const registrationPage = new RegistrationPage();

When('I enter a new unique name and email', () => {
  dynamicUser = generateDynamicUser();
  signupPage.fillSignupForm(dynamicUser.name, dynamicUser.email);
});

When('I complete the registration form with details', () => {
  registrationPage.completeForm(dynamicUser);
});

Then('I should see {string} confirmation', (message: string) => {
  cy.get('b').contains(message).should('be.visible');
});

Then('I delete the account', () => {
  registrationPage.deleteAccount();
});

When('I enter an existing name and email', () => {
  cy.get('[data-qa="signup-name"]').type(users.validTestUser.name);
  cy.get('[data-qa="signup-email"]').type(users.validTestUser.email);
  cy.get('[data-qa="signup-button"]').click();
});
