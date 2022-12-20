Feature: Desktop Test
  As a user I can sort product and add product to shopping cart successfully

  @sanity @regression
  Scenario: User should able to arrange the product in alphabetical order
    Given I am on home page
    When I mouse hover on desktops tab and click
    And I click on show all desktops
    And I select sort by position Name: Z to A
    Then I should verify the product arrange in descending order

  @smoke @regression
  Scenario: User can add product in shopping cart successfully
    Given I am on home page
    When I click on currency link
    And I mouse hover on desktops tab and click
    And I click on show all desktops
    And I select sort by position Name: A to Z
    And I select product "HP LP3065"
    And I verify text "HP LP3065"
    And I select the delivery date
    And I enter quantity
    And I click on add to cart button
    And I verify the message "Success: You have added HP LP3065 to your shopping cart!"
    And I click on shopping cart text in to success message
    And I verify the text "Shopping Cart"
    And I verify the product name "HP LP3065"
    And I verify the delivery date "2023-11-30"
    And I verify the model "Product 21"
    Then I verify the total "£74.73"