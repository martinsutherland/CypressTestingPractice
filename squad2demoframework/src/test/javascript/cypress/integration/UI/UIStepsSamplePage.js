import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import {BasePage} from '../../pages/BasePage'
import {SamplePage} from '../../pages/SamplePage'


const basePage = new BasePage()
const samplePage = new SamplePage()



Given ('I navigate to the sample site', () => {
    samplePage.visitPage()
})

When ('I fill out the form', () => {
    samplePage.fillOutForm()
})

// And ("I search for {string}", (text) =>{
//     duckDuckGoPage.enterText(text)
// })

// Then ("There should be {string} results found", (header) => {
//     basePage.checkHeaderTwo(header)
// })
