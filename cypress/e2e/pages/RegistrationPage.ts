import { TestUser } from '../../support/test-data/types';

export class RegistrationPage {
  completeForm(user: TestUser): void {
    cy.get('#id_gender1').check();
    cy.get('#password').type(user.password);

    cy.get('#days').select('10');
    cy.get('#months').select('May');
    cy.get('#years').select('1990');
    
    cy.get('#first_name').type(user.name);
    cy.get('#last_name').type(user.lastName);
    cy.get('#address1').type(user.address);
    cy.get('#country').select('United States');
    cy.get('#state').type(user.state);
    cy.get('#city').type(user.city);
    cy.get('#zipcode').type(user.zip);
    cy.get('#mobile_number').type(user.phone);

    cy.get('[data-qa="create-account"]').click();
  }

  deleteAccount(): void {
    cy.get('[data-qa="continue-button"]').click();
    cy.get('a[href="/delete_account"]').should('contain.text', 'Delete Account').click();
  }
}
