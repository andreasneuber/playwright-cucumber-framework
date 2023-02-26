const { expect } = require('@playwright/test');
//const basePage = require("cypress/support/pageObjects/")

exports.ProvideYourDetailsPage = class ProvideYourDetailsPage {

    url = 'http://localhost:8000/index.php?action=form1';

    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
        this.page = page;
        this.inputFirstname = page.locator('#fname');
        this.inputLastname = page.locator('#lname');
        this.inputStreet = page.locator('#street');
        this.inputCity = page.locator('#city');
        this.inputZipCode = page.locator('#zip');
        this.inputState = page.locator('#state');
        this.inputCountry = page.locator('#country');
        this.inputMobilePhoneNumber = page.locator('#mobile');
        this.inputHomePhoneNumber = page.locator('#home');
        this.inputEmail = page.locator('#email');
        this.buttonSubmitInfo = page.locator('#submit-info');
    }

    async visit() {
        await this.page.goto(this.url);
    }

    // @FindBy(how = How.XPATH, using = "//h2[contains(text(),'Form 1 - Information about yourself')]")
    // public WebElement titleForm;

    async provideFirstname(firstName) {
        await this.inputFirstname.fill(firstName);
    }

    async provideLastName(lastName) {
        await this.inputLastname.fill(lastName);
    }

    async provideStreet(street) {
        await this.inputStreet.fill(street);
    }

    async provideCity(city) {
        await this.inputCity.fill(city);
    }

    async provideZip(zipCode) {
        await this.inputZipCode.fill(zipCode);
    }

    async provideState(state) {
        await this.inputState.fill(state);
    }

    async provideCountry(country) {
        await this.inputCountry.fill(country);
    }

    async provideMobilePhoneNumber(number) {
        await this.inputMobilePhoneNumber.fill(number);
    }

    async provideHomePhoneNumber(number) {
        await this.inputHomePhoneNumber.fill(number);
    }

    async provideEmail(email) {
        await this.inputEmail.fill(email);
    }

    async clickSubmitYourInformation() {
        await this.buttonSubmitInfo.click();
    }
}
