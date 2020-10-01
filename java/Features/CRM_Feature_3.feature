@CRM_Activity_3
Feature: Schedule a meeting and invite members

  Scenario Outline: To schedule a meeting and include at least three invitees. 
    Given User is on crm login page
    When User enters valid credentials and logs in
    Then User Navigate to Activities - Meetings - Schedule a meeting
    And User enters meeting details with invitees "<Invitee1>","<Invitee2>","<Invitee3>" and clicks Save
    Then User navigates View Meetings page and confirm creation of the meeting
    And user logsOut and closes browser

    Examples: 
      | Invitee1 | Invitee2 | Invitee3 |
      | Benjamin | Tanya    | Pavel    |
     