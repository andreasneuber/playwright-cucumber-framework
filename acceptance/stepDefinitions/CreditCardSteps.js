import {Given, When, Then, Before} from "cypress-cucumber-preprocessor/steps";
import creditCardEntryPage from "../../support/pageObjects/creditCardEntryPage.js";
import creditCardResponsePage from "../../support/pageObjects/creditCardResponsePage.js";

Given(/^User is on card card entry page$/, function () {
    creditCardEntryPage.visit();
});
When(/^User (.*) enters card number (.*) together with expiry date (.*) and cvv (.*)$/,
    function (name, ccnumber, expirydate, cvv) {
        creditCardEntryPage.enterCardInformation(name, ccnumber, expirydate, cvv);
        creditCardEntryPage.submitPayment();
    });
Then(/^the page will respond with (.*) and provide as reason (.*)$/, function (expectedResponse, expectedReason) {
    creditCardResponsePage.getAlertMessageBox().should('be.visible');
    creditCardResponsePage.grabResponseFromAlertBox().should('contain', expectedResponse);
    creditCardResponsePage.grabMoreInfoFromAlertBox().should('contain', expectedReason);
});