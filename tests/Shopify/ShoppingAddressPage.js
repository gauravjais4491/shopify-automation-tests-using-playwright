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
        await this.addEmailInTextBox.fill(email)
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
    get waitForDataLoad() {
        return this.page.locator('[id="shipping_methods"]')
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
        await this.addFirstName.fill(firstName)

        await this.addLastName.fill(lastName)

        await this.addDeliveryAddress.fill(address)
        await this.suggestionBox.click({ force: true })
        await this.waitForDataLoad.waitFor('attached')

        await this.addCity.fill(city)

        await this.addState.click({ force: true })
        await this.addState.selectOption(state)

        await this.addPostalCode.fill(postalCode)

        await this.addInformationForNextTime.click()
    };  
}
export { ShoppingAddressPage }