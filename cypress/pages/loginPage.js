import { elements as el } from "./loginPage_elements";

class loginPage {

    openLoginPage() {
        cy.get(el.loginPageTitle).contains('Swag Labs');
    }

    fillUsernameLogin(loginValue) {
        cy.get(el.userNameEditBox).type(loginValue);
        cy.get(el.loginButton).click();
    }

    fillPasswordLogin(passwordValue) {
        cy.get(el.passwordEditBox).type(passwordValue);
        cy.get(el.loginButton).click();
    }

    fillCredentialsLogin(loginValue, passwordValue) {
        cy.get(el.userNameEditBox).type(loginValue);
        cy.get(el.passwordEditBox).type(passwordValue);
        cy.get(el.loginButton).click();
    }

    checkErrorMessage(errorMessageValue) {
        cy.get(el.userNameEditBox).should('have.class', 'error');
        cy.get(el.passwordEditBox).should('have.class', 'error');
        cy.get(el.loginErrorLabel).should('have.text', errorMessageValue);
    }

}

module.exports = new loginPage();