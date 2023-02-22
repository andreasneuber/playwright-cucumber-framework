//const basePage = require("cypress/support/pageObjects/")

class creditCardEntryPage {

    static url = "?action=form3";

    static visit() {
        cy.visit(this.url);
    }

    static enterCardInformation(cardname, ccnumber, expiryDate, cvv) {
        cy.get('#cname').clear().type(cardname);
        cy.get('#ccnum').clear().type(ccnumber);
        cy.get('#expdate').clear().type(expiryDate);
        cy.get('#cvv').clear().type(cvv);
    }

    static submitPayment() {
        cy.get('#btnPaynow').click();
    }

    static getCreditCardInfoEntryForm() {
        return cy.get('#ccentry');
    }
}

export default creditCardEntryPage