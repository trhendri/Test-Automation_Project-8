

const page = require('../../page');
const helper = require('../../helper')

describe('Create an order', () => {
    it('should open phone number modal', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        await browser.pause(2000);

        //Open Phone Number Modal
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

        //Select Supportive Plan
        await page.selectSupportivePlan();
        const supportiveButton = $(page.supportiveButton);
        browser.pause(2000);
        await expect(supportiveButton).toBeEnabled();
    })

    it('should save the phone', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        await page.selectSupportivePlan();

        //Save Phone
        const phoneNumber = helper.getPhoneNumber("+1");
        await page.submitPhoneNumber(phoneNumber);
        await expect(await helper.getElementByText(phoneNumber)).toBeExisting();
        await browser.pause(10000);
    })

    it('should add credit card', async () => {
        //NEED TO AUTOMATE CARD NUM AND CVV
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        await page.selectSupportivePlan();
        const phoneNumber = helper.getPhoneNumber("+1");
        await page.submitPhoneNumber(phoneNumber);
        await browser.pause(2000);

        //Add Card
        await page.addCreditCard();
        await browser.pause(3000);
        const cardConfirmButton = $(page.cardConfirmButton);
        await expect(cardConfirmButton).toHaveText("Card");
    })



    it('should write a message to driver', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        await page.selectSupportivePlan();
        const phoneNumber = helper.getPhoneNumber("+1");
        await page.submitPhoneNumber(phoneNumber);
        await browser.pause(2000);
        await page.addCreditCard();
        await browser.pause(1000);

        await page.writeMessageToDriver();
        const driverMessage = $(page.driverMessage);
        await expect(driverMessage).toHaveText();    
    })


    it('should order Blanket And Hankerchief', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        await browser.pause(2000);
        await page.selectSupportivePlan();
        await page.selectSupportivePlan();
        const phoneNumber = helper.getPhoneNumber("+1");
        await page.submitPhoneNumber(phoneNumber);
        await browser.pause(2000);
        await page.addCreditCard();
        await browser.pause(1000);
        await page.writeMessageToDriver();

        await page.orderBlanketAndHankercheifs();
        const blanketHankey = $(page.blanketHankey);
        await expect(blanketHankey).toBeChecked();
        await browser.pause(3000);
    })


    it('should order 2 ice creams', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        await browser.pause(2000);
        await page.selectSupportivePlan();
        const phoneNumber = helper.getPhoneNumber("+1");
        await page.submitPhoneNumber(phoneNumber);
        await browser.pause(2000);
        await page.addCreditCard();
        await browser.pause(1000);
        await page.writeMessageToDriver();
        await page.orderBlanketAndHankercheifs();

        //ice creams order
        const quantity = 2;
        await page.orderIceCreams(quantity);
        const counterValue = await $(page.counterValue).getText();
         await expect(counterValue).toBe(quantity.toString());
    })


    it('should open car search modal', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        await browser.pause(2000);
        await page.selectSupportivePlan();
        const phoneNumber = helper.getPhoneNumber("+1");
        await page.submitPhoneNumber(phoneNumber);
        await browser.pause(2000);

        await page.addCreditCard();
        await browser.pause(1000);
        await page.writeMessageToDriver();
        await page.orderBlanketAndHankercheifs();
        await page.orderIceCreams(2);

        // Click Enter Order Button
        await page.submitOrder();

        // Wait for car Search Modal to exist
        const carSearchModal = $(page.carSearchModal);
        await carSearchModal.waitForDisplayed();
        browser.pause(3000);
        await expect(carSearchModal).toBeExisting();
    })


    it('should wait for Driver info to appear', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        await browser.pause(2000);
        await page.selectSupportivePlan();
        const phoneNumber = helper.getPhoneNumber("+1");
        await page.submitPhoneNumber(phoneNumber);
        await browser.pause(2000);
        await page.addCreditCard();
        await browser.pause(1000);
        await page.writeMessageToDriver();
        await page.orderBlanketAndHankercheifs();
        await page.orderIceCreams(2);
        await page.submitOrder();

        // Wait for Driver Info 
        const driverInfoModal = $(page.driverInfoModal);
        await browser.pause(30000);
        await driverInfoModal.waitForExist();
        await expect(driverInfoModal).toBeDisplayed();
    })


})

/*
Tests should cover the following:

+Setting the address
+Selecting Supportive plan
+Filling in the phone number
+Adding a credit card (Tip: the “link” button doesn’t become active until the card CVV field on the “Adding a card” modal id=”code” class=”card-input” loses focus. To change focus you can simulate the user pressing TAB or clicking somewhere else on the screen).
+Writing a message for the driver
+Ordering a Blanket and handkerchiefs (Tip: there are two selectors to be aware of here. One selector to click on and one to run expect on to verify that the state changed).
+????Ordering 2 Ice creams
+The car search modal appears
+Waiting for the driver info to appear in the modal (optional) In addition to the steps above there is an optional step you can check. This one is a bit more tricky than the others but it’s good practice since you will likely encounter more difficult tasks in your career.

TO DO: Write functions to remove redundancies.
*/

