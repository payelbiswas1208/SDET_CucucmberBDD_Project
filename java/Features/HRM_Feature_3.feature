@HRM_Activity_3
Feature: Add multiple employees 

  Scenario Outline: Add multiple employees using an the Examples table
    Given User opens hrm login page
    When User logs in with credentials
    Then User navigates to PIM menu
    When User adds employee details "<FirstName1>","<Lastname1>","<Username1>" and saves
    When User adds employee details "<FirstName2>","<Lastname2>","<Username2>" and saves
    When User adds employee details "<FirstName3>","<Lastname3>","<Username3>" and saves
    Then User verifies added employees
    And user logsOut and quits browser
    

    Examples: 
      | FirstName1| Lastname1| Username1   |FirstName2  |  Lastname2 | Username2 |FirstName3 | Lastname3 | Username3|
      | Sayan     |     Sen  | sayansen    | Eric       |  Sedlemr   | ericsed   | Payel     | Sen       | payelsen |
