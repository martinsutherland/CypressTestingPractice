import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import {BasePage} from '../../pages/BasePage'
import {DuckDuckGoPage} from '../../pages/DuckDuckGoPage'
import { TwoI } from '../../pages/TwoI'

const basePage = new BasePage()
const duckDuckGoPage = new DuckDuckGoPage()
const twoI = new TwoI()


Given('I set the device for testing', ()=>{
    cy.setDevice()
})

Given ('I navigate to the 2i homepage', () => {
    twoI.visitPage()
})

When ('I select the search button', () => {
    duckDuckGoPage.clickSearch()
})

And ("I search for {string}", (text) =>{
    duckDuckGoPage.enterText(text)
})

Then ("There should be {string} results found", (header) => {
    basePage.checkHeaderTwo(header)
})

