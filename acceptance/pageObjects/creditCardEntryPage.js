const { expect } = require('@playwright/test');
//const basePage = require("cypress/support/pageObjects/")

exports.CreditCardEntryPage = class CreditCardEntryPage {

    url = 'http://localhost:8000/index.php?action=form3';

    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
        this.page = page;
        this.inputCardName = page.locator('#cname');
        this.inputCardNum = page.locator('#ccnum');
        this.inputExpiryDate = page.locator('#expdate');
        this.inputCvv = page.locator('#cvv');
        this.buttonPayNow = page.locator('#btnPaynow');
        this.creditCardInfoEntryForm = page.locator('#ccentry');
    }

    async visit() {
        await this.page.goto(this.url);
    }

    async enterCardInformation(cardname, ccnumber, expiryDate, cvv) {
        await this.inputCardName.fill(cardname);
        await this.inputCardNum.fill(ccnumber);
        await this.inputExpiryDate.fill(expiryDate);
        await this.inputCvv.fill(cvv);
    }

    async submitPayment() {
        await this.buttonPayNow.click();
    }

    async getCreditCardInfoEntryForm() {
        return this.creditCardInfoEntryForm;
    }
}
