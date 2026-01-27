import{test,firefox,webkit, expect}from'@playwright/test'; 

test('Verify Red Bus URL & Title in firefox browser',async()=>{

    const browser=await firefox.launch({headless:false});
    const context=await browser.newContext();
    const page=await context.newPage();
    await page.goto('https://www.redbus.in/');
    const title=await page.title();
    console.log('Title of the page is: '+title);
    expect(title).toBe('redBus: Bus Tickets from ₹299 and up to 50% off train tickets')
    const url=page.url();
    console.log('URL of the page is: '+url);
    expect(url).toBe('https://www.redbus.in/');
    await page.waitForTimeout(3000);
    await browser.close();
})

test('Verify Flipkart URL & Title in webkit browser',async()=>{

    const browser=await webkit.launch({headless:false});
    const context=await browser.newContext();
    const page=await context.newPage();
    await page.goto('https://www.flipkart.com/');
    const title=await page.title();
    console.log('Title of the page is: '+title);
    expect(title).toBe('Online Shopping India Mobile, Cameras, Lifestyle & more Online @ Flipkart.com')
    const url=page.url();
    console.log('URL of the page is: '+url);
    expect(url).toBe('https://www.flipkart.com/');
    await page.waitForTimeout(3000);
    await browser.close();
})