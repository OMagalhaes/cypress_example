import LoginPage from "../pages/loginPage";
import appHeader from "../pages/appHeader";
import testData from "../test_data/data.json";


describe('Login Test', () => {
  it('Valid Login', () => {
    LoginPage.openLoginPage();
    LoginPage.fillCredentialsLogin(testData.validUser, testData.validPassword);
  })
})