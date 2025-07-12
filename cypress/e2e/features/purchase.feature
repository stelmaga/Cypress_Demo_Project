Feature: Purchasing product flow

  Scenario: Purchasing a product as unlogged user
    Given I open the site at "https://automationexercise.com"
    When I browse the product listing
    And I add the first product to the cart
    And I proceed to checkout
    Then I should be redirected to the login page
    When I log in using valid credentials
    And I go to the cart page
    Then I see the product still in the cart
    When I proceed to checkout
    And I complete the checkout process
    Then I should see the order confirmation message "Congratulations! Your order has been confirmed!"

  Scenario: Attempting checkout with an empty cart
    Given I open the site at "https://automationexercise.com"
    When I go to the cart page
    Then I should see a message that the cart is empty
    And I should not be able to proceed to checkout
