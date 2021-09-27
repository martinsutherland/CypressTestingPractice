export class JsonParsing {
    getJsonFromFile (filename) {
        cy.fixture(filename).as('json')
    }
}