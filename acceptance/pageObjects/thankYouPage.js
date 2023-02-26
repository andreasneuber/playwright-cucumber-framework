const { expect } = require('@playwright/test');
//const basePage = require("cypress/support/pageObjects/")

exports.ThankYouPage = class ThankYouPage {

    url = 'http://localhost:8000/index.php?action=thankYou';

    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
        this.page = page;
        this.thankYouMessageHeader = page.locator('h2');
    }

    async visit() {
        await this.page.goto(this.url);
    }

    async grabThankYouMessage() {
        return await this.thankYouMessageHeader.textContent();
    }
}
