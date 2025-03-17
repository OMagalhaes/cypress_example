import { elements as el } from "./appHeader_elements";

class appHeader {

    openCatalogPage() {
        cy.get(el.appHeaderTitle).contains('Swag Labs');     
        cy.get(el.pageTitle).contains('Products');
    }
    
    openCartPage() {
        cy.get(el.appHeaderTitle).contains('Swag Labs');
        cy.get(el.pageTitle).contains('Your Cart');
    }

    openCheckoutPage() {
        cy.get(el.appHeaderTitle).contains('Swag Labs');
        cy.get(el.pageTitle).contains('Checkout: Your Information');
    }

    openCheckoutPageOverview() {
        cy.get(el.appHeaderTitle).contains('Swag Labs');
        cy.get(el.pageTitle).contains('Checkout: Overview');
    }

    openCheckoutPageSuccess() {
        cy.get(el.appHeaderTitle).contains('Swag Labs');
        cy.get(el.pageTitle).contains('Checkout: Complete!');
    }

    checkCartQuantity(itemsInCart) {
        cy.get(el.cartItemsBadge).contains(itemsInCart);
    }

    clickCartPageButton() {
        cy.get(el.cartIcon).click();
    }

    checkItemsRemovedFromCart() {
        cy.get(el.cartItemsBadge).should('not.exist');
    }

}

module.exports = new appHeader();