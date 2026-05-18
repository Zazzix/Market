import { test, expect } from '@playwright/test';

export class AddProduct {
    constructor(page) {
        this.page = page;

        this.addProductButton = page.getByRole('button', { name: '+ Add Product' });
        this.saveProductButton = page.getByRole('button', { name: 'Save Product' });
        this.productName = page.locator('#productName');
        this.productCategory = page.locator('#productCategory');
        this.productPrice = page.locator('#productPrice');
        this.productStock = page.locator('#productStock');
    }
    async addProductOpen() {
        //await this.page.waitForURL('**/market.html**');
        await this.addProductButton.click();
        //await this.page.waitForURL('**/market.html**');
    }
    async fillProductDetails(product) {
        const { product_name, price, stock } = product;

        await this.page.waitForLoadState('networkidle');
        await this.productName.click();
        await this.productName.fill(product_name);
        await this.productCategory.selectOption('Other');
        await this.productPrice.click();
        await this.productPrice.fill(price.toString());
        await this.productStock.click();
        await this.productStock.fill(stock.toString());
        await this.saveProductButton.click();

    }
}