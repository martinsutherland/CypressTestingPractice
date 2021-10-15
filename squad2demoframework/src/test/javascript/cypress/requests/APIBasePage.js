/// <reference types="cypress" />

import { Assertion } from "chai"
import {JsonParsing} from './JsonParsing'
let endpointRoot

const jsonParsing = new JsonParsing()

export class APIBasePage {
    restEndpointIsAvailable (url) {
        let locator = url.replace(/ /, '.') + '.endpoint'

        let endpoint = Cypress.env(locator)

        expect(endpoint).not.be.undefined

        endpointRoot = endpoint
    }

    getEndpointWithParam (param) {
        cy.request(endpointRoot + '/' + param).then((resp) => {
            cy.wrap(resp).as('APIResponse');
        })
    }

    getResponseBody () {
        cy.get('@APIResponse').then(resp => {
            cy.wrap(resp.body).as('APIBody');
        }) 
    }

    checkStatusCode (code) {
        cy.get("@APIResponse").then((resp) => {
            cy.expect(resp.status).to.eq(code);
        })
    }

    postJson(json){
       cy.request('POST', endpointRoot, json).then((resp) => {
            cy.wrap(resp).as('APIResponse');
        })
        
    }

    deleteJson(parameter){
        cy.request('DELETE', endpointRoot + parameter).then((resp) => {
            cy.wrap(resp).as('APIResponse');
        })

    }

    patchJson(parameter, json){
        cy.request('PATCH', endpointRoot + parameter, json).then((resp) => {
             cy.wrap(resp).as('APIResponse');
         })
         
     }
}
