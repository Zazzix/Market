import { test as base } from '@playwright/test';
import { UserBuilder } from '../builder/index';
import { App } from '../../pages/app.page'

export const test = base.extend({
    userData: async ({ }, use) => {
        const user = new
            UserBuilder().withUsername().withEmail().withPassword().build();
        await use(user);
    },

    registeredApp: async ({ page, userData }, use) => {
        const app = new App(page);
        await app.main.open();
        await app.main.gotoRegister();
        await app.register.signup(userData);
        await use({ app, user: userData });
    },
});