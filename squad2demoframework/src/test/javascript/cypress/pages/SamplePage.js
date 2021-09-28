/// <reference types="cypress" />

export class SamplePage {
    visitPage () {
        cy.visit('https://www.globalsqa.com/samplepagetest/')
    }

    fillOutForm(){
        cy.get('#g2599-name').type('Martin')
        cy.get('#g2599-email').type('martinsutherland1@gmail.com')
        cy.get('#g2599-website').type('https://github.com/martinsutherland1')
        cy.get('#g2599-experienceinyears').select('1-3')
        cy.get('#contact-form-2599 > form > div.grunion-field-wrap.grunion-field-checkbox-multiple-wrap > label:nth-child(2) > input').check()
        cy.get('#contact-form-2599 > form > div.grunion-field-wrap.grunion-field-checkbox-multiple-wrap > label:nth-child(4) > input').check()
        cy.get('#contact-form-2599 > form > div.grunion-field-wrap.grunion-field-radio-wrap > label:nth-child(4) > input').check()
    }

 
}