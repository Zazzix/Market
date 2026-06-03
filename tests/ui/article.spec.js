import { test } from '../../src/helpers/fixtures/app.fixture';
import { expect } from '@playwright/test';
import { UserBuilder, ArticleBuilder } from '../../src/helpers/builder/index';

test('User can write an article', async ({ registeredApp }) => {
    const { app, user } = registeredApp;

    const article = new ArticleBuilder().withTitle().withDescription().withBody().withTag().build();

    await app.newarticle.createArticle();
    await app.newarticle.publishArticle(article);
    await expect(app.postedarticle.getArticleTitle()).toContainText(article.title);
});

test('User can edit article', async ({ registeredApp }) => {
    const { app, user } = registeredApp;
    const article = new ArticleBuilder().withTitle().withDescription().withBody().withTag().build();

    const newTitle = new ArticleBuilder().withTitle().build();

    await app.newarticle.createArticle();
    await app.newarticle.publishArticle(article);
    await expect(app.postedarticle.getArticleTitle()).toContainText(article.title);
    await app.postedarticle.editArticle();
    await app.editpage.updateArticle(newTitle.title);
    await expect(app.postedarticle.getArticleTitle()).toContainText(newTitle.title);
});


test('User can delete an article', async ({ registeredApp }) => {
    const { app, user } = registeredApp;
    const article = new ArticleBuilder().withTitle().withDescription().withBody().withTag().build();

    await app.newarticle.createArticle();
    await app.newarticle.publishArticle(article);
    await expect(app.postedarticle.getArticleTitle()).toContainText(article.title);
    await app.postedarticle.deleteArticle();
    await expect(app.feed.getArticleFeed()).toContainText("Articles not available.");
    await app.profile.openProfile();
    await expect(app.profile.getArticlesList()).toContainText("doesn't have articles.");
});