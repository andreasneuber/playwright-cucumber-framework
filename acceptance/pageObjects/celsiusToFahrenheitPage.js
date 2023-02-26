const {expect} = require('@playwright/test');

exports.CelsiusToFahrenheitPage = class CelsiusToFahrenheitPage {

    url = '?action=form6';

    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
        this.page = page;
        this.celsiusInput = page.locator('//input[@name="celsius"]');
        this.convertButton = page.locator('#btnCelsius');
        this.fahrenheitInput = page.locator('//input[@name="fahrenheit"]');
    }

    async visit() {
        await this.page.goto(BASE_URL + this.url);
    }


    async provideCelsius(celsiusDegrees) {
        await this.celsiusInput.fill(celsiusDegrees);
    }

    async clickConvert() {
        await this.convertButton.click();
    }

    async readFahrenheitField() {
        return this.fahrenheitInput.getAttribute('value');
    }
}
