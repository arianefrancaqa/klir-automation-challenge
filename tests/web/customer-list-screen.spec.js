import { test, expect } from '@playwright/test';
import { faker } from "@faker-js/faker"

let fakeName = faker.person.firstName();
const webUrl = 'http://localhost:3000/';


test('list_information_displayed', async ({ page }) => {
    await page.goto(`${webUrl}`);
    await page.locator("#name").fill(fakeName);
    await page.getByRole('button').click();

    const employeesNumColumn = page.getByText('# of Employees');
    await expect(employeesNumColumn).toBeVisible();
    const nameColumn = page.getByText('Name');
    await expect(nameColumn).toBeVisible();
    const sizeColumn = page.getByText('Size');
    await expect(sizeColumn).toBeVisible();
});