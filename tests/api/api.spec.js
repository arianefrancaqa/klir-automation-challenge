import { test, expect } from '@playwright/test';
import { faker } from "@faker-js/faker"

let fakeName = faker.person.firstName();

test("post_name_validation", async ({ request, baseURL }) => {
    const response = await request.post(`${baseURL}`, {
        data: {
            name: fakeName
        },
    });
    const respBody = JSON.parse(await response.text())

    let d = new Date();

    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    expect(respBody.name).toEqual(fakeName);
    expect(d.toString()).toContain(respBody.timestamp);
    console.log(await response.json());
});