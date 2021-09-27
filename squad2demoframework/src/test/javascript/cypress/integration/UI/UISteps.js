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

Given ('I navigate to 2i website', () => {
    twoI.visitPage()
})


When ('The header is {string}', (header) => {
    basePage.checkHeader(header)
})

Then ('I select the dropdown menu', () => {
    duckDuckGoPage.clickDropdown()
})

And ('The header is {string}', (header) => {
    basePage.checkHeader(header)
})



