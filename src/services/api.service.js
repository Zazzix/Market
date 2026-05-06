import { BasketService } from './index';

export class Api {
    constructor(request) {
        this.request = request;
        this.basket = new BasketService(request);
    }
}