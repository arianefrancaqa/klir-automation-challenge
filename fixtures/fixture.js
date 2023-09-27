export class WaterAppPage {

    /**
    * @param {import('@playwright/test').Page} page
    */
    constructor(page) {
        this.page = page;
        this.nameInput = this.page.locator('#name');
        this.button = this.page.getByRole('button');
    }

    /**
     * @param {string} text
     */
    async addNameClickSubmit(text) {
        await this.nameInput.fill(text);
        await this.button.click();
    }

}