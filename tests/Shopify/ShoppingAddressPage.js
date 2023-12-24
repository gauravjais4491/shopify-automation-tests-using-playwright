class ShoppingAddressPage {
    constructor(page) {
        this.page = page
    }
    static createInstance(page) {
        return new ShoppingAddressPage(page);
    }
    get addEmailInTextBox(){
        return this.page.locator("#email")
    }
    get checkUpdateNewsAndOfferButton(){
        return this.page.locator("#marketing_opt_in")
    }
    async addContactDetails(email) {
        await this.addEmailInTextBox.type(email,{delay:100})
        await this.checkUpdateNewsAndOfferButton.click()
    };

    get addFirstName(){
        return this.page.locator("#TextField0")
    }
    get addLastName(){
        return this.page.locator("#TextField1")
    }
    get addDeliveryAddress(){
        return this.page.locator("#shipping-address1")
    }
    get addCity(){
        return this.page.locator("#TextField2")
    }
    get addState(){
        return this.page.locator(`[id="Select1"]`)
    }
    get addPostalCode(){
        return this.page.locator("#TextField3")
    }
    get addInformationForNextTime(){
        return this.page.locator("[name=save_shipping_information]")
    }
    async addShippingAddress(firstName,lastName,address,city,state,postalCode) {
        await this.addFirstName.type(firstName,{delay:100})

        await this.addLastName.type(lastName,{delay:100})

        await this.addDeliveryAddress.type(address,{delay:100})

        await this.addCity.type(city,{delay:100})

        await this.addState.click()
        await this.addState.selectOption(state)

        await this.addPostalCode.type(postalCode,{delay:100})

        await this.addInformationForNextTime.click()
    };
}
export { ShoppingAddressPage }