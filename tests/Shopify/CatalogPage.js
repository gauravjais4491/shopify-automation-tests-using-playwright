import { ProductDetailsPage } from "./ProductDetailsPage";

class CatalogPage {
    constructor(page,productName) {
        this.page = page
        this.productName = productName
    }
    get product(){
        return this.page.locator(`.full-unstyled-link:has-text("${this.productName}"):visible`)
    }
    async goToProductDetailsPage(){
        await this.product.click()
    }
}
export { CatalogPage }