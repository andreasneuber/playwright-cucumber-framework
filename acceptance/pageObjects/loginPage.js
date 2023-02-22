//const basePage = require("cypress/support/pageObjects/")

exports.LoginPage = class LoginPage {

    static url = "?action=form4";

    static visit() {
        cy.visit(this.url);
    }
    async goto() {
        await this.page.goto('http://localhost:8000/index.php?action=form4');
    }

    static provideUsername(username) {
        cy.get('input[name="user"]').clear().type(username);
    }

    static providePassword(password) {
        cy.get('input[name="pw"]').clear().type(password);
    }

    static login(username, password) {
        this.provideUsername(username);
        this.providePassword(password);
    }

    static clickLogin() {
        cy.get('#btnLogin').click();
    }

    static getTitleForm() {
        cy.get('h2').should('have.text', 'User 123')
    }
}