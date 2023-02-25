const {expect} = require('@playwright/test');

exports.UserAccountPage = class UserAccountPage {

    url = 'http://localhost:8000/index.php?action=useraccount';

    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
        this.page = page;
        this.userAccountMainHeader = page.locator('h2', {hasText: 'User Account'});
        this.adminDashboardMainHeader = page.locator('h2', {hasText: 'Admin Dashboard'});
        this.hrResourcesLink = page.locator('#hr-resources-link');
        this.salesStatisticsLink = page.locator('#sales-statistics-link');
    }

    async visit() {
        await this.page.goto(this.url);
    }

    async getUserAccountMainHeader() {
        return this.userAccountMainHeader;
    }

    async getAdminDashboardMainHeader() {
        //await this.adminDashboardMainHeader.waitFor({ state: 'visible' });
        //return await this.adminDashboardMainHeader.isVisible().catch(e => { console.log(e) })
        return await this.adminDashboardMainHeader.isVisible();
    }

    async navigateToHumanResourcesSection() {
        await this.hrResourcesLink.click();
    }

    async navigateToSalesSection() {
        await this.salesStatisticsLink.click();
    }
}
