import { test, expect } from '@playwright/test';

export class LoginPage {
    constructor(page) {
        this.page = page;

        this.passwordInput = page.locator('#password');
        this.loginButton = page.getByRole('button', { name: 'Open App' });
        this.addProductButton = page.getByRole('button', { name: '+ Add Product' });
    }
    async open() {
        await this.page.goto('/app-login.html?user=Zazzix&app=market')
    }
    async login() {
        await this.passwordInput.click();
        await this.passwordInput.fill(`${process.env.API_TOKEN}`);
        await this.loginButton.click();
        //await this.addProductButton.click();
        //await this.page.waitForURL('**/market.html**');

    }
}