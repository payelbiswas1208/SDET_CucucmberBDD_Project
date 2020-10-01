@JobBoard_Activity_4
Feature: Post a job using parameterization 
 
  Scenario Outline: Post a job using details passed from example table
     Given User is on Alchemy site
     When User navigates to Post a Job
     Then User fills job details "<Email>","<JobTitle>","<Location>","<Description>","<Url>","<Company>" and submits
     When User goes to Jobs page
     Then User confirms Job listing "<JobTitle>" shown 
     And user logouts and close webbowser 

   Examples: 
      | Email                | JobTitle     | Location  | Description        |      Url                  | Company  |
      |jobpostEmail@ymail.com|Java Developer|    Texas  |this is with example|https://www.testwebsite.com|company323|

