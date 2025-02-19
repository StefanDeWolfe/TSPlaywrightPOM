import { expect, type Locator, type Page } from '@playwright/test';

export class CheckoutPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto(new URL(process.env.URL, '/checkout-step-one.html').href); 
    // https://www.saucedemo.com/checkout-step-two.html
    // https://www.saucedemo.com/checkout-complete.html
  }
}