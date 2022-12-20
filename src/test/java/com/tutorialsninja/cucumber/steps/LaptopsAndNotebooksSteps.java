package com.tutorialsninja.cucumber.steps;

import com.tutorialsninja.pages.LaptopsAndNotebooksPage;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import org.junit.Assert;

public class LaptopsAndNotebooksSteps {
    @And("^I click on show laptops and notebooks$")
    public void iClickOnShowLaptopsAndNotebooks() {
        new LaptopsAndNotebooksPage().clickOnShowAllLaptopsAndNotebooks();
    }

    @And("^I select sort by price high to low$")
    public void iSelectSortByPriceHighToLow() {
        new LaptopsAndNotebooksPage().sortByPriceHighToLow();
    }

    @Then("^I should verify the product price will arrange in high to low order$")
    public void iShouldVerifyTheProductPriceWillArrangeInHighToLowOrder() {
        new LaptopsAndNotebooksPage().GetSortByHighToLowOrder();
    }

    @And("^I select product macbook$")
    public void iSelectProductMacbook() {
        new LaptopsAndNotebooksPage().clickOnMacBookTab();
    }

    @And("^I am verify text \"([^\"]*)\"$")
    public void iAmVerifyText(String arg0) {

    }

    @And("^I click on add cart button$")
    public void iClickOnAddCartButton() {
        new LaptopsAndNotebooksPage().clickOnAddToCartButton();
    }

    @And("^Verify the message Success: You have added MacBook to your shopping cart!$")
    public void verifyTheMessageSuccessYouHaveAddedMacBookToYourShoppingCart() {
        String expMess = "Success: You have added MacBook to your shopping cart!\n" + "×";
        Assert.assertEquals("Success message is not displayed", expMess, new LaptopsAndNotebooksPage().getSuccessTextFromLink());
    }

    @And("^I am clicking on shopping cart text that display in to success message$")
    public void iAmClickingOnShoppingCartTextThatDisplayInToSuccessMessage() {
        new LaptopsAndNotebooksPage().clickOnShoppingCart();
    }

    @And("^I can verify the text \"([^\"]*)\"$")
    public void iCanVerifyTheText(String expMess) {
        Assert.assertTrue("Shopping Cart is not displayed", new LaptopsAndNotebooksPage().getShoppingCartMessage().contains(expMess));
    }

    @And("^I am verify product name \"([^\"]*)\"$")
    public void iAmVerifyProductName(String expProductName) {
        Assert.assertEquals("MacBook is not displayed", expProductName, new LaptopsAndNotebooksPage().getVerifyProductMacbook());
    }

    @And("^I change the quantity$")
    public void iChangeTheQuantity() {
        new LaptopsAndNotebooksPage().changeQuantityTo2();
        new LaptopsAndNotebooksPage().sendTextChangeQuantityTo2("2");
    }

    @And("^I should click on update tab$")
    public void iShouldClickOnUpdateTab() {
        new LaptopsAndNotebooksPage().clickOnUpdateCart();
    }

    @And("^I am verifying message Success: You have modified your shopping cart!$")
    public void iAmVerifyingMessageSuccessYouHaveModifiedYourShoppingCart() {
        String expectedMessage = "Success: You have modified your shopping cart!\n" + "×";
        Assert.assertEquals("Success message is not displayed", expectedMessage, new LaptopsAndNotebooksPage().getSuccessModifiedCartMessage());
    }

    @And("^I can verify the total \"([^\"]*)\"$")
    public void iCanVerifyTheTotal(String expTotal) {
        Assert.assertEquals("Total is not displayed",expTotal,new LaptopsAndNotebooksPage().getVerifyTotal());
    }

    @And("^I click on checkout button$")
    public void iClickOnCheckoutButton() {
        new LaptopsAndNotebooksPage().clickOnCheckoutButton();
    }

    @And("^I Verify the text \"([^\"]*)\"$")
    public void iVerifyTheText(String expText) {
        Assert.assertEquals("Checkout is not displayed",expText,new LaptopsAndNotebooksPage().getCheckoutText());
    }

    @And("^Verify the text \"([^\"]*)\"$")
    public void verifyTheText(String expText) throws InterruptedException {
        Thread.sleep(5000);
        Assert.assertEquals("New customer text not displayed",expText,new LaptopsAndNotebooksPage().getNewCustomerText());
    }

    @And("^I click on guest checkout radio button$")
    public void iClickOnGuestCheckoutRadioButton() {
        new LaptopsAndNotebooksPage().clickOnGuestCheckoutRadioButton();
    }

    @And("^I click continue tab$")
    public void iClickContinueTab() {
        new LaptopsAndNotebooksPage().clickOnContinueTab();
    }

    @And("^I fill all mandatory field$")
    public void iFillAllMandatoryField() {
        new LaptopsAndNotebooksPage().enterName("Jack");
        new LaptopsAndNotebooksPage().enterLastName("Sparrow");
        new LaptopsAndNotebooksPage().enterEmail("jack1003@gmail.com");
        new LaptopsAndNotebooksPage().enterTelephone("07722567890");
        new LaptopsAndNotebooksPage().enterAddress("100,high road");
        new LaptopsAndNotebooksPage().enterCity("London");
        new LaptopsAndNotebooksPage().enterPostcode("E7 0NX");
        new LaptopsAndNotebooksPage().enterCountry("United Kingdom");
        new LaptopsAndNotebooksPage().enterZone("Greater London");
    }

    @And("^I click on continue button$")
    public void iClickOnContinueButton() {
        new LaptopsAndNotebooksPage().clickOnContinueButton();
    }

    @And("^I am adding comment about order into text area$")
    public void iAmAddingCommentAboutOrderIntoTextArea() {
        new LaptopsAndNotebooksPage().enterTextToTextArea("Please confirm delivery date");
    }

    @And("^I check the terms and conditions check box$")
    public void iCheckTheTermsAndConditionsCheckBox() throws InterruptedException {
        Thread.sleep(5000);
        new LaptopsAndNotebooksPage().clickOnTermsAndConditionsCheckbox();
    }

    @And("^I clicking on continue button$")
    public void iClickingOnContinueButton() {
        new LaptopsAndNotebooksPage().clickOnFinalContinueButton();
    }

    @Then("^I get Warning message$")
    public void iGetWarningMessage() {
        String expectedPaymentText = "Warning: Payment method required!\n"+"×";
        Assert.assertEquals("Warning message is not displayed",expectedPaymentText,new LaptopsAndNotebooksPage().getWarningPaymentMethodRequiredText());
    }
}
