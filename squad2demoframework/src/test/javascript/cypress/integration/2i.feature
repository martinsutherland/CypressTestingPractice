Feature: 2i automated test
  Description: Testing the cucumber selenium framework.

  Background: Set the device to be used for testing
  Given I set the device for testing
    

Scenario: Navigating to the 2i website
    
    Given I navigate to 2i website
    When The header is "Every leader needs assurance"
    Then I select the dropdown menu
    And The header is "Software testing with 2i"