export class CartPage {
  goToCartPage(): void {
    cy.contains('Cart').click();
    cy.url().should('include', '/view_cart');
  }
}
