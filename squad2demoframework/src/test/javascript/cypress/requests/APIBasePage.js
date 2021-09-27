/// <reference types="cypress" />

import { Assertion } from "chai"

let endpointRoot

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
}
