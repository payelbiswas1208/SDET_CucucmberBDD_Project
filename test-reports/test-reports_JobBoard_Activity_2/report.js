$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("JobBoard_Feature_2.feature");
formatter.feature({
  "line": 2,
  "name": "Searching for Jobs using XPath",
  "description": "",
  "id": "searching-for-jobs-using-xpath",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@JobBoard_Activity_2"
    }
  ]
});
formatter.scenario({
  "line": 4,
  "name": "Searching for jobs and applying to them using XPath",
  "description": "",
  "id": "searching-for-jobs-using-xpath;searching-for-jobs-and-applying-to-them-using-xpath",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "User is on Alchemy Site",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User navigates to Jobs",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User finds a keyword search input field",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "User types a job keyword and clicks Search",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User changes Job Type",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User finds job and see details",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "User prints title of job",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User clicks Apply Job button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user quits browser",
  "keyword": "And "
});
formatter.match({
  "location": "SearchJobs.gotToSite()"
});
formatter.result({
  "duration": 9321765300,
  "status": "passed"
});
formatter.match({
  "location": "SearchJobs.jobsPage()"
});
formatter.result({
  "duration": 1064303800,
  "status": "passed"
});
formatter.match({
  "location": "SearchJobs.jobListPage()"
});
formatter.result({
  "duration": 44423200,
  "status": "passed"
});
formatter.match({
  "location": "SearchJobs.searchJob()"
});
formatter.result({
  "duration": 427110700,
  "status": "passed"
});
formatter.match({
  "location": "SearchJobs.changeJobType()"
});
formatter.result({
  "duration": 999004600,
  "status": "passed"
});
formatter.match({
  "location": "SearchJobs.jobDetails()"
});
formatter.result({
  "duration": 1162764600,
  "status": "passed"
});
formatter.match({
  "location": "SearchJobs.printJobTitle()"
});
formatter.result({
  "duration": 45428700,
  "status": "passed"
});
formatter.match({
  "location": "SearchJobs.clickApply()"
});
formatter.result({
  "duration": 259193700,
  "status": "passed"
});
formatter.match({
  "location": "SearchJobs.quitBrowser()"
});
formatter.result({
  "duration": 1503348600,
  "status": "passed"
});
});