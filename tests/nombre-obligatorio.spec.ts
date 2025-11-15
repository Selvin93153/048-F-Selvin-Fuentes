import { test, expect } from "@playwright/test";

test("CP02 - Validar error cuando el nombre está vacío", async ({ page }) => {
  await page.goto("https://buggy.justtestit.org/");
  await page.setViewportSize({ width: 710, height: 735 });

  // Login
  await page.fill('input[placeholder="Login"]', "tuUsuario");
  await page.fill('input[type="password"]', "tuPassword");
  await page.click('button.btn-success');
  await expect(page.locator('a[href="/profile"]')).toBeVisible();

  // Ir a perfil
  await page.click('a[href="/profile"]');

  // Dejar nombre vacío
  await page.fill('#firstName', '');

  // Guardar
  await page.click('button.btn-default');

  // Validación
  await expect(page.locator('#firstName-error')).toBeVisible();
});
