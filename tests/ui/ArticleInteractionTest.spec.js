import { test } from '../../src/helpers/fixtures/app.fixture';
import { expect } from '@playwright/test';
import { UserBuilder, ArticleBuilder } from '../../src/helpers/builder/index';


test('User can register with a valid data', async ({ app }) => {
    await expect(app.feed.getProfileName()).toContainText('New Article');
});

test('User can write an article', async ({ app }) => {
    const article = new ArticleBuilder().withTitle().withDescription().withBody().withTag().build();

    await app.newarticle.createArticle();
    await app.newarticle.publishArticle(article);
    await expect(app.postedarticle.getArticleTitle()).toContainText(article.title);
});

test('User can comment own article', async ({ app }) => {
    const article = new ArticleBuilder().withTitle().withDescription().withBody().withTag().build();

    const newComment = new ArticleBuilder().withComment().build();

    await app.newarticle.createArticle();
    await app.newarticle.publishArticle(article);
    await app.postedarticle.leaveComment(newComment.comment);
    await expect(app.postedarticle.getCommentText()).toContainText(newComment.comment);
});

test('User can delete own comment', async ({ app }) => {
    const article = new ArticleBuilder().withTitle().withDescription().withBody().withTag().build();

    const newComment = new ArticleBuilder().withComment().build();

    await app.newarticle.createArticle();
    await app.newarticle.publishArticle(article);
    await expect(app.postedarticle.getCommentText()).not.toBeVisible();
    await app.postedarticle.leaveComment(newComment.comment);
    await expect(app.postedarticle.getCommentText()).toBeVisible();
    await app.postedarticle.deleteComment();
    await expect(app.postedarticle.getCommentText()).not.toBeVisible();
});

test('User can edit article', async ({ app }) => {
    const article = new ArticleBuilder().withTitle().withDescription().withBody().withTag().build();

    const newTitle = new ArticleBuilder().withTitle().build();

    await app.newarticle.createArticle();
    await app.newarticle.publishArticle(article);
    await expect(app.postedarticle.getArticleTitle()).toContainText(article.title);
    await app.postedarticle.editArticle();
    await app.editpage.updateArticle(newTitle.title);
    await expect(app.postedarticle.getArticleTitle()).toContainText(newTitle.title);
});


test('User can delete an article', async ({ app }) => {
    const article = new ArticleBuilder().withTitle().withDescription().withBody().withTag().build();

    await app.newarticle.createArticle();
    await app.newarticle.publishArticle(article);
    await expect(app.postedarticle.getArticleTitle()).toContainText(article.title);
    await app.postedarticle.deleteArticle();
    await expect(app.feed.getArticleFeed()).toContainText("Articles not available.");
    await app.profile.openProfile();
    await expect(app.profile.getArticlesList()).toContainText("doesn't have articles.");
});