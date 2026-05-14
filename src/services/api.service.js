import { GroceriesService } from './index';

export class Api {
    constructor(request, headers) {
        this.request = request;
        this.headers = headers;
        this.groceries = new GroceriesService(request, headers);
    }
}