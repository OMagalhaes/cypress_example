import LoginPage from "../pages/loginPage";
import AppHeader from "../pages/appHeader";
import CatalogPage from "../pages/catalogPage";
import CartPage from "../pages/cartPage";
import CheckoutPage from "../pages/checkoutPage";
import testData from "../test_data/data.json";

before( () => {
  cy.visit('https://www.saucedemo.com/');
});

describe('Happy Path automation', () => {

  it('Login with valid Credentials', () => {
    LoginPage.openLoginPage();
    LoginPage.fillCredentialsLogin(testData.validUser, testData.validPassword);
    AppHeader.openCatalogPage();
    CatalogPage.addTwoRandomItemsToCart();
    AppHeader.checkCartQuantity("2");
    AppHeader.clickCartPageButton();
    AppHeader.openCartPage();
    CartPage.removeRandomItemFromCart();
    AppHeader.checkCartQuantity("1");
    CartPage.clickCheckoutButton();
    AppHeader.openCheckoutPage();
    CheckoutPage.fillAndVerifyFirstName(testData.checkoutFirstName);
    CheckoutPage.fillAndVerifyLastName(testData.checkoutLastName);
    CheckoutPage.fillAndVerifyPostalCode(testData.checkoutPostalCode);
    CheckoutPage.clickContinueCheckout();
    AppHeader.openCheckoutPageOverview();
    AppHeader.checkCartQuantity("1");
    CheckoutPage.confirmCartItemsAmount(1);
    CheckoutPage.confirmCheckoutTotalAmountLabel(testData.checkoutSummaryTotalAmountLabel);
    CheckoutPage.clickFinishCheckoutButton();
    AppHeader.openCheckoutPageSuccess();
    AppHeader.checkItemsRemovedFromCart();
    CheckoutPage.checkoutFinishedSuccessfully(testData.checkoutSuccessMessage);
    AppHeader.openCatalogPage();
  });

})