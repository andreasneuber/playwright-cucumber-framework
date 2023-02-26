const {Given, When, Then} = require('@cucumber/cucumber')
const { expect } = require("@playwright/test");
const { CelsiusToFahrenheitPage } = require('../pageObjects/celsiusToFahrenheitPage.js');


//launch url
const url = 'http://localhost:8000/index.php?action=form6';

//define selectors
const homepageElement = '.borderTodo'
const celsiusInput = '//input[@name="celsius"]';
const convertButton = '#btnCelsius';
const fahrenheitInput = '//input[@name="fahrenheit"]';

Given('I provide {string} degree Celsius', async function (celsius) {
    const celsiusToFahrenheitPage = new CelsiusToFahrenheitPage(page);
    await celsiusToFahrenheitPage.goto();
    await page.fill(celsiusInput , celsius);
});
When('I click the convert button', async function () {
    await page.click(convertButton);
});
Then('I should see as result {string} Fahrenheit', async function (expectedFahrenheit) {
    const input = page.locator(fahrenheitInput);
    const actualFahrenheit = await input.getAttribute('value');
    expect(actualFahrenheit).toBe(expectedFahrenheit);
});
