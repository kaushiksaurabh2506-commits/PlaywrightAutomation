import{test}from'@playwright/test';

test('Create Lead',async({page})=>{

await page.goto('http://leaftaps.com/opentaps/control/main');
await page.locator('#username').fill('Demosalesmanager');
await page.locator('#password').fill('crmsfa');
await page.locator('//input[@class="decorativeSubmit"]').click();
await page.waitForTimeout(3000);
await page.locator('//div[@id="button"]//a//img').click();
await page.locator('//a[text()="Leads"]').click();
await page.locator('//a[text()="Create Lead"]').click();
await page.locator('#createLeadForm_companyName').fill('TestLeaf');
await page.locator('#createLeadForm_firstName').fill('Saurebh');
await page.locator('#createLeadForm_lastName').fill('Kaushikk');

const dropdown=page.locator(`//select[@id="createLeadForm_currencyUomId"]/option`);
const dropdowncount=await dropdown.count();

for(let i=0;i<dropdowncount;i++){

    console.log(await dropdown.nth(i).innerText());

}
await page.waitForTimeout(3000);
}
)