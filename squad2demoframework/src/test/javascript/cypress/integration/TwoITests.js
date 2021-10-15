describe("2i-Testing"), () => {
    beforeEach(() =>{
        cy.visit('https://2itesting.com/')
    })
}

it('should be able to check the h1', ()=>{
    cy.get('h1').should('have.text', 'Every leader needs assurance')
})

