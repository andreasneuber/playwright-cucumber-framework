const {Given, When, Then} = require('@cucumber/cucumber')
const { expect } = require("@playwright/test");
const { CelsiusToFahrenheitPage } = require('../pageObjects/celsiusToFahrenheitPage.js');


Given('I provide {string} degree Celsius', async function (celsius) {
    const celsiusToFahrenheitPage = new CelsiusToFahrenheitPage(page);
    await celsiusToFahrenheitPage.visit();
    await celsiusToFahrenheitPage.provideCelsius(celsius);
});
When('I click the convert button', async function () {
    const celsiusToFahrenheitPage = new CelsiusToFahrenheitPage(page);
    await celsiusToFahrenheitPage.clickConvert();
});
Then('I should see as result {string} Fahrenheit', async function (expectedFahrenheit) {
    const celsiusToFahrenheitPage = new CelsiusToFahrenheitPage(page);
    const actualFahrenheit = await celsiusToFahrenheitPage.readFahrenheitField();
    expect(actualFahrenheit).toBe(expectedFahrenheit);
});
