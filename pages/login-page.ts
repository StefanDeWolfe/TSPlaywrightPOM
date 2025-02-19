import { type Locator, type Page } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly txtUsername: Locator;
  readonly txtPassword: Locator;
  readonly btnLogin: Locator;

  constructor(page: Page) {
    this.page = page;
    this.txtUsername = this.page.getByTestId('username')
    this.txtPassword = this.page.getByTestId('password')
    this.btnLogin = this.page.getByTestId('login-button')

  }

  async goto() {
    await this.page.goto(process.env.URL);
  }

  async login(username: string, password: string, ) {
    await this.txtUsername.fill(username) 
    await this.txtPassword.fill(password) 
    await this.btnLogin.click()
  }
}