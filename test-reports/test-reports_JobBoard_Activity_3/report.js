$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("JobBoard_Feature_3.feature");
formatter.feature({
  "line": 2,
  "name": "Post a job using parameterization",
  "description": "",
  "id": "post-a-job-using-parameterization",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@JobBoard_Activity_3"
    }
  ]
});
formatter.scenario({
  "line": 4,
  "name": ": Post a job using details passed from the Feature file",
  "description": "",
  "id": "post-a-job-using-parameterization;:-post-a-job-using-details-passed-from-the-feature-file",
  "type": "scenario",
  "keyword": "Scenario"
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
  "name": "User fills job details \"wavasi762@mrisemail.net\",\"ETL specialist\",\"Tokyo\",\"Parameterization from featurefile\",\"https://www.testurl.com\",\"Company123\" and submits",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "User goes to Jobs page",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User confirms Job listing \"ETL specialist\" shown",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user quits the browser",
  "keyword": "And "
});
formatter.match({
  "location": "PostJob.launchNavigate()"
});
formatter.result({
  "duration": 9272542400,
  "status": "passed"
});
formatter.match({
  "location": "PostJob.postJobpage()"
});
formatter.result({
  "duration": 2695180500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "wavasi762@mrisemail.net",
      "offset": 24
    },
    {
      "val": "ETL specialist",
      "offset": 50
    },
    {
      "val": "Tokyo",
      "offset": 67
    },
    {
      "val": "Parameterization from featurefile",
      "offset": 75
    },
    {
      "val": "https://www.testurl.com",
      "offset": 111
    },
    {
      "val": "Company123",
      "offset": 137
    }
  ],
  "location": "PostJob.submitDetails(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 2912964800,
  "status": "passed"
});
formatter.match({
  "location": "PostJob.jobPage()"
});
formatter.result({
  "duration": 1001529800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ETL specialist",
      "offset": 27
    }
  ],
  "location": "PostJob.confirmJob(String)"
});
formatter.result({
  "duration": 1023696600,
  "status": "passed"
});
formatter.match({
  "location": "PostJob.quitBrowser()"
});
formatter.result({
  "duration": 1573241900,
  "status": "passed"
});
});