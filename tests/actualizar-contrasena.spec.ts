import { test, expect } from "@playwright/test";

test("CP05 - Actualizar contraseña válida exitosamente", async ({ page }) => {
  await page.goto("https://buggy.justtestit.org/");
  await page.setViewportSize({ width: 710, height: 735 });

  // Login
  await page.fill('input[placeholder="Login"]', "tuUsuario");
  await page.fill('input[type="password"]', "tuPassword");
  await page.click('button.btn-success');
  await expect(page.locator('a[href="/profile"]')).toBeVisible();

  // Ir a perfil
  await page.click('a[href="/profile"]');

  // Contraseña válida
  await page.fill('#password', 'Test12345!');
  await page.fill('#confirmPassword', 'Test12345!');

  // Guardar
  await page.click('button.btn-default');

  // Validación
  await expect(page.locator('.result')).toHaveText("Password updated successfully");
});
