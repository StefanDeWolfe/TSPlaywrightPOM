import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login-page';
import { ProductsPage } from '../pages/products-page';

test.beforeEach(async ({ page }) => {
  const loginPage = new LoginPage(page)
  await loginPage.goto();
});

test('Login as a standard user', async ({ page }) => {
  const loginPage = new LoginPage(page)
  const productsPage = new ProductsPage(page)
  const username = process.env.USER_NAME ?? "standard_user"
  const password = process.env.PASSWORD ?? "secret_sauce"
  await loginPage.login(username, password)
  await page.waitForLoadState(); // The promise resolves after 'load' event.
  await page.waitForURL('**/inventory.html');
  await productsPage.verifyHeader();
});
