import { elements as el } from "./checkoutPage_elements";

class checkoutPage {

    fillAndVerifyFirstName(firstName) {
        cy.get(el.firstNameInput).type(firstName).should('have.value', firstName);
    }

    fillAndVerifyLastName(lastName) {
        cy.get(el.lastNameInput).type(lastName).should('have.value', lastName);
    }

    fillAndVerifyPostalCode(postalCode) {
        cy.get(el.postalCodeInput).type(postalCode).should('have.value', postalCode);
    }

    clickContinueCheckout() {
        cy.get(el.continueButton).click();
    }

    confirmCartItemsAmount(cartItemsTotalAmount) {
        let sum = 0;

        cy.get(el.overviewCartItemsQuantity).each(($itemAmount) => {
            const cartItemCardAmount = Number($itemAmount.text().trim());
            sum += cartItemCardAmount;
        })
        .then(() => {
        expect(sum).to.equal(cartItemsTotalAmount);
        })
    };

    confirmCheckoutTotalAmountLabel(summaryTotalAmountLabel) {
        cy.get(el.checkoutSummaryTotalAmountLabel).contains(summaryTotalAmountLabel);
    }

    clickFinishCheckoutButton() {
        cy.get(el.finishCheckoutButton).click();
    }

    checkoutFinishedSuccessfully(checkoutSuccessMessage) {
        cy.get(el.checkoutSuccessIcon).should('be.visible');
        cy.get(el.checkoutSuccessThankYouText).should('be.visible').contains(checkoutSuccessMessage);
        cy.get(el.goBackHomeButton).click();
    }

}

module.exports = new checkoutPage();