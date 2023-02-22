const {Given, When, Then} = require('@cucumber/cucumber')
const { expect } = require("@playwright/test");

const { LoginPage } = require('../pageObjects/loginPage.js');
const { UserAccountPage } = require('../pageObjects/userAccountPage.js');
// import userAccountPage from "../../support/pageObjects/userAccountPage.js";
// import employeePage from "../../support/pageObjects/employeePage.js";
// import salesPage from "../../support/pageObjects/salesPage.js";


Given('I navigate to login page', async function () {
    const loginPage = new LoginPage(page);
    await loginPage.visit();
});
When('I submit username {string} and password {string}', async function (username, password) {
    const loginPage = new LoginPage(page);
    await loginPage.provideUsername(username);
    await loginPage.providePassword(password);
    await loginPage.clickLogin();
});
Then('I will be logged into the Admin Dashboard', async function () {
    const userAccountPage = new UserAccountPage(page);
    await expect(userAccountPage.getAdminDashboardMainHeader()).toBeTruthy();

});
When('Admin searches for employee {string}', async function (employeeName) {
    const userAccountPage = new UserAccountPage(page);
    await userAccountPage.navigateToHumanResourcesSection();
    employeePage.employeePageIsDisplayed().should('be.visible');
    employeePage.fillEmployeeNameInput(employeeName);
    employeePage.clickSearchBtn();
});
Then(/^information appears that employee "([^"]*)" belongs to department "([^"]*)"$/,
    function (expectedEmployeeName, expectedDepartmentName) {
        employeePage.employeeRecordIsDisplayed().should('be.visible');
        employeePage.grabEmployeeName().should('equal', expectedEmployeeName);
        employeePage.grabDepartmentName().should('equal', expectedDepartmentName);
    });
When(/^Admin looks up total sales amount for month "([^"]*)" in year "([^"]*)"$/, function (month, year) {
    userAccountPage.navigateToSalesSection();

    salesPage.salesStatisticsPageIsDisplayed().should('be.visible');
    salesPage.grabYearMonthHeader().should('have.text', year + ' Month');
    salesPage.monthCellIsDisplayed(month).should('be.visible');
});
Then(/^the total "([^"]*)" sales amount is "([^"]*)"$/, function (month, expectedSalesAmount) {
    salesPage.grabSalesAmountFromMonth(month).should('equal', expectedSalesAmount);
});