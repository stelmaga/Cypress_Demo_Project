Feature: User login flow

  Scenario: Login with a valid registered user
    Given I open the site at "https://automationexercise.com"
    When I go to the signup&login page
    And I log in using valid credentials
    Then I should see "Logged in as" with my username

  Scenario: Login with incorrect email
    Given I open the site at "https://automationexercise.com"
    When I go to the signup&login page
    And I log in using invalid email
    Then I should see the error message "Your email or password is incorrect!"
  
  Scenario: Login with incorrect password
    Given I open the site at "https://automationexercise.com"
    When I go to the signup&login page
    And I log in using invalid password
    Then I should see the error message "Your email or password is incorrect!"
  