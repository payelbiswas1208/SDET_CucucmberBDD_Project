$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("CRM_Feature_4.feature");
formatter.feature({
  "line": 2,
  "name": "Creating a Product",
  "description": "",
  "id": "creating-a-product",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@CRM_Activity_4"
    }
  ]
});
formatter.scenarioOutline({
  "line": 4,
  "name": "View Product info in CRM",
  "description": "",
  "id": "creating-a-product;view-product-info-in-crm",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User goes to crm login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User enters valid credentials to login",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User Navigate to All - Products",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "User retrieves information about the product \"\u003cProductName\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User logout and close",
  "keyword": "And "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "creating-a-product;view-product-info-in-crm;",
  "rows": [
    {
      "cells": [
        "ProductName"
      ],
      "line": 12,
      "id": "creating-a-product;view-product-info-in-crm;;1"
    },
    {
      "cells": [
        "MagentaZuhause M"
      ],
      "line": 13,
      "id": "creating-a-product;view-product-info-in-crm;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 13,
  "name": "View Product info in CRM",
  "description": "",
  "id": "creating-a-product;view-product-info-in-crm;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@CRM_Activity_4"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User goes to crm login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User enters valid credentials to login",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User Navigate to All - Products",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "User retrieves information about the product \"MagentaZuhause M\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User logout and close",
  "keyword": "And "
});
formatter.match({
  "location": "CreateProducts.loginCrm()"
});
formatter.result({
  "duration": 11065292600,
  "status": "passed"
});
formatter.match({
  "location": "CreateProducts.submitCredential()"
});
formatter.result({
  "duration": 2467205200,
  "status": "passed"
});
formatter.match({
  "location": "CreateProducts.meetingNavigation()"
});
formatter.result({
  "duration": 2077561200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "MagentaZuhause M",
      "offset": 46
    }
  ],
  "location": "CreateProducts.getProdInfo(String)"
});
formatter.result({
  "duration": 824648900,
  "status": "passed"
});
formatter.match({
  "location": "CreateProducts.logout_close()"
});
formatter.result({
  "duration": 2387224600,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 15,
  "name": "Add products in CRM",
  "description": "",
  "id": "creating-a-product;add-products-in-crm",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 16,
  "name": "User goes to crm login page",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "User enters valid credentials to login",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "User Navigate to All - Products",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "User clicks on create product add details and save \"\u003cProdName\u003e\",\"\u003cPartNum\u003e\",\"\u003cProdPrice\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "User verifies added products \"\u003cPartNum\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "User logout and close",
  "keyword": "And "
});
formatter.examples({
  "line": 23,
  "name": "",
  "description": "",
  "id": "creating-a-product;add-products-in-crm;",
  "rows": [
    {
      "cells": [
        "ProdName",
        "PartNum",
        "ProdPrice"
      ],
      "line": 24,
      "id": "creating-a-product;add-products-in-crm;;1"
    },
    {
      "cells": [
        "ProductTest",
        "CAWB",
        "234"
      ],
      "line": 25,
      "id": "creating-a-product;add-products-in-crm;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 25,
  "name": "Add products in CRM",
  "description": "",
  "id": "creating-a-product;add-products-in-crm;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@CRM_Activity_4"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "User goes to crm login page",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "User enters valid credentials to login",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "User Navigate to All - Products",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "User clicks on create product add details and save \"ProductTest\",\"CAWB\",\"234\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "User verifies added products \"CAWB\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "User logout and close",
  "keyword": "And "
});
formatter.match({
  "location": "CreateProducts.loginCrm()"
});
formatter.result({
  "duration": 8902345700,
  "status": "passed"
});
formatter.match({
  "location": "CreateProducts.submitCredential()"
});
formatter.result({
  "duration": 2376988100,
  "status": "passed"
});
formatter.match({
  "location": "CreateProducts.meetingNavigation()"
});
formatter.result({
  "duration": 1974062000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ProductTest",
      "offset": 52
    },
    {
      "val": "CAWB",
      "offset": 66
    },
    {
      "val": "234",
      "offset": 73
    }
  ],
  "location": "CreateProducts.createProducts(String,String,String)"
});
formatter.result({
  "duration": 2747487500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CAWB",
      "offset": 30
    }
  ],
  "location": "CreateProducts.verifyProd(String)"
});
formatter.result({
  "duration": 2005660000,
  "status": "passed"
});
formatter.match({
  "location": "CreateProducts.logout_close()"
});
formatter.result({
  "duration": 2357165300,
  "status": "passed"
});
});