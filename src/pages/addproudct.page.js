import { test, expect } from '@playwright/test';

export class AddProduct {
    constructor(page) {
        this.page = page;

        this.addProductButton = page.getByRole('button', { name: '+ Add Product' });
        this.productName = page.getByRole('textbox', { name: 'Product Name *' });
        this.productCategory = page.getByRole('combobox', { name: 'Category *' });
    }
    async addProductOpen() {
        await this.addProductButton.click();
    }
    async fillProductDetails(product) {
        //TODO
    }
}