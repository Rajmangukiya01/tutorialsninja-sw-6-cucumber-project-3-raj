$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("desktopspage.feature");
formatter.feature({
  "line": 1,
  "name": "Desktop Test",
  "description": "As a user I can sort product and add product to shopping cart successfully",
  "id": "desktop-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 5983996999,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "User should able to arrange the product in alphabetical order",
  "description": "",
  "id": "desktop-test;user-should-able-to-arrange-the-product-in-alphabetical-order",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@sanity"
    },
    {
      "line": 4,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I mouse hover on desktops tab and click",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I click on show all desktops",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I select sort by position Name: Z to A",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I should verify the product arrange in descending order",
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 165160700,
  "status": "passed"
});
formatter.match({
  "location": "DesktopsSteps.iMouseHoverOnDesktopsTabAndClick()"
});
formatter.result({
  "duration": 254924501,
  "status": "passed"
});
formatter.match({
  "location": "DesktopsSteps.iClickOnShowAllDesktops()"
});
formatter.result({
  "duration": 849213001,
  "status": "passed"
});
formatter.match({
  "location": "DesktopsSteps.iSelectSortByPositionNameZToA()"
});
formatter.result({
  "duration": 627284199,
  "status": "passed"
});
formatter.match({
  "location": "DesktopsSteps.iShouldVerifyTheProductArrangeInDescendingOrder()"
});
formatter.result({
  "duration": 429480799,
  "status": "passed"
});
formatter.after({
  "duration": 87600,
  "status": "passed"
});
formatter.before({
  "duration": 3240492500,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "User can add product in shopping cart successfully",
  "description": "",
  "id": "desktop-test;user-can-add-product-in-shopping-cart-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 12,
      "name": "@smoke"
    },
    {
      "line": 12,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "I click on currency link",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I mouse hover on desktops tab and click",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click on show all desktops",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I select sort by position Name: A to Z",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I select product \"HP LP3065\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I verify text \"HP LP3065\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I select the delivery date",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I enter quantity",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I click on add to cart button",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I verify the message \"Success: You have added HP LP3065 to your shopping cart!\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I click on shopping cart text in to success message",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I verify the text \"Shopping Cart\"",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I verify the product name \"HP LP3065\"",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I verify the delivery date \"2023-11-30\"",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I verify the model \"Product 21\"",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I verify the total \"£74.73\"",
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 52900,
  "status": "passed"
});
formatter.match({
  "location": "DesktopsSteps.iClickOnCurrencyLink()"
});
formatter.result({
  "duration": 766055300,
  "status": "passed"
});
formatter.match({
  "location": "DesktopsSteps.iMouseHoverOnDesktopsTabAndClick()"
});
formatter.result({
  "duration": 523105699,
  "status": "passed"
});
formatter.match({
  "location": "DesktopsSteps.iClickOnShowAllDesktops()"
});
formatter.result({
  "duration": 873470700,
  "status": "passed"
});
formatter.match({
  "location": "DesktopsSteps.iSelectSortByPositionNameAToZ()"
});
formatter.result({
  "duration": 641719301,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "HP LP3065",
      "offset": 18
    }
  ],
  "location": "DesktopsSteps.iSelectProduct(String)"
});
formatter.result({
  "duration": 1719270500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "HP LP3065",
      "offset": 15
    }
  ],
  "location": "DesktopsSteps.iVerifyText(String)"
});
formatter.result({
  "duration": 236307000,
  "status": "passed"
});
formatter.match({
  "location": "DesktopsSteps.iSelectTheDeliveryDate()"
});
formatter.result({
  "duration": 14342903300,
  "status": "passed"
});
formatter.match({
  "location": "DesktopsSteps.iEnterQuantity()"
});
formatter.result({
  "duration": 177989500,
  "status": "passed"
});
formatter.match({
  "location": "DesktopsSteps.iClickOnAddToCartButton()"
});
formatter.result({
  "duration": 106849200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Success: You have added HP LP3065 to your shopping cart!",
      "offset": 22
    }
  ],
  "location": "DesktopsSteps.iVerifyTheMessage(String)"
});
formatter.result({
  "duration": 5052365000,
  "status": "passed"
});
formatter.match({
  "location": "DesktopsSteps.iClickOnShoppingCartTextInToSuccessMessage()"
});
formatter.result({
  "duration": 591769600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Shopping Cart",
      "offset": 19
    }
  ],
  "location": "DesktopsSteps.iVerifyTheText(String)"
});
formatter.result({
  "duration": 5067385500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "HP LP3065",
      "offset": 27
    }
  ],
  "location": "DesktopsSteps.iVerifyTheProductName(String)"
});
formatter.result({
  "duration": 50404700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2023-11-30",
      "offset": 28
    }
  ],
  "location": "DesktopsSteps.iVerifyTheDeliveryDate(String)"
});
formatter.result({
  "duration": 5062278400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Product 21",
      "offset": 20
    }
  ],
  "location": "DesktopsSteps.iVerifyTheModel(String)"
});
formatter.result({
  "duration": 46488601,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "£74.73",
      "offset": 20
    }
  ],
  "location": "DesktopsSteps.iVerifyTheTotal(String)"
});
formatter.result({
  "duration": 42443100,
  "status": "passed"
});
formatter.after({
  "duration": 92400,
  "status": "passed"
});
formatter.uri("laptopsandnotebookspage.feature");
formatter.feature({
  "line": 1,
  "name": "Laptops and notebooks Test",
  "description": "As a user I can sort product by price and place order successfully",
  "id": "laptops-and-notebooks-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 3527185500,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Verify that products price displayed high to low successfully",
  "description": "",
  "id": "laptops-and-notebooks-test;verify-that-products-price-displayed-high-to-low-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@sanity"
    },
    {
      "line": 4,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I should hover laptops and notebooks tab and click",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I click on show laptops and notebooks",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I select sort by price high to low",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I should verify the product price will arrange in high to low order",
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 53600,
  "status": "passed"
});
formatter.match({
  "location": "TopMenuSteps.iShouldHoverLaptopsAndNotebooksTabAndClick()"
});
formatter.result({
  "duration": 547285400,
  "status": "passed"
});
formatter.match({
  "location": "LaptopsAndNotebooksSteps.iClickOnShowLaptopsAndNotebooks()"
});
formatter.result({
  "duration": 614197100,
  "status": "passed"
});
formatter.match({
  "location": "LaptopsAndNotebooksSteps.iSelectSortByPriceHighToLow()"
});
formatter.result({
  "duration": 492341000,
  "status": "passed"
});
formatter.match({
  "location": "LaptopsAndNotebooksSteps.iShouldVerifyTheProductPriceWillArrangeInHighToLowOrder()"
});
formatter.result({
  "duration": 813077500,
  "status": "passed"
});
formatter.after({
  "duration": 57300,
  "status": "passed"
});
formatter.before({
  "duration": 3415224500,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "User can place order successfully",
  "description": "",
  "id": "laptops-and-notebooks-test;user-can-place-order-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 12,
      "name": "@smoke"
    },
    {
      "line": 12,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "I click on currency link",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I should hover laptops and notebooks tab and click",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click on show laptops and notebooks",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I select sort by price high to low",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I select product macbook",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I am verify text \"MacBook\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I click on add cart button",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "Verify the message Success: You have added MacBook to your shopping cart!",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I am clicking on shopping cart text that display in to success message",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I can verify the text \"Shopping Cart\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I am verify product name \"MacBook\"",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I change the quantity",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I should click on update tab",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I am verifying message Success: You have modified your shopping cart!",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I can verify the total \"£737.45\"",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I click on checkout button",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I Verify the text \"Checkout\"",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "Verify the text \"New Customer\"",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I click on guest checkout radio button",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I click continue tab",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I fill all mandatory field",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I click on continue button",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I am adding comment about order into text area",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I check the terms and conditions check box",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I clicking on continue button",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I get Warning message",
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 51301,
  "status": "passed"
});
formatter.match({
  "location": "DesktopsSteps.iClickOnCurrencyLink()"
});
formatter.result({
  "duration": 677343899,
  "status": "passed"
});
formatter.match({
  "location": "TopMenuSteps.iShouldHoverLaptopsAndNotebooksTabAndClick()"
});
formatter.result({
  "duration": 232799600,
  "status": "passed"
});
formatter.match({
  "location": "LaptopsAndNotebooksSteps.iClickOnShowLaptopsAndNotebooks()"
});
formatter.result({
  "duration": 623639400,
  "status": "passed"
});
formatter.match({
  "location": "LaptopsAndNotebooksSteps.iSelectSortByPriceHighToLow()"
});
formatter.result({
  "duration": 528357300,
  "status": "passed"
});
formatter.match({
  "location": "LaptopsAndNotebooksSteps.iSelectProductMacbook()"
});
formatter.result({
  "duration": 1400315601,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "MacBook",
      "offset": 18
    }
  ],
  "location": "LaptopsAndNotebooksSteps.iAmVerifyText(String)"
});
formatter.result({
  "duration": 178500,
  "status": "passed"
});
formatter.match({
  "location": "LaptopsAndNotebooksSteps.iClickOnAddCartButton()"
});
formatter.result({
  "duration": 177532900,
  "status": "passed"
});
formatter.match({
  "location": "LaptopsAndNotebooksSteps.verifyTheMessageSuccessYouHaveAddedMacBookToYourShoppingCart()"
});
formatter.result({
  "duration": 236504200,
  "status": "passed"
});
formatter.match({
  "location": "LaptopsAndNotebooksSteps.iAmClickingOnShoppingCartTextThatDisplayInToSuccessMessage()"
});
formatter.result({
  "duration": 452132500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Shopping Cart",
      "offset": 23
    }
  ],
  "location": "LaptopsAndNotebooksSteps.iCanVerifyTheText(String)"
});
formatter.result({
  "duration": 41444201,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "MacBook",
      "offset": 26
    }
  ],
  "location": "LaptopsAndNotebooksSteps.iAmVerifyProductName(String)"
});
formatter.result({
  "duration": 69577399,
  "status": "passed"
});
formatter.match({
  "location": "LaptopsAndNotebooksSteps.iChangeTheQuantity()"
});
formatter.result({
  "duration": 198006799,
  "status": "passed"
});
formatter.match({
  "location": "LaptopsAndNotebooksSteps.iShouldClickOnUpdateTab()"
});
formatter.result({
  "duration": 622326700,
  "status": "passed"
});
formatter.match({
  "location": "LaptopsAndNotebooksSteps.iAmVerifyingMessageSuccessYouHaveModifiedYourShoppingCart()"
});
formatter.result({
  "duration": 65998400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "£737.45",
      "offset": 24
    }
  ],
  "location": "LaptopsAndNotebooksSteps.iCanVerifyTheTotal(String)"
});
formatter.result({
  "duration": 47933001,
  "status": "passed"
});
formatter.match({
  "location": "LaptopsAndNotebooksSteps.iClickOnCheckoutButton()"
});
formatter.result({
  "duration": 466246199,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Checkout",
      "offset": 19
    }
  ],
  "location": "LaptopsAndNotebooksSteps.iVerifyTheText(String)"
});
formatter.result({
  "duration": 57338601,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "New Customer",
      "offset": 17
    }
  ],
  "location": "LaptopsAndNotebooksSteps.verifyTheText(String)"
});
formatter.result({
  "duration": 5062018799,
  "status": "passed"
});
formatter.match({
  "location": "LaptopsAndNotebooksSteps.iClickOnGuestCheckoutRadioButton()"
});
formatter.result({
  "duration": 81305600,
  "status": "passed"
});
formatter.match({
  "location": "LaptopsAndNotebooksSteps.iClickContinueTab()"
});
formatter.result({
  "duration": 94195800,
  "status": "passed"
});
formatter.match({
  "location": "LaptopsAndNotebooksSteps.iFillAllMandatoryField()"
});
formatter.result({
  "duration": 1870256400,
  "status": "passed"
});
formatter.match({
  "location": "LaptopsAndNotebooksSteps.iClickOnContinueButton()"
});
formatter.result({
  "duration": 134287699,
  "status": "passed"
});
formatter.match({
  "location": "LaptopsAndNotebooksSteps.iAmAddingCommentAboutOrderIntoTextArea()"
});
formatter.result({
  "duration": 590323399,
  "status": "passed"
});
formatter.match({
  "location": "LaptopsAndNotebooksSteps.iCheckTheTermsAndConditionsCheckBox()"
});
formatter.result({
  "duration": 5110877300,
  "status": "passed"
});
formatter.match({
  "location": "LaptopsAndNotebooksSteps.iClickingOnContinueButton()"
});
formatter.result({
  "duration": 114680000,
  "status": "passed"
});
formatter.match({
  "location": "LaptopsAndNotebooksSteps.iGetWarningMessage()"
});
formatter.result({
  "duration": 233019800,
  "status": "passed"
});
formatter.after({
  "duration": 63100,
  "status": "passed"
});
formatter.uri("myaccountpage.feature");
formatter.feature({
  "line": 1,
  "name": "My Account Test",
  "description": "As a user I can register account and login and logout account successfully",
  "id": "my-account-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4324736501,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "User should navigate to register page successfully",
  "description": "",
  "id": "my-account-test;user-should-navigate-to-register-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@sanity"
    },
    {
      "line": 4,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on my account link",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I select register tab",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I verify register account text \"Register Account\"",
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 34900,
  "status": "passed"
});
formatter.match({
  "location": "MyAccountSteps.iClickOnMyAccountLink()"
});
formatter.result({
  "duration": 91282200,
  "status": "passed"
});
formatter.match({
  "location": "MyAccountSteps.iSelectRegisterTab()"
});
formatter.result({
  "duration": 21067177900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Register Account",
      "offset": 32
    }
  ],
  "location": "MyAccountSteps.iVerifyRegisterAccountText(String)"
});
formatter.result({
  "duration": 52680100,
  "status": "passed"
});
formatter.after({
  "duration": 33400,
  "status": "passed"
});
formatter.before({
  "duration": 3193197300,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "User should navigate to login page successfully",
  "description": "",
  "id": "my-account-test;user-should-navigate-to-login-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 11,
      "name": "@sanity"
    },
    {
      "line": 11,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I click on my account link",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I select login tab",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I verify login account text \"Returning Customer\"",
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 44100,
  "status": "passed"
});
formatter.match({
  "location": "MyAccountSteps.iClickOnMyAccountLink()"
});
formatter.result({
  "duration": 84756400,
  "status": "passed"
});
formatter.match({
  "location": "MyAccountSteps.iSelectLoginTab()"
});
formatter.result({
  "duration": 403566701,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Returning Customer",
      "offset": 29
    }
  ],
  "location": "MyAccountSteps.iVerifyLoginAccountText(String)"
});
formatter.result({
  "duration": 47346500,
  "status": "passed"
});
formatter.after({
  "duration": 72100,
  "status": "passed"
});
formatter.before({
  "duration": 3250216500,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "User can register account successfully",
  "description": "",
  "id": "my-account-test;user-can-register-account-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 18,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "I click on my account link",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "I select register tab",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I enter first name \"Leo\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I enter last name \"Messi\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I enter email \"messi102@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I enter telephone \"07717223344\"",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I enter password \"Test123\"",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I enter confirm password \"Test123\"",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I select subscribe radio button yes",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I click on privacy policy check box",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I click continue button",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I verify message \"Your Account Has Been Created!\"",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I am clicking on continue button",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I am clicking on my account link",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I click on logout",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I am verifying the text \"Account Logout\"",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I am clicking continue",
  "keyword": "And "
});
formatter.match({
  "location": "TopMenuSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 55499,
  "status": "passed"
});
formatter.match({
  "location": "MyAccountSteps.iClickOnMyAccountLink()"
});
formatter.result({
  "duration": 97482601,
  "status": "passed"
});
formatter.match({
  "location": "MyAccountSteps.iSelectRegisterTab()"
});
formatter.result({
  "duration": 20856375000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Leo",
      "offset": 20
    }
  ],
  "location": "MyAccountSteps.iEnterFirstName(String)"
});
formatter.result({
  "duration": 117983000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Messi",
      "offset": 19
    }
  ],
  "location": "MyAccountSteps.iEnterLastName(String)"
});
formatter.result({
  "duration": 123329000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "messi102@gmail.com",
      "offset": 15
    }
  ],
  "location": "MyAccountSteps.iEnterEmail(String)"
});
formatter.result({
  "duration": 136514900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "07717223344",
      "offset": 19
    }
  ],
  "location": "MyAccountSteps.iEnterTelephone(String)"
});
formatter.result({
  "duration": 125439700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test123",
      "offset": 18
    }
  ],
  "location": "MyAccountSteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 118235900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test123",
      "offset": 26
    }
  ],
  "location": "MyAccountSteps.iEnterConfirmPassword(String)"
});
formatter.result({
  "duration": 165543600,
  "status": "passed"
});
formatter.match({
  "location": "MyAccountSteps.iSelectSubscribeRadioButtonYes()"
});
formatter.result({
  "duration": 125960300,
  "status": "passed"
});
formatter.match({
  "location": "MyAccountSteps.iClickOnPrivacyPolicyCheckBox()"
});
formatter.result({
  "duration": 109049399,
  "status": "passed"
});
formatter.match({
  "location": "MyAccountSteps.iClickContinueButton()"
});
formatter.result({
  "duration": 794659200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Your Account Has Been Created!",
      "offset": 18
    }
  ],
  "location": "MyAccountSteps.iVerifyMessage(String)"
});
formatter.result({
  "duration": 60788700,
  "status": "passed"
});
formatter.match({
  "location": "MyAccountSteps.iAmClickingOnContinueButton()"
});
formatter.result({
  "duration": 549610100,
  "status": "passed"
});
formatter.match({
  "location": "MyAccountSteps.iAmClickingOnMyAccountLink()"
});
formatter.result({
  "duration": 117252100,
  "status": "passed"
});
formatter.match({
  "location": "MyAccountSteps.iClickOnLogout()"
});
formatter.result({
  "duration": 771712000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Account Logout",
      "offset": 25
    }
  ],
  "location": "MyAccountSteps.iAmVerifyingTheText(String)"
});
formatter.result({
  "duration": 63774000,
  "status": "passed"
});
formatter.match({
  "location": "MyAccountSteps.iAmClickingContinue()"
});
formatter.result({
  "duration": 517500000,
  "status": "passed"
});
formatter.after({
  "duration": 36100,
  "status": "passed"
});
formatter.before({
  "duration": 3451573199,
  "status": "passed"
});
formatter.scenario({
  "line": 40,
  "name": "User should login and logout successfully",
  "description": "",
  "id": "my-account-test;user-should-login-and-logout-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 39,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 41,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 42,
  "name": "I click on my account link",
  "keyword": "When "
});
formatter.step({
  "line": 43,
  "name": "I select login tab",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "I enter email address \"messi101@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "I enter password field \"Test123\"",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "I clicking on login button",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "I will verify the text \"My Account\"",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "I click on my account",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "Select logout",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "verify text \"Account Logout\"",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "click continue",
  "keyword": "And "
});
formatter.match({
  "location": "TopMenuSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 53200,
  "status": "passed"
});
formatter.match({
  "location": "MyAccountSteps.iClickOnMyAccountLink()"
});
formatter.result({
  "duration": 126655500,
  "status": "passed"
});
formatter.match({
  "location": "MyAccountSteps.iSelectLoginTab()"
});
formatter.result({
  "duration": 443639800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "messi101@gmail.com",
      "offset": 23
    }
  ],
  "location": "MyAccountSteps.iEnterEmailAddress(String)"
});
formatter.result({
  "duration": 133108700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test123",
      "offset": 24
    }
  ],
  "location": "MyAccountSteps.iEnterPasswordField(String)"
});
formatter.result({
  "duration": 115880299,
  "status": "passed"
});
formatter.match({
  "location": "MyAccountSteps.iClickingOnLoginButton()"
});
formatter.result({
  "duration": 578436000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "My Account",
      "offset": 24
    }
  ],
  "location": "MyAccountSteps.iWillVerifyTheText(String)"
});
formatter.result({
  "duration": 66104299,
  "status": "passed"
});
formatter.match({
  "location": "MyAccountSteps.iClickOnMyAccount()"
});
formatter.result({
  "duration": 113788600,
  "status": "passed"
});
formatter.match({
  "location": "MyAccountSteps.selectLogout()"
});
formatter.result({
  "duration": 672195200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Account Logout",
      "offset": 13
    }
  ],
  "location": "MyAccountSteps.verifyText(String)"
});
formatter.result({
  "duration": 65836500,
  "status": "passed"
});
formatter.match({
  "location": "MyAccountSteps.clickContinue()"
});
formatter.result({
  "duration": 695191000,
  "status": "passed"
});
formatter.after({
  "duration": 63500,
  "status": "passed"
});
formatter.uri("topmenupage.feature");
formatter.feature({
  "line": 1,
  "name": "Top Menu Test",
  "description": "As a user I can select any option on the top menu",
  "id": "top-menu-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 3155754800,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "User should navigate desktops page successfully",
  "description": "",
  "id": "top-menu-test;user-should-navigate-desktops-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@sanity"
    },
    {
      "line": 4,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I should hover on desktops tab and click",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I should select show all desktops",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I should verify the text \"Desktops\"",
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 100299,
  "status": "passed"
});
formatter.match({
  "location": "TopMenuSteps.iShouldHoverOnDesktopsTabAndClick()"
});
formatter.result({
  "duration": 1042467701,
  "status": "passed"
});
formatter.match({
  "location": "TopMenuSteps.iShouldSelectShowAllDesktops()"
});
formatter.result({
  "duration": 847366899,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Desktops",
      "offset": 26
    }
  ],
  "location": "TopMenuSteps.iShouldVerifyTheText(String)"
});
formatter.result({
  "duration": 36762999,
  "status": "passed"
});
formatter.after({
  "duration": 33899,
  "status": "passed"
});
formatter.before({
  "duration": 3536615200,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "User should navigate to laptops and notebooks page successfully",
  "description": "",
  "id": "top-menu-test;user-should-navigate-to-laptops-and-notebooks-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 11,
      "name": "@smoke"
    },
    {
      "line": 11,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I should hover laptops and notebooks tab and click",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I should select show all laptops and notebooks",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I should verify text \"Laptops \u0026 Notebooks\"",
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 59501,
  "status": "passed"
});
formatter.match({
  "location": "TopMenuSteps.iShouldHoverLaptopsAndNotebooksTabAndClick()"
});
formatter.result({
  "duration": 1068689100,
  "status": "passed"
});
formatter.match({
  "location": "TopMenuSteps.iShouldSelectShowAllLaptopsAndNotebooks()"
});
formatter.result({
  "duration": 672896299,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Laptops \u0026 Notebooks",
      "offset": 22
    }
  ],
  "location": "TopMenuSteps.iShouldVerifyText(String)"
});
formatter.result({
  "duration": 75319000,
  "status": "passed"
});
formatter.after({
  "duration": 51199,
  "status": "passed"
});
formatter.before({
  "duration": 3677705300,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "User should navigate to components page successfully",
  "description": "",
  "id": "top-menu-test;user-should-navigate-to-components-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 18,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "I should hover on components tab and click",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "Select show all components",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "Verify text \"Components\"",
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 31700,
  "status": "passed"
});
formatter.match({
  "location": "TopMenuSteps.iShouldHoverOnComponentsTabAndClick()"
});
formatter.result({
  "duration": 991393000,
  "status": "passed"
});
formatter.match({
  "location": "TopMenuSteps.selectShowAllComponents()"
});
formatter.result({
  "duration": 568688601,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Components",
      "offset": 13
    }
  ],
  "location": "TopMenuSteps.verifyText(String)"
});
formatter.result({
  "duration": 36193900,
  "status": "passed"
});
formatter.after({
  "duration": 75000,
  "status": "passed"
});
});