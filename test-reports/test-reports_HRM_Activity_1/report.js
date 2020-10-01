$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("HRM_Feature_1.feature");
formatter.feature({
  "line": 2,
  "name": "Creating a job vacancy",
  "description": "",
  "id": "creating-a-job-vacancy",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@HRM_Activity_1"
    }
  ]
});
formatter.scenario({
  "line": 4,
  "name": "To create a job vacancy for �DevOps Engineer��",
  "description": "",
  "id": "creating-a-job-vacancy;to-create-a-job-vacancy-for-�devops-engineer��",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "User is on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User logins with credentials",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User navigates to Recruitment - Vacancies menu",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "User clicks Add vacancy and fills details and save",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User verifies added vacancy",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User will logout and close",
  "keyword": "And "
});
formatter.match({
  "location": "CreateJobVacancy.loginPage()"
});
formatter.result({
  "duration": 9270544600,
  "status": "passed"
});
formatter.match({
  "location": "CreateJobVacancy.goToHomepage()"
});
formatter.result({
  "duration": 1800614700,
  "status": "passed"
});
formatter.match({
  "location": "CreateJobVacancy.vacanyMenu()"
});
formatter.result({
  "duration": 2013752100,
  "status": "passed"
});
formatter.match({
  "location": "CreateJobVacancy.fillVacancy()"
});
formatter.result({
  "duration": 1629321500,
  "status": "passed"
});
formatter.match({
  "location": "CreateJobVacancy.verifyVacancy()"
});
formatter.result({
  "duration": 2077944800,
  "status": "passed"
});
formatter.match({
  "location": "CreateJobVacancy.logout_Close()"
});
formatter.result({
  "duration": 1941640000,
  "status": "passed"
});
});