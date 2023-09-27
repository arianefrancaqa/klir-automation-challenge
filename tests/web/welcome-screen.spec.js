import { test, expect } from '@playwright/test';
import { faker } from "@faker-js/faker"

let fakeName = faker.person.firstName();

const webUrl = 'http://localhost:3000/';

test('has_title', async ({ page }) => {
  await page.goto(`${webUrl}`);

  await expect(page).toHaveTitle(/Klir Interview Project/);
});

test('has_instructions', async ({ page }) => {
  await page.goto(`${webUrl}`);

  const instructions = page.getByText('Please provide your name:');

  await expect(instructions).toBeVisible();
});

test('has_welcome', async ({ page }) => {
  await page.goto(`${webUrl}`);

  const welcome = page.getByText('Welcome to Water Customer App');

  await expect(welcome).toBeVisible();
});


test('submit_with_success', async ({ page }) => {
  await page.goto(`${webUrl}`);
  await page.locator("#name").fill(fakeName);
  await page.getByRole('button').click();
  const employeesNum = page.getByText('# of Employees');
  await expect(employeesNum).toBeVisible();
});

test('submit_with_failure', async ({ page }) => {
  await page.goto(`${webUrl}`);
  await page.getByRole('button').click();

  page.on('dialog', async dialog => {
    expect(dialog.type()).toContain('alert');
    expect(dialog.message()).toContain('Please provide your name');
  });
});