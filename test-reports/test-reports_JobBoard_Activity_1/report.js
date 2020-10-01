$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("JobBoard_Feature_1.feature");
formatter.feature({
  "line": 2,
  "name": "Create New User in Job Board",
  "description": "",
  "id": "create-new-user-in-job-board",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@JobBoard_Activity_1"
    }
  ]
});
formatter.scenario({
  "line": 4,
  "name": "Visit the job board site backend and create a new user",
  "description": "",
  "id": "create-new-user-in-job-board;visit-the-job-board-site-backend-and-create-a-new-user",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "User is on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User submits username and password",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User should be logged in",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "User clicks menu item Users",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User clicks Add New button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User fills user details and clicks Add New User button",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Verify user created",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "CreateUserJobBoard.loginPage()"
});
formatter.result({
  "duration": 12071201000,
  "status": "passed"
});
formatter.match({
  "location": "CreateUserJobBoard.enterCredentials()"
});
formatter.result({
  "duration": 3009531700,
  "status": "passed"
});
formatter.match({
  "location": "CreateUserJobBoard.verifyLogin()"
});
formatter.result({
  "duration": 22929400,
  "status": "passed"
});
formatter.match({
  "location": "CreateUserJobBoard.clickUsersMenu()"
});
formatter.result({
  "duration": 1708609200,
  "status": "passed"
});
formatter.match({
  "location": "CreateUserJobBoard.clickAddNewBtn()"
});
formatter.result({
  "duration": 1440860200,
  "status": "passed"
});
formatter.match({
  "location": "CreateUserJobBoard.fillUserDetails()"
});
formatter.result({
  "duration": 583345700,
  "status": "passed"
});
formatter.match({
  "location": "CreateUserJobBoard.verifyUserCreated()"
});
formatter.result({
  "duration": 3153390400,
  "status": "passed"
});
formatter.match({
  "location": "CreateUserJobBoard.closeBrowser()"
});
formatter.result({
  "duration": 3268809800,
  "status": "passed"
});
});