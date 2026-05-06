import { BasketService } from './index';

export class Api {
    constructor(request, headers) {
        this.request = request;
        this.headers = headers;
        this.basket = new BasketService(request, headers);
    }
}