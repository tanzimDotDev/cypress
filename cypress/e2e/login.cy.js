import { LoginPage } from '../pages/LoginPage';

describe('Klasio Login Tests', () => {
    const loginPage = new LoginPage();

    beforeEach(() => {
        loginPage.visit();
    });

    it('should login with valid credentials', () => {
        loginPage.login('instructor@wedevs.com', 'qwertyui');
        cy.url().should('include', '/dashboard');
    });

    it('should show error with invalid credentials', () => {
        loginPage.login('wrong@email.com', 'wrongpassword');
        loginPage.checkErrorMessage('These credentials do not match our records.');
    });

    it('should require email field', () => {
        loginPage.typePassword('password123');
        loginPage.clickLogin();
        // cy.get(this.elements.emailValidation).should('contain', 'The email field is required.');
    });
});