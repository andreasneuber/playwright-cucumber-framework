const { expect } = require('@playwright/test');
//const basePage = require("cypress/support/pageObjects/")

exports.CreditCardResponsePage = class CreditCardResponsePage {

    url = 'http://localhost:8000/index.php?action=responsecc';

    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
        this.page = page;
        this.alertMessageBox = page.locator('.alert');
        this.alertMessageBoxResponse = page.locator('.response');
        this.alertMessageBoxMoreInfo = page.locator('.more-info');
    }

    async visit() {
        await this.page.goto(this.url);
    }

    async isAlertMessageBoxDisplayed() {
        // works - but actually preferred approach is to return a false/true here, and do a isTrue assertion in test itself
        await expect(this.alertMessageBox).toBeVisible;
    }

    async grabResponseFromAlertBox() {
        return await this.alertMessageBoxResponse.textContent();
    }

    async grabMoreInfoFromAlertBox() {
        return await this.alertMessageBoxMoreInfo.textContent();
    }
}
