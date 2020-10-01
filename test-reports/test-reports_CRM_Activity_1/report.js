$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("CRM_Feature_1.feature");
formatter.feature({
  "line": 2,
  "name": "Counting Dashlets",
  "description": "",
  "id": "counting-dashlets",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@CRM_Activity_1"
    }
  ]
});
formatter.scenario({
  "line": 4,
  "name": "Count the number of the dashlets on home page",
  "description": "",
  "id": "counting-dashlets;count-the-number-of-the-dashlets-on-home-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "User is on CRM Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User submits Username and Password and logs in",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User prints the count and title of dashlets",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Logs out and closes browser",
  "keyword": "And "
});
formatter.match({
  "location": "DashletCount.loginCRM()"
});
formatter.result({
  "duration": 10422067000,
  "status": "passed"
});
formatter.match({
  "location": "DashletCount.enterCredential()"
});
formatter.result({
  "duration": 3633433300,
  "status": "passed"
});
formatter.match({
  "location": "DashletCount.dashletcount()"
});
formatter.result({
  "duration": 193597900,
  "status": "passed"
});
formatter.match({
  "location": "DashletCount.logout()"
});
formatter.result({
  "duration": 2595764000,
  "status": "passed"
});
});