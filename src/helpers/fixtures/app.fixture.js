import { test as base } from '@playwright/test';
import { App } from '../../pages/app.page';

export const test = base.extend({
    app: async ({ page }, use) => {

        const app = new App(page);
        await app.login.open();
        await app.login.login();
        await use(app);
    }
});