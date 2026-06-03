import { test } from '../../src/helpers/fixtures/app.fixture';
import { expect } from '@playwright/test';
import { UserBuilder, ArticleBuilder } from '../../src/helpers/builder/index';

test('User can comment own article', async ({ registeredApp }) => {
    const { app, user } = registeredApp;

    const article = new ArticleBuilder().withTitle().withDescription().withBody().withTag().build();

    const newComment = new ArticleBuilder().withComment().build();

    await app.newarticle.createArticle();
    await app.newarticle.publishArticle(article);
    await app.postedarticle.leaveComment(newComment.comment);
    await expect(app.postedarticle.getCommentText()).toContainText(newComment.comment);
});

test('User can delete own comment', async ({ registeredApp }) => {
    const { app, user } = registeredApp;
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