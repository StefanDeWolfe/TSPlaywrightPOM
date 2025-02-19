import { expect, type Locator, type Page } from '@playwright/test';

export class MyCartPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto(new URL(process.env.URL, '/cart.html').href);
  }
}