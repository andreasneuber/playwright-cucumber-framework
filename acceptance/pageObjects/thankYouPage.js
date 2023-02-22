//const basePage = require("cypress/support/pageObjects/")

class thankYouPage {

    static url = "?action=thankYou";

    static visit() {
        cy.visit(this.url);
    }

    static grabThankYouMessage() {
        return cy.get('h2');
    }
}

export default thankYouPage