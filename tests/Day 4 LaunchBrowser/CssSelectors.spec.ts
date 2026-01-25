import{test}from'@playwright/test';

test('Salesforce Testing',async({page})=>{

    
    await page.goto('https://login.salesforce.com/');
    await page.locator('#username').fill('dilipkumar.rajendran@testleaf.com');
    await page.locator('#password').fill('TestLeaf@2025');
    await page.locator('#Login').click();
    const isDisplayed=await page.locator('a[title="Home"]').isVisible();
    if(isDisplayed){
        console.log('Login Successful - Home link is displayed');
    }
    await page.waitForTimeout(5000);
    
    

})
