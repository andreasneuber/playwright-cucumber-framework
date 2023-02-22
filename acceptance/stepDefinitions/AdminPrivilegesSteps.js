import {Given, When, Then, Before} from "cypress-cucumber-preprocessor/steps";
import loginPage from "../../support/pageObjects/loginPage.js";
import userAccountPage from "../../support/pageObjects/userAccountPage.js";
import employeePage from "../../support/pageObjects/employeePage.js";
import salesPage from "../../support/pageObjects/salesPage.js";

Given(/^I navigate to login page$/, function () {
    loginPage.visit();
});
When(/^I submit username "([^"]*)" and password "([^"]*)"$/, function (username, password) {
    loginPage.provideUsername(username);
    loginPage.providePassword(password);
    loginPage.clickLogin();
});
Then(/^I will be logged into the Admin Dashboard$/, function () {
    userAccountPage.displayAdminDashboard().should('be.visible');
});
When(/^Admin searches for employee "([^"]*)"$/, function (employeeName) {
    userAccountPage.navigateToHumanResourcesSection();
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