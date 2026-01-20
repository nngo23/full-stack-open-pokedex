import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "e2e-tests",
  timeout: 5000,
  webServer: {
    command: "npm run start-prod",
    url: "http://localhost:5000",
    timeout: 60 * 1000,
    reuseExistingServer: false,
  },
  use: {
    baseURL: "http://localhost:5000/",
  },
});
