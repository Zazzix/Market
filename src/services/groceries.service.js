import { test, expect } from '@playwright/test';

export class GroceriesService {
    constructor(request, headers) {
        this.request = request;
        this.headers = headers;
    }
    async getAllGroceries() {
        const response = await this.request.get('/api/groceries',
            {
                headers: this.headers
            }
        );
        return response;
    }
    async createProduct(product) {
        //console.log(product);
        const response = await this.request.post('/api/groceries',
            {
                headers: this.headers,
                data: product
            }
        );
        return response;
    }
}