import { test, expect } from '@playwright/test';

export class MainPage {
    constructor(page) {
        this.page = page;

        this.addProductButton = page.getByRole('button', { name: '+ Add Product' });
    }
    async addProductOpen() {
        await this.addProductButton.click();
        //await this.page.waitForURL('**/market.html**');

    }
}