import {Given, When, Then, Before} from "cypress-cucumber-preprocessor/steps";
import provideYourDetailsPage from "../../support/pageObjects/provideYourDetailsPage.js";
import thankYouPage from "../../support/pageObjects/thankYouPage.js";

Given(/^I navigate to Information about yourself page$/, function () {
    provideYourDetailsPage.visit();
});
When(/^I provide the following details$/, function (datatable) {
    provideYourDetailsPage.provideFirstname(datatable.raw()[0][1]);
    provideYourDetailsPage.provideLastName(datatable.raw()[1][1]);
    provideYourDetailsPage.provideStreet(datatable.raw()[2][1]);
    provideYourDetailsPage.provideCity(datatable.raw()[3][1]);
    provideYourDetailsPage.provideZip(datatable.raw()[4][1]);
    provideYourDetailsPage.provideState(datatable.raw()[5][1]);
    provideYourDetailsPage.provideCountry(datatable.raw()[6][1]);
    provideYourDetailsPage.provideMobilePhoneNumber(datatable.raw()[7][1]);
    provideYourDetailsPage.provideHomePhoneNumber(datatable.raw()[8][1]);
    provideYourDetailsPage.provideEmail(datatable.raw()[9][1]);

    provideYourDetailsPage.clickSubmitYourInformation();
});
Then(/^I will see message "([^"]*)"$/, function (expectedMessage) {

    thankYouPage.grabThankYouMessage().should('have.text', expectedMessage);

    // salesPage.grabYearMonthHeader().should('have.text', year + ' Month');
    //
    //
    // String actualMessage = thankYouPage.grabThankYouMessage();
    // Assert.assertEquals(actualMessage, expectedMessage);
});