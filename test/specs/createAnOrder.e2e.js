/* Test run with npm run wdio to check everythings working
describe('My locators application', () => {
    it('should have locators', async () => {
        //css locators
        await browser.url(`https://cnt-25a16d8d-49f2-4698-886f-8a8673a8b556.containerhub.tripleten-services.com/`);
                await expect($('.dst-picker')).toBeExisting();
        await expect($('#root')).toBeExisting();
        await expect($('label')).toBeExisting();
        await expect($('[alt="Routes"]')).toBeExisting();
        //xpath locators
        await expect($('//a')).toBeExisting();
        await expect($('//input[@type="text"]')).toBeExisting();
        await expect($('//form/div[1]/div[2]')).toBeExisting();
        await expect($('//*[@class="input-container"]')).toBeExisting();
        await expect($('//div[@class="logo"]//img')).toBeExisting();
        await expect($('//div[@class="input-container"]//input[@id="from"]')).toBeExisting();
        await expect($('//label[contains(text(), "From")]')).toBeExisting();
        await expect($('//label[starts-with(text(), "F")]')).toBeExisting();
    })
})  */

 const page = require('../../page');
const helper = require('../../helper')

describe('Create an order', () => {
    /* it('should open phone number modal', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        await browser.pause(2000);
        const phoneNumberButton = await $(page.phoneNumberButton);
        await phoneNumberButton.waitForDisplayed();
        await phoneNumberButton.click();
        const phoneNumberModal = await $(page.phoneNumberModal);
        await expect(phoneNumberModal).toBeExisting();
    })

    it('should select supportive plan', async () => {
        await browser.url(`/`);
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        await browser.pause(2000);
        const supportiveButton = await $(page.supportiveButton);
        await supportiveButton.click();
       
        await expect(supportiveButton).toBeExisting();

    })

    it('should save the phone', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        const phoneNumber = helper.getPhoneNumber("+1");
        await page.submitPhoneNumber(phoneNumber);
        await expect(await helper.getElementByText(phoneNumber)).toBeExisting();
        await browser.pause(10000);
    }) */

   /* it('should add credit card', async () => {
        //NEED TO AUTOMATE CARD NUM AND CVV
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        const phoneNumber = helper.getPhoneNumber("+1");
        await page.submitPhoneNumber(phoneNumber);
        
        await browser.pause(2000);
        const paymentMethodButton = await $(page.paymentMethodButton);
        await paymentMethodButton.waitForDisplayed();
        await paymentMethodButton.scrollIntoView();
        await paymentMethodButton.waitForClickable();
        await paymentMethodButton.click();
        const paymentModal = await $(page.paymentModal);
        await paymentModal.waitForDisplayed();
       
        
        const addCardButton = await $(page.addCardButton);
        await addCardButton.click();
        const addingCardModal = $(page.addingCardModal);
        //await expect(addingCardModal).toBeExisting();

        const cCNumberField = $(page.cCNumberField);
        await cCNumberField.click();
       // const cCNumber = $(helper.getCreditCardNumber);
        //const cCNumberString = cCNumber.toString();
        
        await browser.pause(2000);
        await cCNumberField.setValue("1234561232345234");
        
        await browser.pause(1000);
        // CVV Field
       
       const cVVField = $(page.cVVField); 
       await cVVField.waitForClickable;
        await cVVField.click();
       
        await cVVField.setValue("48");
        await browser.pause(1000);
        const rootClick = $(page.root);
        await rootClick.click();
        
        
        const linkCardButton = $(page.linkCardButton);
        await browser.pause(2000);
        await linkCardButton.click();
        await browser.pause(1000);
        
       const closeButton = $(page.closeButton);
        await closeButton.click();


        

    }) */

    

  /* it('should write a message to driver', async () => {
    await browser.url(`/`)
     await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
     await browser.pause(2000);

    const driverMessage = $(page.driverMessage);
    await driverMessage.scrollIntoView();
    await driverMessage.setValue("Thanks Driver!");
    expect(driverMessage).toHaveText();
    

    await browser.pause(3000);
}) */

/*it('should order Blanket And Hankerchief', async () => {
    await browser.url(`/`)
     await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
     await browser.pause(2000);
     const supportiveButton = await $(page.supportiveButton);
     await supportiveButton.click();
     const orderReqs = $(page.orderReqs);
     await orderReqs.scrollIntoView();
     await orderReqs.click();
     await browser.pause(10000);
     const blanketHankey = $(page.blanketHankey);
   await expect(blanketHankey).toBeChecked();
    

    await browser.pause(3000);
})
*/
/*
it('should order 2 ice creams', async () => {
    await browser.url(`/`)
     await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
     await browser.pause(2000);
     const supportiveButton = await $(page.supportiveButton);
     await supportiveButton.click();
     const orderReqs = $(page.orderReqs);
     await orderReqs.scrollIntoView();
     await orderReqs.click();
     await browser.pause(3000);
     const blanketHankey = $(page.blanketHankey);
   await expect(blanketHankey).toBeChecked();

   //ice creams order
   const iceCreamCounter = $(page.iceCreamCounter);
   await iceCreamCounter.click();
   await iceCreamCounter.click();
    await browser.pause(3000);
})
*/

it('should order open car search modal', async () => {
    await browser.url(`/`)
     await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
     await browser.pause(2000);
     const supportiveButton = await $(page.supportiveButton);
     await supportiveButton.click();
     const orderReqs = $(page.orderReqs);
     await orderReqs.scrollIntoView();
     await orderReqs.click();
     await browser.pause(3000);
     const blanketHankey = $(page.blanketHankey);
   await expect(blanketHankey).toBeChecked();

   //ice creams order
   const iceCreamCounter = $(page.iceCreamCounter);
   await iceCreamCounter.click();
   await iceCreamCounter.click();
    await browser.pause(3000);
})

}) 

/*
Tests should cover the following:

+Setting the address
+Selecting Supportive plan
+Filling in the phone number
++++??Adding a credit card (Tip: the “link” button doesn’t become active until the card CVV field on the “Adding a card” modal id=”code” class=”card-input” loses focus. To change focus you can simulate the user pressing TAB or clicking somewhere else on the screen).
+Writing a message for the driver
+Ordering a Blanket and handkerchiefs (Tip: there are two selectors to be aware of here. One selector to click on and one to run expect on to verify that the state changed).
+Ordering 2 Ice creams
The car search modal appears
Waiting for the driver info to appear in the modal (optional) In addition to the steps above there is an optional step you can check. This one is a bit more tricky than the others but it’s good practice since you will likely encounter more difficult tasks in your career.

TO DO: Write functions to remove redundancies.
*/

