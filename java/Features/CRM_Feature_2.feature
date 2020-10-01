@CRM_Activity_2
Feature: Create leads using parameterization

  Scenario: Add multiple lead accounts using values passed from Feature file 
    Given User is on crm Login Page
    When User enters Username and Password and logs in
    Then User Navigate to Sales - Leads - Create Lead
    And User fills details "Payel","Biswas","9163140094","testemail@gmail.com" and clicks Save
    Then User views Leads "testemail@gmail.com" on page
    Then User Navigate to Sales - Leads - Create Lead
    And User fills details "Pavel","Rudra","9163140176","bojewew332@debsmail.com" and clicks Save
    Then User views Leads "bojewew332@debsmail.com" on page   
    Then User Navigate to Sales - Leads - Create Lead
    And User fills details "G","Bose","9748097650","testuser@qatw.net" and clicks Save
    Then User views Leads "testuser@qatw.net" on page
    And Logs out and close browser