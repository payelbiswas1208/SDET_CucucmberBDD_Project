@HRM_Activity_4
Feature: Creating multiple vacancies

  Scenario Outline: Creating multiple vacancies using data from examples
    Given User launches hrm login page
    When User Logs in with Credentials
    Then User navigates to Recruitment - Vacancies
    When User clicks on Add Vacancy fills details "<Vacancy1>","<Job1>","<Manager1>" and save
    When User clicks on Add Vacancy fills details "<Vacancy2>","<Job2>","<Manager2>" and save
    When User clicks on Add Vacancy fills details "<Vacancy3>","<Job3>","<Manager3>" and save
    Then User verifies added vacancy for "<Vacancy1>"
    Then User verifies added vacancy for "<Vacancy2>"
    Then User verifies added vacancy for "<Vacancy3>"
    And User then logout and close

    Examples: 
      |   Vacancy1     |     Job1      | Manager1    |  Vacancy2      |      Job2        |   Manager2   |   Vacancy3     |     Job3       | Manager3 |
      | vacancy payel1 | Rust Engineer | orange hrm  | vacancy payel2 |  DevOps Engineer | Astin Bibber | vacancy payel3 | Java Developer | Demo User|

     
