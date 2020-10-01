@JobBoard_Activity_2
Feature: Searching for Jobs using XPath

  Scenario: Searching for jobs and applying to them using XPath
    Given User is on Alchemy Site
    When User navigates to Jobs
    Then User finds a keyword search input field
    When User types a job keyword and clicks Search
    And User changes Job Type
    Then User finds job and see details
    And User prints title of job
    And User clicks Apply Job button
    And user quits browser