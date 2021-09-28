import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import {BasePage} from '../../pages/BasePage'
import {SamplePage} from '../../pages/SamplePage'


const basePage = new BasePage()
const samplePage = new SamplePage()

Given('I set the device for testing', ()=>{
    cy.setDevice()
})

Given ('I navigate to the sample site', () => {
    samplePage.visitPage()
})

When ('I fill out the form', () => {
    samplePage.fillOutForm()
})

And ("I click the alert box", () =>{
   
})

Then ("The form is submitted", () => {
    
})
