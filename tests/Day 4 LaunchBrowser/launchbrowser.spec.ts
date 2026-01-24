import{test,chromium,firefox,webkit}from'@playwright/test';

test('Launch Browser Test',async()=>{

    const browsers=await chromium.launch({headless:false});
    const context=await browsers.newContext();
    const page1=await context.newPage();
    const page2=await context.newPage();
    await page1.goto('https://www.amazon.in/');
    await page2.goto('https://www.flipkart.com/');
    await page1.waitForTimeout(3000);
    await page2.waitForTimeout(3000);
    await browsers.close();

})