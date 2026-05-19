import { test as base } from '@playwright/test';
import { UserBuilder } from '../builder/user.builder';
import { App } from '../../pages/app.page'

export const test = base.extend({
    app: async ({ page }, use) => {

        const app = new App(page);

        const user = new UserBuilder().withUsername().withEmail().withPassword().build();

        await app.main.open();
        await app.main.gotoRegister();
        await app.register.signup(user);

        await use(app);
    }
});