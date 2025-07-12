import { When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { faker } from '@faker-js/faker';
import { CartPage } from '../pages/CartPage';

const cartPage = new CartPage();

When('I browse the product listing', () => {
  cy.get('a[href="/products"]').should('contain.text', 'Products').click();
  cy.url().should('include', '/products');
  cy.get('.features_items').should('be.visible');
});

When('I add the first product to the cart', () => {
  // Hover and click "Add to cart"
  cy.get('.product-image-wrapper').first().trigger('mouseover');
  cy.contains('Add to cart').first().click();

  // Wait for modal and continue
  cy.contains('Continue Shopping').click();
});

When('I proceed to checkout', () => {
  cartPage.goToCartPage();
  cy.contains('Proceed To Checkout').click();
});

Then('I should be redirected to the signup/login page', () => {
  cy.get('#checkoutModal a[href="/login"]').click();
  cy.url().should('include', '/login');
  cy.contains('Login to your account').should('be.visible');
});

Then('I go to the cart page', () => {
  cartPage.goToCartPage();
});

When('I see the product still in the cart', () => {
  cy.url().should('include', '/view_cart');
  cy.get('.cart_description').should('exist');
});

Then('I complete the checkout process', () => {
  cy.contains('Place Order').click();
  cy.get('[data-qa="name-on-card"]').type(faker.person.fullName());
  cy.get('[data-qa="card-number"]').type('4111111111111111');
  cy.get('[data-qa="cvc"]').type('123');
  cy.get('[data-qa="expiry-month"]').type('12');
  cy.get('[data-qa="expiry-year"]').type('2030');
  cy.get('[data-qa="pay-button"]').click();
});

Then('I should see the order confirmation message {string}', (message: string) => {
  cy.contains(message, { timeout: 10000 }).should('be.visible');
});

Then('I should see a message that the cart is empty', () => {
  cy.get('.cart_description').should('not.exist');
  cy.contains('Cart is empty!').should('be.visible');
});

Then('I should not be able to proceed to checkout', () => {
  cy.contains('Proceed To Checkout').should('not.exist');
});
