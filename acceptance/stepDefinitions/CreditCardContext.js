const {Given, When, Then} = require('@cucumber/cucumber')
const { expect } = require("@playwright/test");
const { CreditCardEntryPage } = require('../pageObjects/creditCardEntryPage.js');
const { CreditCardResponsePage } = require('../pageObjects/creditCardResponsePage.js');

Given('User is on card card entry page', async function () {
    const creditCardEntryPage = new CreditCardEntryPage(page);
    await creditCardEntryPage.visit();
});
When(/^User (.*) enters card number (.*) together with expiry date (.*) and cvv (.*)$/,
    async function (name, ccnumber, expirydate, cvv) {
        const creditCardEntryPage = new CreditCardEntryPage(page);
        await creditCardEntryPage.enterCardInformation(name, ccnumber, expirydate, cvv);
        await creditCardEntryPage.submitPayment();
    });
Then(/^the page will respond with (.*) and provide as reason (.*)$/, async function (expectedResponse, expectedReason) {
    const creditCardResponsePage = new CreditCardResponsePage(page);
    await creditCardResponsePage.isAlertMessageBoxDisplayed();

    const actualResponse = await creditCardResponsePage.grabResponseFromAlertBox()
    await expect(actualResponse).toContain(expectedResponse);

    const actualReason = await creditCardResponsePage.grabMoreInfoFromAlertBox();
    await expect(actualReason).toContain(expectedReason);
});
