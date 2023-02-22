//const basePage = require("cypress/support/pageObjects/")

class employeePage {

    static url = "?action=employee";

    static visit() {
        cy.visit(this.url);
    }

    static employeePageIsDisplayed() {
        return cy.get('h2').contains('Human Resources - Find employee');
    }

    static fillEmployeeNameInput(employeeName) {
        cy.get('#employee-name').clear().type(employeeName);
    }

    static clickSearchBtn() {
        cy.get('#btnSearch').click();
    }

    static employeeRecordIsDisplayed() {
        return cy.get('#employee-details');
    }

    static grabEmployeeName() {
        return cy.get('.employee.name').invoke('text');
    }

    static grabDepartmentName() {
        return cy.get('.employee.department').invoke('text');
    }
}

export default employeePage