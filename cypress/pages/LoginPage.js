export class LoginPage {
    elements = {
        emailInput: '#email',
        passwordInput: '#password',
        loginButton: '[type="submit"]',
        errorMessage:'.text-sm'
    }

    visit() {
        cy.visit('/login');
    }

    typeEmail(email) {
        cy.get(this.elements.emailInput).clear().type(email);
    }

    typePassword(password) {
        cy.get(this.elements.passwordInput).clear().type(password);
    }

    clickLogin() {
        cy.get(this.elements.loginButton).click();
    }

    login(email, password) {
        this.typeEmail(email);
        this.typePassword(password);
        this.clickLogin();
    }

    checkErrorMessage(message) {
        cy.get(this.elements.errorMessage).should('contain', message);
    }
}