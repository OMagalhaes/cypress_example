import { elements as el } from "./catalogPage_elements";

class catalogPage {

    addTwoRandomItemsToCart() {
        const addToCartButtons = [el.addToCartBackPack, el.addToCartBikeLight, el.addToCartTShirt, el.addToCartFleeceJacket, el.addToCartOnesie];
        const randomButtons = [];

        while (randomButtons.length < 2) {
            const randomElement = addToCartButtons[Math.floor(Math.random() * addToCartButtons.length)];
            if (!randomButtons.includes(randomElement)) {
                randomButtons.push(randomElement);
            }
        }

        cy.get(randomButtons).each(($button) => {
            cy.get($button).click();
        })
    }

}

module.exports = new catalogPage();