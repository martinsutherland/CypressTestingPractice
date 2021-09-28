Feature: 2i Testing automated test
  Description: Testing the cucumber selenium framework.

  Background: Set the device to be used for testing
    Given I set the device for testing

    Scenario: Navigating to the 2i website
    
    Given I navigate to 2i website
    When The header is "Every leader needs assurance"
    Then I select the dropdown menu
    And The header is "Software testing with 2i"

  

Scenario Outline: Search for <search> and <result>
    Given I navigate to the 2i homepage
    When I select the search button
    And I search for "<search>" 
    Then There should be "<result>" results found

    
    Examples:
    | search | result |
    | engineering | 30 | 
    | testing | 114 | 
     | news | 76 | 

Scenario: Find article on Scotsman site
    Given I select news
    When I see the article "Edinburgh software testing specialist lands multi-million-pound Scottish social security contract"
    And I click the link
    Then The header should be "Edinburgh software testing specialist lands multi-million-pound Scottish social security contract"
    Then Click the link again
    And The header contains "Edinburgh software testing specialist lands multi-million-pound Scottish social security contract"
    Then The author is "Scott Reid"

