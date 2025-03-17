import { elements as el } from "./loginPage_elements";

class loginPage {

    openLoginPage() {
        cy.visit('https://www.saucedemo.com/');
        cy.get(el.loginPageTitle).contains('Swag Labs');
    }

    fillCredentialsLogin(loginValue, passwordValue) {
        cy.get(el.userNameEditBox).type(loginValue);
        cy.get(el.passwordEditBox).type(passwordValue);
        cy.get(el.loginButton).click();
    }

}

module.exports = new loginPage();