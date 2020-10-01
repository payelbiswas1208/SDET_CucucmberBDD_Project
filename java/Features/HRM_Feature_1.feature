@HRM_Activity_1
Feature: Creating a job vacancy

  Scenario: To create a job vacancy for “DevOps Engineer”  
    Given User is on login page
    When User logins with credentials
    Then User navigates to Recruitment - Vacancies menu
    When User clicks Add vacancy and fills details and save
    Then User verifies added vacancy
    And User will logout and close

 