package com.tutorialsninja.cucumber.steps;

import com.tutorialsninja.pages.DesktopPage;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import gherkin.lexer.De;
import org.junit.Assert;
import sun.security.krb5.internal.crypto.Des;

public class DesktopsSteps {
    @When("^I mouse hover on desktops tab and click$")
    public void iMouseHoverOnDesktopsTabAndClick() {
        new DesktopPage().mouseHoverOnDesktop();
    }

    @And("^I click on show all desktops$")
    public void iClickOnShowAllDesktops() {
        new DesktopPage().clickOnShowAllDesktop();
    }

    @And("^I select sort by position Name: Z to A$")
    public void iSelectSortByPositionNameZToA() {
        new DesktopPage().sortByPositionNameZtoA("Name (Z - A)");
    }

    @Then("^I should verify the product arrange in descending order$")
    public void iShouldVerifyTheProductArrangeInDescendingOrder() {
        new DesktopPage().getProductsArrangeInDescendingOrderText();
    }

    @When("^I click on currency link$")
    public void iClickOnCurrencyLink() {
        new DesktopPage().clickOnCurrencyLink();
    }

    @And("^I select sort by position Name: A to Z$")
    public void iSelectSortByPositionNameAToZ() {
        new DesktopPage().sortByPositionNameAtoZ("Name (A - Z)");
    }

    @And("^I select product \"([^\"]*)\"$")
    public void iSelectProduct(String arg0) {
        new DesktopPage().clickOnProductHPLP3065();

    }

    @And("^I verify text \"([^\"]*)\"$")
    public void iVerifyText(String expProductText) {
        Assert.assertEquals("HP LP3065 is not displayed", expProductText, new DesktopPage().getHPLP3065TextFromList());
    }

    @And("^I select the delivery date$")
    public void iSelectTheDeliveryDate() {
        new DesktopPage().clickOnDeliveryDate();
    }

    @And("^I enter quantity$")
    public void iEnterQuantity() {
        new DesktopPage().enterQuantity1("1");
    }

    @And("^I click on add to cart button$")
    public void iClickOnAddToCartButton() {
        new DesktopPage().clickOnAdToCart();
    }

    @And("^I verify the message \"([^\"]*)\"$")
    public void iVerifyTheMessage(String expMess) throws InterruptedException {
        Thread.sleep(5000);
        String expectedMessage = "Success: You have added HP LP3065 to your shopping cart!\n" +
                "×";
        Assert.assertEquals("Success message is not displayed", expectedMessage, new DesktopPage().verifyProductAddedToShoppingCartText());
    }

    @And("^I click on shopping cart text in to success message$")
    public void iClickOnShoppingCartTextInToSuccessMessage() {
        new DesktopPage().clickOnShoppingCart();
    }

    @And("^I verify the text \"([^\"]*)\"$")
    public void iVerifyTheText(String expText) throws InterruptedException {
        Thread.sleep(5000);
        Assert.assertTrue("Shopping cart text is not displayed",new DesktopPage().verifyTextShoppingCart().contains(expText));
    }

    @And("^I verify the product name \"([^\"]*)\"$")
    public void iVerifyTheProductName(String expProductName) {
        Assert.assertEquals("HP LP3065 is not displayed",expProductName,new DesktopPage().verifyTextProductNameHPLP3065());
    }

    @And("^I verify the delivery date \"([^\"]*)\"$")
    public void iVerifyTheDeliveryDate(String expDeliveryDate) throws InterruptedException {
        Thread.sleep(5000);
        Assert.assertTrue("Delivery Date: 2023-11-30 is not displayed",new DesktopPage().verifyDeliveryDate().contains(expDeliveryDate));
    }

    @And("^I verify the model \"([^\"]*)\"$")
    public void iVerifyTheModel(String expText) {
        Assert.assertEquals("Product 21 is not displayed",expText,new DesktopPage().verifyTheModelProduct21Text());
    }

    @Then("^I verify the total \"([^\"]*)\"$")
    public void iVerifyTheTotal(String expTotal) {
        Assert.assertEquals("£74.73 is not displayed",expTotal,new DesktopPage().verifyTheTotalPriceText());
    }
}
