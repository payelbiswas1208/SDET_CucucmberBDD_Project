@CRM_Activity_4
Feature: Creating a Product

  Scenario Outline: View Product info in CRM
    Given User goes to crm login page
    When User enters valid credentials to login
    Then User Navigate to All - Products
    And User retrieves information about the product "<ProductName>"
    And User logout and close

    Examples: 
      | ProductName    |
      |MagentaZuhause M|
  
  Scenario Outline: Add products in CRM
    Given User goes to crm login page
    When User enters valid credentials to login
    Then User Navigate to All - Products
    When User clicks on create product add details and save "<ProdName>","<PartNum>","<ProdPrice>"
    Then User verifies added products "<PartNum>"
    And User logout and close

     Examples: 
     |ProdName   |PartNum|ProdPrice|
     |ProductTest|CAWB   |234      |
      
      