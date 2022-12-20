Feature: Top Menu Test
  As a user I can select any option on the top menu

  @sanity @regression
  Scenario: User should navigate desktops page successfully
    Given I am on home page
    When I should hover on desktops tab and click
    And I should select show all desktops
    Then I should verify the text "Desktops"

  @smoke @regression
  Scenario: User should navigate to laptops and notebooks page successfully
    Given I am on home page
    When I should hover laptops and notebooks tab and click
    And I should select show all laptops and notebooks
    Then I should verify text "Laptops & Notebooks"

  @regression
  Scenario: User should navigate to components page successfully
    Given I am on home page
    When I should hover on components tab and click
    And Select show all components
    Then Verify text "Components"