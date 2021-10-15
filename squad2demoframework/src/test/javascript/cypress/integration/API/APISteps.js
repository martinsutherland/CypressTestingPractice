import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import {APIBasePage} from '../../requests/APIBasePage'
import {JsonParsing} from '../../requests/JsonParsing'

const apiBasePage = new APIBasePage()
const jsonParsing = new JsonParsing()

Given('The {string} endpoint is ready', (url) => {
    apiBasePage.restEndpointIsAvailable(url)
})


And ('I GET the endpoint that has the parameter {string}', (parameter) => {
    apiBasePage.getEndpointWithParam(parameter)
})


Then ('The status code is {int}', (status) => {
    apiBasePage.checkStatusCode(200)
})

And ('The response Json matches the Json file: {string}', (name) => {
    apiBasePage.getResponseBody()
    jsonParsing.getJsonFromFile(name)

    cy.get('@json').then(json => {
        cy.get('@APIBody').then((body) => {
            expect(json).to.eq(JSON.stringify(body))
        })
    }) 
})

When ('I POST to the endpoint with JSON file: {string}', (fileName) => {
        jsonParsing.getJsonFromFile(fileName)
    cy.get('@json').then(json => {
        apiBasePage.postJson(JSON.parse(json))
        
    }) 
})

Then ('I check if the data is there: {string} {string}', (fileName, parameter) => {
    apiBasePage.getEndpointWithParam(parameter)

    apiBasePage.getResponseBody()
    jsonParsing.getJsonFromFile(fileName)

    cy.get('@json').then(json => {
        cy.get('@APIBody').then((body) => {
            expect(json).to.eq(JSON.stringify(body))
        })
    })
})

And ('I then DELETE the endpoint with parameter {string}', (parameter) => {
    apiBasePage.deleteJson(parameter)
})

Then ('I PATCH parameter {string} with JSON file: {string}', (parameter, fileName) => {
    jsonParsing.getJsonFromFile(fileName)
    cy.get('@json').then(json => {
    apiBasePage.patchJson(parameter, JSON.parse(json))
    
}) 


Then ('I check updated parameter property {string} against JSON file: {string}', (parameter, fileName) => {
    apiBasePage.getEndpointWithParam(parameter)
    apiBasePage.getResponseBody()
    jsonParsing.getJsonFromFile(fileName)

    cy.get('@json').then(json => {
        cy.get('@APIBody').then((body) => {
        expect(body.reviewerName).to.eq("Martin")
        })
    }) 
})
        
})      


    
   
   
  