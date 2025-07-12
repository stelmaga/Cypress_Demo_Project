export class HomePage {
  clickSignupLogin(): void {
    cy.get('a[href="/login"]').should('contain.text', 'Signup / Login')
    .click();
  }
}
