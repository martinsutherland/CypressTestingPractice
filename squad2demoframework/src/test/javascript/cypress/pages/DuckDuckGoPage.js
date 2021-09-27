/// <reference types="cypress" />

export class DuckDuckGoPage {
    visitPage () {
        cy.visit('https://duckduckgo.com')
    }

    getSearchBox () {
        return cy.get('#search_form_input_homepage')
    }

    getSearchButton () {
        return cy.get('#search_button_homepage')
    }

    getFirstLink () {
        return cy.get('#r1-0 > div > h2 > a.result__a.js-result-title-link')
    }

    enterSearchText (text) {
        this.getSearchBox().type(text)

        return this
    }

    clickSearchButton () {
        this.getSearchButton().click()

        return this
    }

    clickFirstLink () {
        this.getFirstLink().click()

        return this
    }

    clickDropdown (){
        return cy.get('#barMainNav > div > nav > div > ul > li.dropdown.PartialsNavChildBlock > a[href="/services/"]').click()
    }

    clickSearch(){
        return cy.get('#barHeader > div.container > div > div.col-xs-2.mt-10.search-icon > div > div.site-search > span.search-lable.hidden-sm.hidden-xs').click()
    }

    enterText(text){
        return cy.get('#searchTrigger > form > div > input').type(text).type('{enter}')
    }
}

