import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import {APIBasePage} from '../../requests/APIBasePage'
import {JsonParsing} from '../../requests/JsonParsing'

const apiBasePage = new APIBasePage()
const jsonParsing = new JsonParsing()

Given('The {string} endpoint is available', (url) => {
    apiBasePage.restEndpointIsAvailable(url)
})


When ('I GET the endpoint with the parameter {string}', (parameter) => {
    apiBasePage.getEndpointWithParam(parameter)
})


Then ('The status code is {int}', (status) => {
    apiBasePage.checkStatusCode(200)
})

Then ('The response Json matches the Json file: {string}', (name) => {
    apiBasePage.getResponseBody()
    jsonParsing.getJsonFromFile(name)

    cy.get('@json').then(json => {
        cy.get('@APIBody').then((body) => {
            expect(json).to.eq(JSON.stringify(body))
        })
    }) 
})