const { test, expect } = require('@playwright/test');

const MOBILE = { width: 375, height: 667 };
const DESKTOP = { width: 1280, height: 800 };

test.describe('Burger-Menü — Mobile', () => {
  test.use({ viewport: MOBILE });

  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('Burger-Button ist sichtbar', async ({ page }) => {
    await expect(page.locator('.burger')).toBeVisible();
  });

  test('Navigation ist standardmäßig ausgeblendet', async ({ page }) => {
    await expect(page.locator('#main-nav')).not.toBeVisible();
  });

  test('Klick öffnet das Menü', async ({ page }) => {
    await page.locator('.burger').click();
    await expect(page.locator('#main-nav')).toBeVisible();
  });

  test('aria-expanded wechselt beim Öffnen auf "true"', async ({ page }) => {
    const burger = page.locator('.burger');
    await expect(burger).toHaveAttribute('aria-expanded', 'false');
    await burger.click();
    await expect(burger).toHaveAttribute('aria-expanded', 'true');
  });

  test('zweiter Klick schließt das Menü', async ({ page }) => {
    const burger = page.locator('.burger');
    await burger.click();
    await expect(page.locator('#main-nav')).toBeVisible();
    await burger.click();
    await expect(page.locator('#main-nav')).not.toBeVisible();
    await expect(burger).toHaveAttribute('aria-expanded', 'false');
  });

  test('Klick auf Nav-Link schließt das Menü', async ({ page }) => {
    await page.locator('.burger').click();
    await expect(page.locator('#main-nav')).toBeVisible();
    // Click the first nav link
    await page.locator('#main-nav a').first().click();
    await expect(page.locator('#main-nav')).not.toBeVisible();
    await expect(page.locator('.burger')).toHaveAttribute('aria-expanded', 'false');
  });

  test('alle Nav-Links sind im geöffneten Menü sichtbar', async ({ page }) => {
    await page.locator('.burger').click();
    const links = page.locator('#main-nav a');
    await expect(links).toHaveCount(5);
    for (let i = 0; i < 5; i++) {
      await expect(links.nth(i)).toBeVisible();
    }
  });
});

test.describe('Burger-Menü — Desktop', () => {
  test.use({ viewport: DESKTOP });

  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('Burger-Button ist nicht sichtbar', async ({ page }) => {
    await expect(page.locator('.burger')).not.toBeVisible();
  });

  test('Navigation ist direkt sichtbar', async ({ page }) => {
    await expect(page.locator('#main-nav')).toBeVisible();
  });

  test('alle Nav-Links sind sichtbar', async ({ page }) => {
    const links = page.locator('#main-nav a');
    await expect(links).toHaveCount(5);
    for (let i = 0; i < 5; i++) {
      await expect(links.nth(i)).toBeVisible();
    }
  });
});
