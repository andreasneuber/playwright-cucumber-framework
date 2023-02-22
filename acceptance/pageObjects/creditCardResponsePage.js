//const basePage = require("cypress/support/pageObjects/")

class creditCardResponsePage {

    static url = "?action=responsecc";

    static visit() {
        cy.visit(this.url);
    }

    static getAlertMessageBox() {
        return cy.get('.alert');
    }

    static grabResponseFromAlertBox() {
        return cy.get('.response').invoke('text');
    }

    static grabMoreInfoFromAlertBox() {
        return cy.get('.more-info').invoke('text');
    }
}

export default creditCardResponsePage