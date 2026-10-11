# Playwright UI Automation Framework

This project is a Playwright + TypeScript UI automation framework with a Page Object Model, custom fixtures, environment configuration, and scenario-based login test data.

## Folder structure

- `pages/` - Page Object Model classes. `LoginPage` owns login locators and user actions.
- `tests/` - Test specs and scenario assertions.
- `fixtures/` - Custom Playwright fixtures that provide reusable page objects to tests.
- `test-data/` - Scenario-based invalid-login data in `login.json`.
- `utils/` - Shared helper functions.
- `config/` - Configuration files and environment-specific settings.
- `playwright.config.ts` - Playwright runner configuration.
- `tsconfig.json` - TypeScript compiler configuration.
- `.env` - Local base URL and valid login credentials. This file is ignored by Git.
- `.gitignore` - Ignores dependencies, generated artifacts, and secret files.

## Running the login tests

The valid-login test reads `BASE_URL`, `APP_USERNAME`, and `APP_PASSWORD` from `.env`. Create `.env` in the project root and add those variables with your application's URL and credentials. The invalid-login scenario and expected error text are in `test-data/login.json`; its wrong password is generated at runtime by `utils/randomString.ts`. Keep `.env` private; it is excluded by `.gitignore`.

```powershell
npm test
```

The Playwright configuration loads `.env` before setting the base URL. It runs Chromium in headless mode. To show the browser during a local demo, change `headless: true` to `headless: false` in `playwright.config.ts`; change it back to run headlessly. Screenshots, videos, and traces are recorded for every test run as configured in that file. The login spec uses a `beforeEach` hook to open the login page before every scenario. The custom `loginPage` fixture creates a page object for each test. Assertions stay in the test spec, while page-specific locators and actions stay in `pages/LoginPage.ts`.
