import LoginPage from "../pages/loginPage";
import AppHeader from "../pages/appHeader";
import testData from "../test_data/data.json";

beforeEach( () => {
  cy.visit('https://www.saucedemo.com/');
});

describe('Login Tests', () => {

  it('Test Login - Valid Credentials', () => {
    LoginPage.openLoginPage();
    LoginPage.fillCredentialsLogin(testData.validUser, testData.validPassword);
    AppHeader.openCatalogPage();
  });

  it('Test Login - Missing username', () => {
    LoginPage.openLoginPage();
    LoginPage.fillPasswordLogin(testData.validPassword);
    LoginPage.checkErrorMessage(testData.noUsernameErrorMessage);
  });

  it('Test Login - Missing password', () => {
    LoginPage.openLoginPage();
    LoginPage.fillUsernameLogin(testData.validUser);
    LoginPage.checkErrorMessage(testData.noPasswordErrorMessage);
  });

  it('Test Login - Non-existent user', () => {
    LoginPage.openLoginPage();
    LoginPage.fillCredentialsLogin(testData.invalidUser, testData.validPassword);
    LoginPage.checkErrorMessage(testData.invalidUserErrorMessage);
  });

  it('Test Login - Locked user', () => {
    LoginPage.openLoginPage();
    LoginPage.fillCredentialsLogin(testData.lockedUser, testData.validPassword);
    LoginPage.checkErrorMessage(testData.lockedUserErrorMessage);
  });


})
