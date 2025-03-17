import { elements as el } from "./appHeader_elements";

class appHeader {

    openAppPage() {
        cy.get(el.appHeaderTitle).contains('Swag Labs');
    }

}

module.exports = new appHeader();