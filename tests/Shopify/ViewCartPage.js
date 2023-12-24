class ViewCartPage {
    constructor(page){
        this.page = page
    }
    static createInstance(page) {
        return new ViewCartPage(page);
    }
    get cartNotificationButton(){
        return this.page.locator("#cart-notification-button");
    }
    get checkoutBtn(){
        return this.page.locator("#checkout");
    }
    async goToShoppingAddressPage() {
        await this.cartNotificationButton.click();
        await this.checkoutBtn.click();
    }
}
export { ViewCartPage }