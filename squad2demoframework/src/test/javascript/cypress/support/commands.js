// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
function setDevice() {
    let device = Cypress.env('device')
    switch (device) {
        case 'IPhoneXR':
            cy.viewport(414, 896)
            break
        case 'IPhone7':
            cy.viewport(375, 667)
            break
        case 'IPhone8+':
            cy.viewport(414, 736)
            break
        default:
            break
    }
}

Cypress.Commands.add("setDevice", () => {
    setDevice()
})

