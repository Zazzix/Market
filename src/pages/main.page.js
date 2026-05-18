import { test, expect } from '@playwright/test';

export class MainPage {
    constructor(page) {
        this.page = page;

        this.searchProduct = page.getByRole('textbox', { name: 'Search by product, category, or detail...' });
        this.productGrid = page.locator('#productsGrid');
    }
    async productSearch(productName) {
        await this.page.waitForLoadState('networkidle');
        await this.searchProduct.click();
        await this.searchProduct.fill(productName);

    }
    async getProductGrid() {
        await this.page.waitForLoadState('networkidle');
        return this.productGrid;
    }
}