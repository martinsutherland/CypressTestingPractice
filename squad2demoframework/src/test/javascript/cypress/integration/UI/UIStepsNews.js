import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import {BasePage} from '../../pages/BasePage'
import {DuckDuckGoPage} from '../../pages/DuckDuckGoPage'
import { TwoI } from '../../pages/TwoI'

const basePage = new BasePage()
const duckDuckGoPage = new DuckDuckGoPage()
const twoI = new TwoI()


Given ('I select news', () => {
    twoI.selectNews()
})

When ('I see the article {string}', (header) =>{
    basePage.checkHeaderThree(header)

})

And ('I click the link', () => {
    twoI.selectArticle()
})

Then ('The header should be {string}', (header) =>{
    basePage.checkHeader(header)

})

Then ('Click the link again', () => {
    twoI.openArticle()
})

And ('The header contains {string}', (header) => {
    basePage.checkHeader(header)
})

Then ('The author is {string}', (header) => {
    basePage.checkArticleContains(header)
})

