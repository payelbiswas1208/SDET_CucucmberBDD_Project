$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("CRM_Feature_2.feature");
formatter.feature({
  "line": 2,
  "name": "Create leads using parameterization",
  "description": "",
  "id": "create-leads-using-parameterization",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@CRM_Activity_2"
    }
  ]
});
formatter.scenario({
  "line": 4,
  "name": "Add multiple lead accounts using values passed from�Feature file�",
  "description": "",
  "id": "create-leads-using-parameterization;add-multiple-lead-accounts-using-values-passed-from�feature-file�",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "User is on crm Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User enters Username and Password and logs in",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User Navigate to Sales - Leads - Create Lead",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "User fills details \"Payel\",\"Biswas\",\"9163140094\",\"testemail@gmail.com\" and clicks Save",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User views Leads \"testemail@gmail.com\" on page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User Navigate to Sales - Leads - Create Lead",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "User fills details \"Pavel\",\"Rudra\",\"9163140176\",\"bojewew332@debsmail.com\" and clicks Save",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User views Leads \"bojewew332@debsmail.com\" on page",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "User Navigate to Sales - Leads - Create Lead",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "User fills details \"G\",\"Bose\",\"9748097650\",\"testuser@qatw.net\" and clicks Save",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User views Leads \"testuser@qatw.net\" on page",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "Logs out and close browser",
  "keyword": "And "
});
formatter.match({
  "location": "CreateLeads.loginCrm()"
});
formatter.result({
  "duration": 10554176000,
  "status": "passed"
});
formatter.match({
  "location": "CreateLeads.submitCredential()"
});
formatter.result({
  "duration": 2585739300,
  "status": "passed"
});
formatter.match({
  "location": "CreateLeads.leadNavigation()"
});
formatter.result({
  "duration": 2592914400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Payel",
      "offset": 20
    },
    {
      "val": "Biswas",
      "offset": 28
    },
    {
      "val": "9163140094",
      "offset": 37
    },
    {
      "val": "testemail@gmail.com",
      "offset": 50
    }
  ],
  "location": "CreateLeads.createLeads(String,String,String,String)"
});
formatter.result({
  "duration": 4312554500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "testemail@gmail.com",
      "offset": 18
    }
  ],
  "location": "CreateLeads.viewLead(String)"
});
formatter.result({
  "duration": 2565870800,
  "status": "passed"
});
formatter.match({
  "location": "CreateLeads.leadNavigation()"
});
formatter.result({
  "duration": 102033300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Pavel",
      "offset": 20
    },
    {
      "val": "Rudra",
      "offset": 28
    },
    {
      "val": "9163140176",
      "offset": 36
    },
    {
      "val": "bojewew332@debsmail.com",
      "offset": 49
    }
  ],
  "location": "CreateLeads.createLeads(String,String,String,String)"
});
formatter.result({
  "duration": 3804034100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "bojewew332@debsmail.com",
      "offset": 18
    }
  ],
  "location": "CreateLeads.viewLead(String)"
});
formatter.result({
  "duration": 2078328300,
  "status": "passed"
});
formatter.match({
  "location": "CreateLeads.leadNavigation()"
});
formatter.result({
  "duration": 100980200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "G",
      "offset": 20
    },
    {
      "val": "Bose",
      "offset": 24
    },
    {
      "val": "9748097650",
      "offset": 31
    },
    {
      "val": "testuser@qatw.net",
      "offset": 44
    }
  ],
  "location": "CreateLeads.createLeads(String,String,String,String)"
});
formatter.result({
  "duration": 3443745100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "testuser@qatw.net",
      "offset": 18
    }
  ],
  "location": "CreateLeads.viewLead(String)"
});
formatter.result({
  "duration": 1924026600,
  "status": "passed"
});
formatter.match({
  "location": "CreateLeads.logOut()"
});
formatter.result({
  "duration": 2419646800,
  "status": "passed"
});
});