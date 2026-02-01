import {test,expect} from '@playwright/test';

test('Book Movie Ticket in PVR Cinemas',async ({page}) => {

    //Launch the browser
    await page.goto('https://www.pvrcinemas.com/');
    await page.waitForLoadState('domcontentloaded');
    console.log(`Page Title is : ${await page.title()}`);
    await expect(page).toHaveTitle("PVR Cinemas");

    //Select City as Chennai
    //await page.locator(`span.p-dropdown-label span.cities-placed`).click();
    //await page.locator(`//div[@class='cities-names']//span[text()='Chennai']`).click();
    await page.getByRole('heading',{name:"Chennai"}).click()

    //Select the Cinema
    await page.locator(`//span[text()='Cinema']`).click();
    await page.locator(`#cinema`).click();
    await page.locator(`ul.p-dropdown-items li.p-dropdown-item`, {hasText: 'INOX National,Virugambakkam Chennai'}).click();
    await page.locator(`ul.p-dropdown-items li.p-dropdown-item`, {hasText: 'Today'}).click();
    await page.locator(`ul.p-dropdown-items li.p-dropdown-item`, {hasText: 'BORDER 2'}).click();
    await page.locator(`ul.p-dropdown-items li.p-dropdown-item`).nth(1).click();

    //Click on Book
    await page.locator(`//button[@type='submit']`).click();

    //Click on Accept
    await page.locator(`//button[text()='Accept']`).click();

    //Select Seat
    await page.locator(`.seat-current-pvr`).first().click();
    const seatnumber=await page.locator(`.seat-selected-pvr`).innerText();
    const seatseries=await page.locator(`//span[@class='seat-selected-pvr']/parent::td/parent::tr//span`).first().innerText();
    
    const seat=seatseries+seatnumber;
    console.log(`Selected Seat is : ${seat}`);

    //verify Seat Number
    await expect(page.locator(`.seat-number>p`)).toHaveText(seat);

    //verify the Grand Total Amount
    await expect(page.locator(`.grand-prices>h6`)).toHaveText('242.61');

    await page.waitForTimeout(5000);

});