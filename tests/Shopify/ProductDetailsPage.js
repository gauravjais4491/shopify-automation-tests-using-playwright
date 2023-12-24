class ProductDetailsPage {
    constructor(page) {
        this.page = page
    }
    get quantity__input(){
        return this.page.locator(".quantity__input");
    }
    get addToCartButton(){
        return this.page.getByRole('button',{name:"Add to cart"})
    }
    async addProductToCart() {
        await this.quantity__input.fill("4");
        await this.addToCartButton.click();
    }
}
export { ProductDetailsPage };
