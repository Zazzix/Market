import { test } from '../../src/helpers/fixtures/app.fixture';
import { expect } from '@playwright/test';
import { UserBuilder, ArticleBuilder } from '../../src/helpers/builder/index';

test('User can register with a valid data', async ({ registeredApp }) => {
    const { app, user } = registeredApp;
    
    await expect(app.feed.getProfileName()).toContainText(user.username);
});