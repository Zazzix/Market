import { test as base } from '@playwright/test';
import { Api } from '../../services/api.service';

export const test = base.extend({
    api: async ({ request }, use) => {
        const headers = {
            'Authorization': `${process.env.API_TOKEN}`,
        };
        const api = new Api(request, headers);
        await use(api);
    }
});