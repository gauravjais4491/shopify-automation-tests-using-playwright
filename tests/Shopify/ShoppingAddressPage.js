class ShoppingAddressPage {
    constructor(page) {
        this.page = page
    }
    static createInstance(page) {
        return new ShoppingAddressPage(page);
    }
    get addEmailInTextBox() {
        return this.page.locator("#email")
    }
    get checkUpdateNewsAndOfferButton() {
        return this.page.locator("#marketing_opt_in")
    }
    async addContactDetails(email) {
        await this.addEmailInTextBox.type(email, { delay: 100 })
        await this.checkUpdateNewsAndOfferButton.click()
    };

    get addFirstName() {
        return this.page.locator("[id='TextField0']")
    }
    get addLastName() {
        return this.page.locator("[id='TextField1']")
    }
    get addDeliveryAddress() {
        return this.page.locator("[id='shipping-address1']")
    }
    get suggestionBox() {
        return this.page.locator(`[id="shipping-address1-option-0"]`)
    }
    get addCity() {
        return this.page.locator(`[class='_1frageme0']`).locator('>div').locator(`>[name="city"]`)
    }
    get addState() {
        return this.page.locator(`[id="Select1"]`)
    }
    get addPostalCode() {
        return this.page.locator(`[class='_1frageme0']`).locator('>div').locator(`>[name="postalCode"]`)
    }
    get addInformationForNextTime() {
        return this.page.locator("[name=save_shipping_information]")
    }
    async addShippingAddress(firstName, lastName, address, city, state, postalCode) {
        await this.addFirstName.type(firstName, { delay: 100 })

        await this.addLastName.type(lastName, { delay: 100 })

        await this.addDeliveryAddress.type(address, { delay: 100 })
        await this.suggestionBox.click({ force: true })

        await this.addCity.type(city, { delay: 100 })

        await this.addState.click()
        await this.addState.selectOption(state)

        await this.addPostalCode.type(postalCode, { delay: 100 })

        await this.addInformationForNextTime.click()
    };
}
export { ShoppingAddressPage }