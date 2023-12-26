import { CatalogPage } from "./CatalogPage";
import { ProductDetailsPage } from "./ProductDetailsPage";
import { ViewCartPage } from "./ViewCartPage";
import { ShoppingAddressPage } from "./ShoppingAddressPage";
import { PaymentDetailsPage } from "./PaymentDetailsPage";
import dataset from '../../data/data.json'
const { test, expect } = require('@playwright/test');

for (const data of dataset) {
    test(`should place an order with product name ' ${data.productName} '`, async ({ page }) => {

        await page.goto(data.websiteLink);

        await page.locator('.header__icon.header__icon--menu.header__icon--summary.link.focus-inset').click()
        await page.locator(`//a[contains(text(),'Catalog')]`).click()

        const catalogPage = CatalogPage.createInstance(page, data.productName)
        await catalogPage.goToProductDetailsPage()

        const productDetailsPage = ProductDetailsPage.createInstance(page);
        await productDetailsPage.addProductToCart()

        const viewCartPage = ViewCartPage.createInstance(page)
        await viewCartPage.goToShoppingAddressPage();

        const shoppingAddressPage = ShoppingAddressPage.createInstance(page)
        await shoppingAddressPage.addContactDetails(data.email)
        await shoppingAddressPage.addShippingAddress(data.firstName, data.lastName, data.address, data.city, data.state, data.postalCode)

        const paymentDetailsPage = PaymentDetailsPage.createInstance(page)
        await paymentDetailsPage.addPaymentDeatils(data.cardNumber, data.nameOnCard, data.expiry, data.cvv)
    })
}

