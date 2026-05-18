import { LoginPage, AddProduct, MainPage } from "./index";

export class App {
    constructor(page) {
        this.page = page;
        this.login = new LoginPage(page);
        this.product = new AddProduct(page);
        this.main = new MainPage(page);
    }
}