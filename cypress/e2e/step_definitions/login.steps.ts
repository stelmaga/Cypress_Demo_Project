import { When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { LoginPage } from '../pages/LoginPage';
import { users } from '../../fixtures/users';

const loginPage = new LoginPage();

When('I log in using valid credentials', () => {
  loginPage.login(users.validTestUser.email, users.validTestUser.password);
});

When('I log in using invalid email', () => {
  loginPage.login(users.invalidTestUser1.email, users.invalidTestUser1.password);
});

When('I log in using invalid password', () => {
  loginPage.login(users.invalidTestUser2.email, users.invalidTestUser2.password);
});

Then('I should see {string} with my username', (text: string) => {
  cy.contains(`${text} ${users.validTestUser.name}`).should('be.visible');
});
