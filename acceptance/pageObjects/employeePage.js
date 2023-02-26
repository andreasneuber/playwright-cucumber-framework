const { expect } = require('@playwright/test');
//const basePage = require("cypress/support/pageObjects/")

exports.EmployeePage = class EmployeePage {

    url = 'http://localhost:8000/index.php?action=employee';

    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
        this.page = page;
        this.employeePageMainHeader = page.locator('h2', {hasText: 'Human Resources - Find employee'});
        this.inputEmployeeName = page.locator('#employee-name');
        this.btnSearch = page.locator('#btnSearch');
        this.employeeDetailsRecord = page.locator('#employee-details');
        this.employeeNameCell = page.locator('.employee.name');
        this.departmentNameCell = page.locator('.employee.department');
    }


    async visit() {
        await this.page.goto(this.url);
    }

    async employeePageIsDisplayed() {
        // works - but actually preferred approach is to return a false/true here, and do a isTrue assertion in test itself
        await expect(this.employeePageMainHeader).toBeVisible;
    }

    async fillEmployeeNameInput(employeeName) {
        await this.inputEmployeeName.fill(employeeName);
    }

    async clickSearchBtn() {
        await this.btnSearch.click();
    }

    async employeeRecordIsDisplayed() {
        // works - but actually preferred approach is to return a false/true here, and do a isTrue assertion in test itself
        await expect(this.employeeDetailsRecord).toBeVisible;
    }

    async grabEmployeeName() {
        return await this.employeeNameCell.textContent();
    }

    async grabDepartmentName() {
        return await this.departmentNameCell.textContent();
        // return cy.get('.employee.department').invoke('text');
    }
}
