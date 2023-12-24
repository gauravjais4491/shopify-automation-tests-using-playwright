import { CatalogPage } from "./CatalogPage";
import { ProductDetailsPage } from "./ProductDetailsPage";
import { ViewCartPage } from "./ViewCartPage";
import { ShoppingAddressPage } from "./ShoppingAddressPage";
import { PaymentDetailsPage } from "./PaymentDetailsPage";
import  data  from '../../data/data.json'
const { test, expect } = require('@playwright/test');


test("should place an order", async ({ page }) => {

    await page.goto('https://testvagrant.myshopify.com/');

    await page.locator('.header__icon.header__icon--menu.header__icon--summary.link.focus-inset').click()
    await page.locator(`//a[contains(text(),'Catalog')]`).click()

    const catalogPage = new CatalogPage(page,data.productName)
    await catalogPage.goToProductDetailsPage()

    const productDetailsPage = new ProductDetailsPage(page);
    await productDetailsPage.addProductToCart()

    const viewCartPage = new ViewCartPage(page)
    await viewCartPage.goToShoppingAddressPage();

    const shoppingAddressPage = new ShoppingAddressPage(page)
    await shoppingAddressPage.addContactDetails(data.email)
    await shoppingAddressPage.addShippingAddress(data.firstName,data.lastName,data.address,data.city,data.state,data.postalCode)

    const paymentDetailsPage = new PaymentDetailsPage(page)
    await paymentDetailsPage.addPaymentDeatils(data.cardNumber,data.nameOnCard,data.expiry,data.cvv)
    await page.pause()

    // await browser.url("/")
    // await browser.pause(10000)
    // await browser.pause(10000)

})


