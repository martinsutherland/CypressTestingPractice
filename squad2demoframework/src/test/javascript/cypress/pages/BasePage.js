/// <reference types="cypress" />

export class BasePage {
    checkHeader (text) {
        cy.get('h1').should('have.text', text)

        return this
    }

    checkHeaderTwo (text) {
        cy.get('h4').should('contain.text', text)

        return this
    }

    checkHeaderThree (text){
        cy.get('h2').should('contain.text', text)

        return this
    }

    checkArticleContains (text){
        cy.get('a').should('contain.text', text)
    }
}
