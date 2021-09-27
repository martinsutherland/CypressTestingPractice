Feature: Automated API Test using restassured

	Scenario: GET employee data
		Given The "reqres" endpoint is available
		And I GET the endpoint with the parameter "2"
		Then The status code is 200
		And The response Json matches the Json file: "ReqresResponseData.Json"
		