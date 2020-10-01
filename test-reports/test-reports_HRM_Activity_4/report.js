$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("HRM_Feature_4.feature");
formatter.feature({
  "line": 2,
  "name": "Creating multiple vacancies",
  "description": "",
  "id": "creating-multiple-vacancies",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@HRM_Activity_4"
    }
  ]
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Creating multiple vacancies using data from examples",
  "description": "",
  "id": "creating-multiple-vacancies;creating-multiple-vacancies-using-data-from-examples",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User launches hrm login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User Logs in with Credentials",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User navigates to Recruitment - Vacancies",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "User clicks on Add Vacancy fills details \"\u003cVacancy1\u003e\",\"\u003cJob1\u003e\",\"\u003cManager1\u003e\" and save",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User clicks on Add Vacancy fills details \"\u003cVacancy2\u003e\",\"\u003cJob2\u003e\",\"\u003cManager2\u003e\" and save",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User clicks on Add Vacancy fills details \"\u003cVacancy3\u003e\",\"\u003cJob3\u003e\",\"\u003cManager3\u003e\" and save",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User verifies added vacancy for \"\u003cVacancy1\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "User verifies added vacancy for \"\u003cVacancy2\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "User verifies added vacancy for \"\u003cVacancy3\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "User then logout and close",
  "keyword": "And "
});
formatter.examples({
  "line": 16,
  "name": "",
  "description": "",
  "id": "creating-multiple-vacancies;creating-multiple-vacancies-using-data-from-examples;",
  "rows": [
    {
      "cells": [
        "Vacancy1",
        "Job1",
        "Manager1",
        "Vacancy2",
        "Job2",
        "Manager2",
        "Vacancy3",
        "Job3",
        "Manager3"
      ],
      "line": 17,
      "id": "creating-multiple-vacancies;creating-multiple-vacancies-using-data-from-examples;;1"
    },
    {
      "cells": [
        "vacancy payel1",
        "Rust Engineer",
        "orange hrm",
        "vacancy payel2",
        "DevOps Engineer",
        "Astin Bibber",
        "vacancy payel3",
        "Java Developer",
        "Demo User"
      ],
      "line": 18,
      "id": "creating-multiple-vacancies;creating-multiple-vacancies-using-data-from-examples;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 18,
  "name": "Creating multiple vacancies using data from examples",
  "description": "",
  "id": "creating-multiple-vacancies;creating-multiple-vacancies-using-data-from-examples;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@HRM_Activity_4"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User launches hrm login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User Logs in with Credentials",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User navigates to Recruitment - Vacancies",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "User clicks on Add Vacancy fills details \"vacancy payel1\",\"Rust Engineer\",\"orange hrm\" and save",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User clicks on Add Vacancy fills details \"vacancy payel2\",\"DevOps Engineer\",\"Astin Bibber\" and save",
  "matchedColumns": [
    3,
    4,
    5
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User clicks on Add Vacancy fills details \"vacancy payel3\",\"Java Developer\",\"Demo User\" and save",
  "matchedColumns": [
    6,
    7,
    8
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User verifies added vacancy for \"vacancy payel1\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "User verifies added vacancy for \"vacancy payel2\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "User verifies added vacancy for \"vacancy payel3\"",
  "matchedColumns": [
    6
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "User then logout and close",
  "keyword": "And "
});
formatter.match({
  "location": "CreateMultipleVacancies.loginPage()"
});
formatter.result({
  "duration": 10388798100,
  "status": "passed"
});
formatter.match({
  "location": "CreateMultipleVacancies.goToHomepage()"
});
formatter.result({
  "duration": 1721425100,
  "status": "passed"
});
formatter.match({
  "location": "CreateMultipleVacancies.vacanyMenu()"
});
formatter.result({
  "duration": 1880904100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "vacancy payel1",
      "offset": 42
    },
    {
      "val": "Rust Engineer",
      "offset": 59
    },
    {
      "val": "orange hrm",
      "offset": 75
    }
  ],
  "location": "CreateMultipleVacancies.fillVacancy(String,String,String)"
});
formatter.result({
  "duration": 2372933900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "vacancy payel2",
      "offset": 42
    },
    {
      "val": "DevOps Engineer",
      "offset": 59
    },
    {
      "val": "Astin Bibber",
      "offset": 77
    }
  ],
  "location": "CreateMultipleVacancies.fillVacancy(String,String,String)"
});
formatter.result({
  "duration": 2383641900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "vacancy payel3",
      "offset": 42
    },
    {
      "val": "Java Developer",
      "offset": 59
    },
    {
      "val": "Demo User",
      "offset": 76
    }
  ],
  "location": "CreateMultipleVacancies.fillVacancy(String,String,String)"
});
formatter.result({
  "duration": 2114179600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "vacancy payel1",
      "offset": 33
    }
  ],
  "location": "CreateMultipleVacancies.verify_vacancy(String)"
});
formatter.result({
  "duration": 1386825100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "vacancy payel2",
      "offset": 33
    }
  ],
  "location": "CreateMultipleVacancies.verify_vacancy(String)"
});
formatter.result({
  "duration": 1412293900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "vacancy payel3",
      "offset": 33
    }
  ],
  "location": "CreateMultipleVacancies.verify_vacancy(String)"
});
formatter.result({
  "duration": 1416658000,
  "status": "passed"
});
formatter.match({
  "location": "CreateMultipleVacancies.logout_Close()"
});
formatter.result({
  "duration": 2052960100,
  "status": "passed"
});
});