import { elements as el } from "./cartPage_elements";

class cartPage {

    removeRandomItemFromCart() {
        const randomIndexItemToRemove = Math.round(Math.random());

        cy.get(el.removeFromCartButtons).each(($button, index) => {
            if (randomIndexItemToRemove === index) {
                cy.wrap($button).click();
            }
        })
    }

    clickCheckoutButton() {
        cy.get(el.checkoutButton).click();
    }
}

module.exports = new cartPage();