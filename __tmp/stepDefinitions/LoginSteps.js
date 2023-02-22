import {Given, When, Then, Before} from "cypress-cucumber-preprocessor/steps";
import loginPage from "../../support/pageObjects/loginPage.js";
import userAccountPage from "../../support/pageObjects/userAccountPage.js";

Given(/^I enter following for login$/, function (datatable) {
    const row = new Map();
    row.set(datatable.raw()[0][0], datatable.rows()[0][0]);
    row.set(datatable.raw()[0][1], datatable.rows()[0][1]);

    loginPage.provideUsername(row.get("username"));
    loginPage.providePassword(row.get("password"));
});
When(/^I click login button$/, function () {
    loginPage.clickLogin();
});
Then(/^I should be able to access the protected area$/, function () {
    userAccountPage.displayAdminDashboard().should('be.visible');
});
Given(/^I enter following values to login$/, function (datatable) {
    let username = datatable.raw()[0][1];
    let pw = datatable.raw()[1][1];

    loginPage.provideUsername(username);
    loginPage.providePassword(pw);
});