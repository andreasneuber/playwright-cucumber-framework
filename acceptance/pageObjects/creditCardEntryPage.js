const { expect } = require('@playwright/test');
//const basePage = require("cypress/support/pageObjects/")

exports.CreditCardEntryPage = class CreditCardEntryPage {

    url = 'http://localhost:8000/index.php?action=form3';

    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
        this.page = page;
        // this.inputUsername = page.locator('input[name="user"]');
        // this.inputPassword = page.locator('input[name="pw"]');
        // this.buttonLogin = page.locator('#btnLogin');
        // this.titleHeader = page.locator('h2');
    }

    async visit() {
        await this.page.goto(this.url);
    }

    async enterCardInformation(cardname, ccnumber, expiryDate, cvv) {
        cy.get('#cname').clear().type(cardname);
        cy.get('#ccnum').clear().type(ccnumber);
        cy.get('#expdate').clear().type(expiryDate);
        cy.get('#cvv').clear().type(cvv);
    }

    async submitPayment() {
        cy.get('#btnPaynow').click();
    }

    async getCreditCardInfoEntryForm() {
        return cy.get('#ccentry');
    }
}
