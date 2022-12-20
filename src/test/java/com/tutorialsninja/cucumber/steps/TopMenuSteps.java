package com.tutorialsninja.cucumber.steps;

import com.tutorialsninja.pages.TopMenuPage;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

public class TopMenuSteps {
    @Given("^I am on home page$")
    public void iAmOnHomePage() {
    }

    @When("^I should hover on desktops tab and click$")
    public void iShouldHoverOnDesktopsTabAndClick() {
        new TopMenuPage().mouseHoverToElementAndClickOnDesktop();
    }

    @And("^I should select show all desktops$")
    public void iShouldSelectShowAllDesktops() {
        new TopMenuPage().selectMenu("Show All Desktops");
    }

    @Then("^I should verify the text \"([^\"]*)\"$")
    public void iShouldVerifyTheText(String expMess) {
        Assert.assertEquals("Desktops message is not displayed", expMess, new TopMenuPage().getTextDesktop());
    }

    @When("^I should hover laptops and notebooks tab and click$")
    public void iShouldHoverLaptopsAndNotebooksTabAndClick() {
        new TopMenuPage().mouseHoverOnLaptopsAndNotebooksTab();
    }

    @And("^I should select show all laptops and notebooks$")
    public void iShouldSelectShowAllLaptopsAndNotebooks() {
        new TopMenuPage().selectMenu("Show All Laptops & Notebooks");
    }

    @Then("^I should verify text \"([^\"]*)\"$")
    public void iShouldVerifyText(String expText) {
        Assert.assertEquals("Laptops & Notebooks is not displayed", expText, new TopMenuPage().getLaptopsAndNotebooksText());
    }

    @When("^I should hover on components tab and click$")
    public void iShouldHoverOnComponentsTabAndClick() {
        new TopMenuPage().mouseHoverToComponentsTab();
    }

    @And("^Select show all components$")
    public void selectShowAllComponents() {
        new TopMenuPage().selectMenu("Show All Components");
    }

    @Then("^Verify text \"([^\"]*)\"$")
    public void verifyText(String expText) {
        Assert.assertEquals("Components text is not displayed", expText, new TopMenuPage().getComponentsText());
    }
}
