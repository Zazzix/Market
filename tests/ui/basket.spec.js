import { test } from '../../src/helpers/fixtures/app.fixture';
import { expect } from '@playwright/test';
import { ProductBuilder } from '../../src/helpers/builder/index'
///import { App } from '../../src/pages/app.page';
//import { LoginPage } from '../../src/pages';
//import { LoginPage } from '../../src/pages';

/*
test.only('login test', async ({ app }) => {
    //const login = new LoginPage();
    //const login = new LoginPage();
    //const app = new App(page);

    //await app.login.open()
    //await app.login.login();
    expect(page.getByText('Add Product')).toBeVisible();
});
*/
test.only('Add product', async ({ app }) => {
    const newProduct = new ProductBuilder().withnameFruit().withPrice().withStock().build();
    await app.product.addProductOpen();
    await app.product.fillProductDetails(newProduct);
    await app.main.productSearch(newProduct.product_name);
    await expect(await app.main.getProductGrid()).toContainText(newProduct.product_name);
    //console.log(app.main.getProductGrid());
    //const login = new LoginPage();
    //const login = new LoginPage();
    //const app = new App(page);

    //await app.login.open()
    //await app.login.login();

    //expect(page.getByText('Add Product')).toBeVisible();

});