const {expect} = require('@playwright/test');
//const basePage = require("cypress/support/pageObjects/")

exports.SalesPage = class SalesPage {

    url = '?action=sales';

    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
        this.page = page;
        this.salesStatisticsPageMainHeader = page.locator('h2', {hasText: 'Sales - Statistics'});
        this.salesYearMonthHeaderCell = page.locator('.sales.header-year-month');
        this.monthCell = page.locator('td');
        this.salesAmountCell = "//td[contains(text(), '%s')]/following-sibling::td"
    }

    async visit() {
        await this.page.goto(BASE_URL + this.url);
    }

    async salesStatisticsPageIsDisplayed() {
        // works - but actually preferred approach is to return a false/true here, and do a isTrue assertion in test itself
        await expect(this.salesStatisticsPageMainHeader).toBeVisible;
    }

    async grabYearMonthHeader() {
        return await this.salesYearMonthHeaderCell.textContent();
    }

    async monthCellIsDisplayed(month) {
        // works - but actually preferred approach is to return a false/true here, and do a isTrue assertion in test itself
        await expect(this.monthCell.filter({hasText: month})).toBeVisible;
    }

    async grabSalesAmountFromMonth(month) {
        const xPath = this.salesAmountCell.replace('%s', month);
        return await page.locator(xPath).textContent();
    }
}
