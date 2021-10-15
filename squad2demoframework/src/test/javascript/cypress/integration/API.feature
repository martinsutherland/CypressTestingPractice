
Feature: Automated API Test using restassured

	Scenario: GET employee data
		Given The "mg" endpoint is ready
		And I GET the endpoint that has the parameter "4"
		Then The status code is 200
		And The response Json matches the Json file: "MGResponseData.Json"
    	When I POST to the endpoint with JSON file: "MGRequestData.Json"
		Then I check if the data is there: "MGResponseDataPOST.Json" "89"
		And I then DELETE the endpoint with parameter "89"
		Then I PATCH parameter "4" with JSON file: "MGRequestDataPATCH.Json"
		Then I check updated parameter property "4" against JSON file: "MGRequestDataPATCH.Json"