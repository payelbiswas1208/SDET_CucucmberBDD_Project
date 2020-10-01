@CRM_Activity_1
Feature: Counting Dashlets

  Scenario: Count the number of the dashlets on home page
    Given User is on CRM Login Page
    When User submits Username and Password and logs in
    Then User prints the count and title of dashlets
    And Logs out and closes browser
    

