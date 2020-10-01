@JobBoard_Activity_3
Feature: Post a job using parameterization
 
  Scenario: : Post a job using details passed from the Feature file
     Given User is on Alchemy site
     When User navigates to Post a Job
     Then User fills job details "wavasi762@mrisemail.net","ETL specialist","Tokyo","Parameterization from featurefile","https://www.testurl.com","Company123" and submits
     When User goes to Jobs page
     Then User confirms Job listing "ETL specialist" shown
     And user quits the browser