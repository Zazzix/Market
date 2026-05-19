import { EditArticlePage, MainPage, NewArticlePage, PostedArticlePage, ProfilePage, RegisterPage, YourFeedPage } from "./index";

export class App {
    constructor(page) {
        this.page = page;
        this.editpage = new EditArticlePage(page);
        this.newarticle = new NewArticlePage(page);
        this.main = new MainPage(page);
        this.postedarticle = new PostedArticlePage(page);
        this.profile = new ProfilePage(page);
        this.register = new RegisterPage(page);
        this.feed = new YourFeedPage(page);
    }
}