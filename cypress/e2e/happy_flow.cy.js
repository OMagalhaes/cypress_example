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

    it('Happy Path Test Flow', () => {
        //Login into the application
        LoginPage.openLoginPage();
        LoginPage.fillCredentialsLogin(testData.validUser, testData.validPassword);
        AppHeader.openCatalogPage();
        //Add items to cart on catalog page and go to cart page
        CatalogPage.addTwoRandomItemsToCart();
        AppHeader.checkCartQuantity("2");
        AppHeader.clickCartPageButton();
        AppHeader.openCartPage();
        //Interact with items on cart and go to checkout page
        CartPage.removeRandomItemFromCart();
        AppHeader.checkCartQuantity("1");
        CartPage.clickCheckoutButton();
        AppHeader.openCheckoutPage();
        //Fill checkout information and continue
        CheckoutPage.fillAndVerifyFirstName(testData.checkoutFirstName);
        CheckoutPage.fillAndVerifyLastName(testData.checkoutLastName);
        CheckoutPage.fillAndVerifyPostalCode(testData.checkoutPostalCode);
        CheckoutPage.clickContinueCheckout();
        //View Checkout Summary Page
        AppHeader.openCheckoutPageOverview();
        AppHeader.checkCartQuantity("1");
        CheckoutPage.confirmCartItemsAmount(1);
        CheckoutPage.confirmCheckoutTotalAmountLabel(testData.checkoutSummaryTotalAmountLabel);
        CheckoutPage.clickFinishCheckoutButton();
        //Finish checkout successfully and return to catalog page
        AppHeader.openCheckoutPageSuccess();
        AppHeader.checkItemsRemovedFromCart();
        CheckoutPage.checkoutFinishedSuccessfully(testData.checkoutSuccessMessage);
        AppHeader.openCatalogPage();
  });

})