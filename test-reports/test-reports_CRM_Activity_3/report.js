$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("CRM_Feature_3.feature");
formatter.feature({
  "line": 2,
  "name": "Schedule a meeting and invite members",
  "description": "",
  "id": "schedule-a-meeting-and-invite-members",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@CRM_Activity_3"
    }
  ]
});
formatter.scenarioOutline({
  "line": 4,
  "name": "To schedule a meeting and include at least three invitees.�",
  "description": "",
  "id": "schedule-a-meeting-and-invite-members;to-schedule-a-meeting-and-include-at-least-three-invitees.�",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User is on crm login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User enters valid credentials and logs in",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User Navigate to Activities - Meetings - Schedule a meeting",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "User enters meeting details with invitees \"\u003cInvitee1\u003e\",\"\u003cInvitee2\u003e\",\"\u003cInvitee3\u003e\" and clicks Save",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User navigates View Meetings page and confirm creation of the meeting",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user logsOut and closes browser",
  "keyword": "And "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "schedule-a-meeting-and-invite-members;to-schedule-a-meeting-and-include-at-least-three-invitees.�;",
  "rows": [
    {
      "cells": [
        "Invitee1",
        "Invitee2",
        "Invitee3"
      ],
      "line": 13,
      "id": "schedule-a-meeting-and-invite-members;to-schedule-a-meeting-and-include-at-least-three-invitees.�;;1"
    },
    {
      "cells": [
        "Benjamin",
        "Tanya",
        "Pavel"
      ],
      "line": 14,
      "id": "schedule-a-meeting-and-invite-members;to-schedule-a-meeting-and-include-at-least-three-invitees.�;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 14,
  "name": "To schedule a meeting and include at least three invitees.�",
  "description": "",
  "id": "schedule-a-meeting-and-invite-members;to-schedule-a-meeting-and-include-at-least-three-invitees.�;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@CRM_Activity_3"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User is on crm login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User enters valid credentials and logs in",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User Navigate to Activities - Meetings - Schedule a meeting",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "User enters meeting details with invitees \"Benjamin\",\"Tanya\",\"Pavel\" and clicks Save",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User navigates View Meetings page and confirm creation of the meeting",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user logsOut and closes browser",
  "keyword": "And "
});
formatter.match({
  "location": "ScheduleMeeting.loginPageCrm()"
});
formatter.result({
  "duration": 10719726200,
  "status": "passed"
});
formatter.match({
  "location": "ScheduleMeeting.submitCredential()"
});
formatter.result({
  "duration": 3635527200,
  "status": "passed"
});
formatter.match({
  "location": "ScheduleMeeting.meetingNavigation()"
});
formatter.result({
  "duration": 3151594600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Benjamin",
      "offset": 43
    },
    {
      "val": "Tanya",
      "offset": 54
    },
    {
      "val": "Pavel",
      "offset": 62
    }
  ],
  "location": "ScheduleMeeting.scheduleMeeting(String,String,String)"
});
formatter.result({
  "duration": 8544024100,
  "status": "passed"
});
formatter.match({
  "location": "ScheduleMeeting.confirmMtng()"
});
formatter.result({
  "duration": 2548369000,
  "status": "passed"
});
formatter.match({
  "location": "ScheduleMeeting.userLogout()"
});
formatter.result({
  "duration": 2448226900,
  "status": "passed"
});
});