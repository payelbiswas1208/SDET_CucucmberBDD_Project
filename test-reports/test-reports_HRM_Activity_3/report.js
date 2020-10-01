$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("HRM_Feature_3.feature");
formatter.feature({
  "line": 2,
  "name": "Add multiple employees�",
  "description": "",
  "id": "add-multiple-employees�",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@HRM_Activity_3"
    }
  ]
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Add multiple employees using an the Examples table",
  "description": "",
  "id": "add-multiple-employees�;add-multiple-employees-using-an-the-examples-table",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User opens hrm login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User logs in with credentials",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User navigates to PIM menu",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "User adds employee details \"\u003cFirstName1\u003e\",\"\u003cLastname1\u003e\",\"\u003cUsername1\u003e\" and saves",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User adds employee details \"\u003cFirstName2\u003e\",\"\u003cLastname2\u003e\",\"\u003cUsername2\u003e\" and saves",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User adds employee details \"\u003cFirstName3\u003e\",\"\u003cLastname3\u003e\",\"\u003cUsername3\u003e\" and saves",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User verifies added employees",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user logsOut and quits browser",
  "keyword": "And "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "add-multiple-employees�;add-multiple-employees-using-an-the-examples-table;",
  "rows": [
    {
      "cells": [
        "FirstName1",
        "Lastname1",
        "Username1",
        "FirstName2",
        "Lastname2",
        "Username2",
        "FirstName3",
        "Lastname3",
        "Username3"
      ],
      "line": 16,
      "id": "add-multiple-employees�;add-multiple-employees-using-an-the-examples-table;;1"
    },
    {
      "cells": [
        "Sayan",
        "Sen",
        "sayansen",
        "Eric",
        "Sedlemr",
        "ericsed",
        "Payel",
        "Sen",
        "payelsen"
      ],
      "line": 17,
      "id": "add-multiple-employees�;add-multiple-employees-using-an-the-examples-table;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 17,
  "name": "Add multiple employees using an the Examples table",
  "description": "",
  "id": "add-multiple-employees�;add-multiple-employees-using-an-the-examples-table;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@HRM_Activity_3"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User opens hrm login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User logs in with credentials",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User navigates to PIM menu",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "User adds employee details \"Sayan\",\"Sen\",\"sayansen\" and saves",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User adds employee details \"Eric\",\"Sedlemr\",\"ericsed\" and saves",
  "matchedColumns": [
    3,
    4,
    5
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User adds employee details \"Payel\",\"Sen\",\"payelsen\" and saves",
  "matchedColumns": [
    6,
    7,
    8
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User verifies added employees",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user logsOut and quits browser",
  "keyword": "And "
});
formatter.match({
  "location": "EmployeesAdd.login_Page()"
});
formatter.result({
  "duration": 9179527700,
  "status": "passed"
});
formatter.match({
  "location": "EmployeesAdd.homepage()"
});
formatter.result({
  "duration": 1499178800,
  "status": "passed"
});
formatter.match({
  "location": "EmployeesAdd.pimMenu()"
});
formatter.result({
  "duration": 1340373000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sayan",
      "offset": 28
    },
    {
      "val": "Sen",
      "offset": 36
    },
    {
      "val": "sayansen",
      "offset": 42
    }
  ],
  "location": "EmployeesAdd.addEmp(String,String,String)"
});
formatter.result({
  "duration": 2282662300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Eric",
      "offset": 28
    },
    {
      "val": "Sedlemr",
      "offset": 35
    },
    {
      "val": "ericsed",
      "offset": 45
    }
  ],
  "location": "EmployeesAdd.addEmp(String,String,String)"
});
formatter.result({
  "duration": 2197310400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Payel",
      "offset": 28
    },
    {
      "val": "Sen",
      "offset": 36
    },
    {
      "val": "payelsen",
      "offset": 42
    }
  ],
  "location": "EmployeesAdd.addEmp(String,String,String)"
});
formatter.result({
  "duration": 2283420000,
  "status": "passed"
});
formatter.match({
  "location": "EmployeesAdd.verifyEmpAdd()"
});
formatter.result({
  "duration": 2984245900,
  "status": "passed"
});
formatter.match({
  "location": "EmployeesAdd.logout_Close()"
});
formatter.result({
  "duration": 1897065700,
  "status": "passed"
});
});