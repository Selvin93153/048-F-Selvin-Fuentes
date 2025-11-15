import { test, expect } from "@playwright/test";

test("CP03 - Validar error cuando el apellido está vacío", async ({ page }) => {
  await page.goto("https://buggy.justtestit.org/");
  await page.setViewportSize({ width: 710, height: 735 });

  // Login
  await page.fill('input[placeholder="Login"]', "tuUsuario");
  await page.fill('input[type="password"]', "tuPassword");
  await page.click('button.btn-success');
  await expect(page.locator('a[href="/profile"]')).toBeVisible();

  // Ir a perfil
  await page.click('a[href="/profile"]');

  // Dejar apellido vacío
  await page.fill('#lastName', '');

  // Guardar
  await page.click('button.btn-default');

  // Validación
  await expect(page.locator('#lastName-error')).toBeVisible();
});
