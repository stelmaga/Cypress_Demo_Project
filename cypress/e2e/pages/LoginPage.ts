export class SignupLoginPage {
  fillSignupForm(name: string, email: string): void {
    cy.get('[data-qa="signup-name"]').type(name);
    cy.get('[data-qa="signup-email"]').type(email);
    cy.get('[data-qa="signup-button"]').click();
  }
}

export class LoginPage {
  login(email: string, password: string): void {
    cy.get('[data-qa="login-email"]').type(email);
    cy.get('[data-qa="login-password"]').type(password);
    cy.get('[data-qa="login-button"]').click();
  }
}
