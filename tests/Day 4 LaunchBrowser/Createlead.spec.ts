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
await page.locator('#createLeadForm_personalTitle').fill('Mr'); 
await page.locator('#createLeadForm_generalProfTitle').fill('Automation Tester');
await page.locator('#createLeadForm_annualRevenue').fill('1000000'); 
await page.locator('#createLeadForm_departmentName').fill('Testing'); 
await page.locator('#createLeadForm_primaryPhoneNumber').fill('9876543210'); 
await page.locator('//input[@name="submitButton"]').click(); 




})