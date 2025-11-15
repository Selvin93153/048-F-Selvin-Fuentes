import { test, expect } from "@playwright/test";

test("CP04 - Validar error cuando la contraseña no cumple requisitos", async ({ page }) => {
  await page.goto("https://buggy.justtestit.org/");
  await page.setViewportSize({ width: 710, height: 735 });

  // Login
  await page.fill('input[placeholder="Login"]', "tuUsuario");
  await page.fill('input[type="password"]', "tuPassword");
  await page.click('button.btn-success');
  await expect(page.locator('a[href="/profile"]')).toBeVisible();

  // Ir a perfil
  await page.click('a[href="/profile"]');

  // Contraseña inválida
  await page.fill('#password', 'abc123');
  await page.fill('#confirmPassword', 'abc123');

  // Guardar
  await page.click('button.btn-default');

  // Validación
  await expect(page.locator('.result')).toContainText("Password does not meet");
});
