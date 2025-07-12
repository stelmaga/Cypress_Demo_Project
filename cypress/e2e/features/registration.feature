Feature: User registration flow

  Scenario: Register new user with valid data and delete it
    Given I open the site at "https://automationexercise.com"
    When I go to the signup&login page
    And I enter a new unique name and email
    And I complete the registration form with details
    Then I should see "Account Created!" confirmation
    And I delete the account
    Then I should see "Account Deleted!" confirmation
 
  Scenario: Register with an already existing email
    Given I open the site at "https://automationexercise.com"
    When I go to the signup&login page
    And I enter an existing name and email
    Then I should see the error message "Email Address already exist!"
