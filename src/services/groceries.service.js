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
        const response = await this.request.post('/api/groceries',
            {
                headers: this.headers,
                data: product
            }
        );
        return response;
    }
    async filterGroceries() {
        const response = await this.request.get('/api/groceries/filter?category=meat-seafood, dairy-eggs',
            {
                headers: this.headers
            }
        );
        return response;
    }

    async updatePrice(id, price) {
        const response = await this.request.put(`/api/groceries/${id}`,
            {
                headers: this.headers,
                data: {
                    price: price
                }
            }
        );
        return response;
    }
}