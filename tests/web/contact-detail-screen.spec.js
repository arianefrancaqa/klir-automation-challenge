import { test, expect } from '@playwright/test';
import { faker } from "@faker-js/faker"

let fakeName = faker.person.firstName();
const webUrl = 'http://localhost:3000/';


test('custom_detailed_information_displayed', async ({ page }) => {
    await page.goto(`${webUrl}`);
    await page.locator("#name").fill(fakeName);
    await page.getByRole('button').click();

    const cutomerLA = page.getByText('Los Angels Water');
    await expect(cutomerLA).toBeVisible();
    await cutomerLA.click();

    await expect(page.getByText('Customer Details')).toBeVisible();
    await expect(page.getByText('Los Angels Water')).toBeVisible();
    await expect(page.getByText('5050')).toBeVisible();
    await expect(page.getByText('Big')).toBeVisible();
    await expect(page.getByText('Anakin Skywalker')).toBeVisible();
});

test('no_contact_info_message', async ({ page }) => {
    await page.goto(`${webUrl}`);
    await page.locator("#name").fill(fakeName);
    await page.getByRole('button').click();

    const cutomerDenver = page.getByText(`Denver's Water`);
    await expect(cutomerDenver).toBeVisible();
    await cutomerDenver.click();

    await expect(page.getByText('No contact info available')).toBeVisible();
});


test('back_to_the_list_button_should_work', async ({ page }) => {
    await page.goto(`${webUrl}`);
    await page.locator("#name").fill(fakeName);
    await page.getByRole('button').click();

    const cutomerLA = page.getByText('Los Angels Water');
    await expect(cutomerLA).toBeVisible();
    await cutomerLA.click();
    page.getByRole('button').click()

    await expect(page.getByText(`San Francisco's Water`)).toBeVisible();
});