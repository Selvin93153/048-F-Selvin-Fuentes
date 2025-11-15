import { test, expect } from "@playwright/test";

test("CP01 - Actualizar perfil con datos válidos", async ({ page }) => {
  await page.goto("https://buggy.justtestit.org/");
  await page.setViewportSize({ width: 710, height: 735 });

  // Login
  await page.fill('input[placeholder="Login"]', "tuUsuario");
  await page.fill('input[type="password"]', "tuPassword");
  await page.click('button.btn-success');
  await expect(page.locator('a[href="/profile"]')).toBeVisible();

  // Ir a perfil
  await page.click('a[href="/profile"]');

  // Completar datos válidos
  await page.fill('#firstName', 'Juan');
  await page.fill('#lastName', 'Perez');
  await page.fill('#address', 'Guatemala');
  await page.fill('#phone', '555555');
  await page.selectOption('#hobby', 'Running');

  // Guardar
  await page.click('button.btn-default');

  // Validación
  await expect(page.locator('.result')).toHaveText("Profile saved");
});
