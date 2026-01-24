import{test}from'@playwright/test';

test('Launch Browser Test',async({page})=>{

    
    await page.goto('https://www.amazon.in/');
    await page.waitForTimeout(3000);
    await page.goto('https://www.flipkart.com/');
    await page.waitForTimeout(3000);
    await page.close();
    

})