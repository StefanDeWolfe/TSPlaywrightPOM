import { expect, type Locator, type Page } from '@playwright/test';

export class ProductsPage {
  readonly page: Page;
  readonly spanProductHeader: Locator;

  constructor(page: Page) {
    this.page = page;
    this.spanProductHeader = this.page.getByTestId("title")
     
  }

  async goto() {
    await this.page.goto(new URL(process.env.URL, '/inventory.html').href);
  }
  async verifyHeader() {
    const productPageHeader  = "Products"
    await expect(this.spanProductHeader).toBeVisible({timeout: 3000});
    await expect(this.spanProductHeader).toHaveText(productPageHeader, {timeout: 3000});
  }
}