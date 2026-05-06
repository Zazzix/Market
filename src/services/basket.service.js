import { test, expect } from '@playwright/test';

const UrlApi = "https://www.qacloud.dev"
//const token = "qac_live_64adcfd0-448e-44b3-bcaa-78273a7c88a9"

export class BasketService {
    constructor(request, headers) {
        this.request = request;
        this.headers = headers;
    }
    async getItemsInBasket() {
        const response = await this.request.get('/api/basket',
            {
                headers: this.headers
            }
        );
        return response;
    }
}