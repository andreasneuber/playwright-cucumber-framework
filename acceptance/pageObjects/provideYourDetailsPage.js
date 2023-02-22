//const basePage = require("cypress/support/pageObjects/")

class provideYourDetailsPage {

    static url = "?action=form1";

    static visit() {
        cy.visit(this.url);
    }

    // @FindBy(how = How.XPATH, using = "//h2[contains(text(),'Form 1 - Information about yourself')]")
    // public WebElement titleForm;

    static provideFirstname(firstName) {
        cy.get('#fname').clear().type(firstName);
    }

    static provideLastName(lastName) {
        cy.get('#lname').clear().type(lastName);
    }

    static provideStreet(street) {
        cy.get('#street').clear().type(street);
    }

    static provideCity(city) {
        cy.get('#city').clear().type(city);
    }

    static provideZip(zipCode) {
        cy.get('#zip').clear().type(zipCode);
    }

    static provideState(state) {
        cy.get('#state').clear().type(state);
    }

    static provideCountry(country) {
        cy.get('#country').clear().type(country);
    }

    static provideMobilePhoneNumber(number) {
        cy.get('#mobile').clear().type(number);
    }

    static provideHomePhoneNumber(number) {
        cy.get('#home').clear().type(number);
    }

    static provideEmail(email) {
        cy.get('#email').clear().type(email);
    }

    static clickSubmitYourInformation() {
        cy.get('#submit-info').click();
    }
}

export default provideYourDetailsPage