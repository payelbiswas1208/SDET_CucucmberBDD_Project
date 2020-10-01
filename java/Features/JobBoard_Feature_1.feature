@JobBoard_Activity_1
Feature: Create New User in Job Board

  Scenario: Visit the job board site backend and create a new user
    Given User is on Login Page
    When User submits username and password
    Then User should be logged in
    When User clicks menu item Users
    And User clicks Add New button
    Then User fills user details and clicks Add New User button
    Then Verify user created
    And Close the browser
