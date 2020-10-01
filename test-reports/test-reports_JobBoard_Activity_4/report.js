$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("JobBoard_Feature_4.feature");
formatter.feature({
  "line": 2,
  "name": "Post a job using parameterization",
  "description": "",
  "id": "post-a-job-using-parameterization",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@JobBoard_Activity_4"
    }
  ]
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Post a job using details passed from example table",
  "description": "",
  "id": "post-a-job-using-parameterization;post-a-job-using-details-passed-from-example-table",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User is on Alchemy site",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User navigates to Post a Job",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User fills job details \"\u003cEmail\u003e\",\"\u003cJobTitle\u003e\",\"\u003cLocation\u003e\",\"\u003cDescription\u003e\",\"\u003cUrl\u003e\",\"\u003cCompany\u003e\" and submits",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "User goes to Jobs page",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User confirms Job listing \"\u003cJobTitle\u003e\" shown",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user logouts and close webbowser",
  "keyword": "And "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "post-a-job-using-parameterization;post-a-job-using-details-passed-from-example-table;",
  "rows": [
    {
      "cells": [
        "Email",
        "JobTitle",
        "Location",
        "Description",
        "Url",
        "Company"
      ],
      "line": 13,
      "id": "post-a-job-using-parameterization;post-a-job-using-details-passed-from-example-table;;1"
    },
    {
      "cells": [
        "jobpostEmail@ymail.com",
        "Java Developer",
        "Texas",
        "this is with example",
        "https://www.testwebsite.com",
        "company323"
      ],
      "line": 14,
      "id": "post-a-job-using-parameterization;post-a-job-using-details-passed-from-example-table;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 14,
  "name": "Post a job using details passed from example table",
  "description": "",
  "id": "post-a-job-using-parameterization;post-a-job-using-details-passed-from-example-table;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@JobBoard_Activity_4"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User is on Alchemy site",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User navigates to Post a Job",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User fills job details \"jobpostEmail@ymail.com\",\"Java Developer\",\"Texas\",\"this is with example\",\"https://www.testwebsite.com\",\"company323\" and submits",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "User goes to Jobs page",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User confirms Job listing \"Java Developer\" shown",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user logouts and close webbowser",
  "keyword": "And "
});
formatter.match({
  "location": "PostJob.launchNavigate()"
});
formatter.result({
  "duration": 9396009400,
  "status": "passed"
});
formatter.match({
  "location": "PostJob.postJobpage()"
});
formatter.result({
  "duration": 2102547500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "jobpostEmail@ymail.com",
      "offset": 24
    },
    {
      "val": "Java Developer",
      "offset": 49
    },
    {
      "val": "Texas",
      "offset": 66
    },
    {
      "val": "this is with example",
      "offset": 74
    },
    {
      "val": "https://www.testwebsite.com",
      "offset": 97
    },
    {
      "val": "company323",
      "offset": 127
    }
  ],
  "location": "PostJob.submitDetails(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 2859362800,
  "status": "passed"
});
formatter.match({
  "location": "PostJob.jobPage()"
});
formatter.result({
  "duration": 871731300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Java Developer",
      "offset": 27
    }
  ],
  "location": "PostJob.confirmJob(String)"
});
formatter.result({
  "duration": 997874100,
  "status": "passed"
});
formatter.match({
  "location": "PostJob.close_browser()"
});
formatter.result({
  "duration": 2464597400,
  "status": "passed"
});
});