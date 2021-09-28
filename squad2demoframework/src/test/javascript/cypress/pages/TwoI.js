/// <reference types="cypress" />
import 'cypress-wait-until';

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

    acceptCookies(){

        cy.get('body').then((body) => {
            if (body.find('iframe[title="Iframe title"]').length > 0) {
                cy.get('iframe[title="Iframe title"]').then($iframe =>{
                    var $body =  $iframe.contents().find('body');
                    cy.wrap($body).find('button[title="I Accept"]').click() 
                })
            }
        })
    }
    
        
        
    


 
}

