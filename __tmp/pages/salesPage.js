//const basePage = require("cypress/support/pageObjects/")

class salesPage {

    static url = "?action=sales";

    static visit() {
        cy.visit(this.url);
    }

    static salesStatisticsPageIsDisplayed() {
        return cy.get('h2').contains('Sales - Statistics');
    }

    static grabYearMonthHeader() {
        return cy.get('.sales.header-year-month');
    }

    static monthCellIsDisplayed(month) {
        return cy.get('td').contains(month);
    }

    static grabSalesAmountFromMonth(month) {
        return cy.get('td').contains(month).next().invoke('text');
    }
}

export default salesPage