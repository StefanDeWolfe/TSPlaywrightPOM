# PlaywrightExample
This is an example of a Playwright test framework project

# Example website
https://www.saucedemo.com/

# Run test commands
Some comamnds to run to see if its working
```
npx playwright test [test file]
npx playwright test login.spec.js --project firefox --headed
npx playwright test -g "login page visibile"
npx playwright test -g "standard user login" --project firefox --headed
```
How I set this up (for future me).
```
npm init playwright@latest
```
With selection options:
-   Typescript
-   "tests" as test folder
-   No Git (setup later)
-   Yes, Install playwright browsers.

Copy created project into repo
Added "pages" folder for POM
Visited "https://playwright.dev/docs/pom" for POM page example


# Login Test: login.spec.js
Basic login tests.
