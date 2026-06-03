export class EditArticlePage {
    constructor(page) {
        this.page = page;
        this.articleTitle = page.getByRole("textbox", { name: "Article Title" });
        this.updateButton = page.getByRole("button", {name: "Update Article"});
    }
    async updateArticle(title) {
        await this.articleTitle.clear();
        await this.articleTitle.fill(title);
        await this.updateButton.click();
    }
}