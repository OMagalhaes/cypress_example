import { elements as el } from "./loginPage_elements";

class loginPage {

    openLoginPage() {
        cy.get(el.loginPageTitle).contains('Swag Labs');
    }

    fillUsernameLogin(loginValue) {
        cy.get(el.userNameInput).type(loginValue);
        cy.get(el.loginButton).click();
    }

    fillPasswordLogin(passwordValue) {
        cy.get(el.passwordInput).type(passwordValue, {sensitive: true});
        cy.get(el.loginButton).click();
    }

    fillCredentialsLogin(loginValue, passwordValue) {
        cy.get(el.userNameInput).type(loginValue);
        cy.get(el.passwordInput).type(passwordValue, {sensitive: true});
        cy.get(el.loginButton).click();
    }

    checkErrorMessage(errorMessageValue) {
        cy.get(el.userNameInput).should('have.class', 'error');
        cy.get(el.passwordInput).should('have.class', 'error');
        cy.get(el.loginErrorLabel).contains(errorMessageValue);
    }

}

module.exports = new loginPage();