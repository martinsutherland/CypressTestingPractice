Feature: Sample Page automated test
  Description: Testing the cucumber selenium framework.

  Background: Set the device to be used for testing
  Given I set the device for testing
    

Scenario: Fill out form on sample website
    Given I navigate to the sample site
    When I fill out the form
    And I click the alert box
    Then The form is submitted
