import { test, expect } from '../fixtures/test';
import loginTestData from '../test-data/login.json';
import { generateRandomString } from '../utils/randomString';

test.describe('OrangeHRM login flow', () => {
  test.beforeEach(async ({ loginPage }) => {
    await loginPage.open();
  });

  test('login with valid credentials', async ({ loginPage }) => {
    const username = process.env.APP_USERNAME;
    const password = process.env.APP_PASSWORD;
    if (!username || !password) {
      throw new Error('APP_USERNAME and APP_PASSWORD must be set in .env or the environment.');
    }

    await loginPage.login(username, password);
    await expect(loginPage.profilePicture).toBeVisible();

    await loginPage.logout();
    await expect(loginPage.loginButton).toBeVisible();
  });

  test('login with invalid credentials', async ({ loginPage }) => {
    const { username, expectedMessage } = loginTestData.invalidLogin;
    const password = generateRandomString();

    await loginPage.login(username, password);
    await expect(loginPage.invalidCredentialsMessage).toHaveText(expectedMessage);
  });
});
