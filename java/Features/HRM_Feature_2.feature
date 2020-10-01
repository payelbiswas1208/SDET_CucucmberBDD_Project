@HRM_Activity_2
Feature: Adding a candidate for recruitment

  Scenario: Add information about a candidate for recruitment
    Given User is on hrm login page
    When User login with credentials
    Then User navigates to Recruitment - Candidates menu
    When User clicks Add candidate and fills details "Payel","Bose","testuser@qatw.net" and save
    Then User verifies added candidate "Payel","Bose"
    And User logs out and close
