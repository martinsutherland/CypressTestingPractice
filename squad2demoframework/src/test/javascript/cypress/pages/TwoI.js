/// <reference types="cypress" />

export class TwoI {
    visitPage () {
        cy.visit('https://2itesting.com')
    }

    selectNews(){
        cy.get('#infiniteScroll > div:nth-child(2) > div > h2 > a').click()
    }

    selectArticle(){
        cy.get('#infiniteScroll > div:nth-child(1) > div.thumbnail > div > h2 > a').click()
    }

    openArticle(){
        cy.get('#mp-pusher > div.container > div > div.col-sm-9.column.main-content.content-col.sidebar-visible > div > div.mainContentItems.col-xs-12 > div > p:nth-child(10) > a[href="https://www.scotsman.com/business/edinburgh-software-testing-specialist-lands-multi-million-pound-scottish-social-security-contract-3391957"]').invoke('removeAttr', 'target').click()
       
    }

    

 
}

