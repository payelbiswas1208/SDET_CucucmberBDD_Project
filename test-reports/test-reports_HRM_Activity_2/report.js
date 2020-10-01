$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("HRM_Feature_2.feature");
formatter.feature({
  "line": 2,
  "name": "Adding a candidate for recruitment",
  "description": "",
  "id": "adding-a-candidate-for-recruitment",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@HRM_Activity_2"
    }
  ]
});
formatter.scenario({
  "line": 4,
  "name": "Add information about a candidate for recruitment",
  "description": "",
  "id": "adding-a-candidate-for-recruitment;add-information-about-a-candidate-for-recruitment",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "User is on hrm login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User login with credentials",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User navigates to Recruitment - Candidates menu",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "User clicks Add candidate and fills details \"Payel\",\"Bose\",\"testuser@qatw.net\" and save",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User verifies added candidate \"Payel\",\"Bose\"",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User logs out and close",
  "keyword": "And "
});
formatter.match({
  "location": "CandidateRecruitment.loginPage()"
});
formatter.result({
  "duration": 9950318400,
  "status": "passed"
});
formatter.match({
  "location": "CandidateRecruitment.goToHomepage()"
});
formatter.result({
  "duration": 1478370500,
  "status": "passed"
});
formatter.match({
  "location": "CandidateRecruitment.vacanyMenu()"
});
formatter.result({
  "duration": 1286526600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Payel",
      "offset": 45
    },
    {
      "val": "Bose",
      "offset": 53
    },
    {
      "val": "testuser@qatw.net",
      "offset": 60
    }
  ],
  "location": "CandidateRecruitment.addCandidate(String,String,String)"
});
formatter.result({
  "duration": 1598135700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Payel",
      "offset": 31
    },
    {
      "val": "Bose",
      "offset": 39
    }
  ],
  "location": "CandidateRecruitment.verifyCandidate(String,String)"
});
formatter.result({
  "duration": 1575487500,
  "status": "passed"
});
formatter.match({
  "location": "CandidateRecruitment.logout_Close()"
});
formatter.result({
  "duration": 2023141800,
  "status": "passed"
});
});