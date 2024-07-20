module.exports = {
    
    // Inputs
    fromField: '#from',
    toField: '#to',
    phoneNumberField: '#phone',
    codeField: '#code',
    cCNumberField: '#number',
    cVVField: '.card-second-row #code',
    driverMessage: '#comment',

    // Buttons
    callATaxiButton: 'button=Call a taxi',
    phoneNumberButton: '//div[starts-with(text(), "Phone number")]',
    nextButton: 'button=Next',
    confirmButton: 'button=Confirm',
    supportiveButton: 'div=Supportive',
    paymentMethodButton: '.pp-button',
    addCardButton: '.pp-plus-container',
    linkCardButton: 'button=Link',
    cardConfirmButton: '.pp-value-text',
    root: '#root',
    closeButton: '.payment-picker .section.active .close-button',
    orderReqs: '.r-sw',
    iceCreamCounter: '.counter-plus',
    iceCreamQuantity: '.counter-value',
    counterValue: '.counter-value',
    blanketHankey: '.switch-input',
    enterOrderButton: '.smart-button',

    // Modals
    phoneNumberModal: '.modal',
    paymentModal: '//div[starts-with(text(), "Payment")]',
    addingCardModal: '.head',
    carSearchModal: '.order-progress',
    driverInfoModal: '.order-number',

    // Functions
    fillAddresses: async function (from, to) {
        const fromField = await $(this.fromField);
        await fromField.setValue(from);
        const toField = await $(this.toField);
        await toField.setValue(to);
        const callATaxiButton = await $(this.callATaxiButton);
        await callATaxiButton.waitForDisplayed();
        await callATaxiButton.click();
    },

    selectSupportivePlan: async function () {
        const supportiveButton = $(this.supportiveButton);
        await supportiveButton.click();
    },

    fillPhoneNumber: async function (phoneNumber) {
        const phoneNumberButton = await $(this.phoneNumberButton);
        await phoneNumberButton.waitForDisplayed();
        await phoneNumberButton.click();
        const phoneNumberModal = await $(this.phoneNumberModal);
        await phoneNumberModal.waitForDisplayed()
        const phoneNumberField = await $(this.phoneNumberField);
        await phoneNumberField.waitForDisplayed();
        await phoneNumberField.setValue(phoneNumber);
    },

    submitPhoneNumber: async function (phoneNumber) {
        await this.fillPhoneNumber(phoneNumber);
        // we are starting interception of request from the moment of method call
        await browser.setupInterceptor();
        await $(this.nextButton).click();
        // we should wait for response
        // eslint-disable-next-line wdio/no-pause
        await browser.pause(2000);
        const codeField = await $(this.codeField);
        // collect all responses
        const requests = await browser.getRequests();
        // use first response
        await expect(requests.length).toBe(1);
        const code = await requests[0].response.body.code;
        await codeField.setValue(code)
        await $(this.confirmButton).click()
    },

    addCreditCard: async function (creditCardNumber) {
        // Open Modal
        const paymentMethodButton = await $(this.paymentMethodButton);
        await paymentMethodButton.waitForDisplayed();
        await paymentMethodButton.waitForClickable();
        await paymentMethodButton.click();
        const paymentModal = await $(this.paymentModal);
        await paymentModal.waitForDisplayed();

        // Click Add Card Button
        const addCardButton = await $(this.addCardButton);
        await addCardButton.click();
        //await expect(addingCardModal).toBeExisting();

        // Add Credit Card Number
        const cCNumberField = $(this.cCNumberField);
        await cCNumberField.click();

        await browser.pause(1000);
        await cCNumberField.setValue("1234123412341234");
        await browser.pause(1000);

        //Add CVV Number

        const cVVField = $(this.cVVField);
        await cVVField.waitforClickable;
        await cVVField.click();
        await cVVField.setValue("48");
        await browser.pause(1000);
        const rootClick = $(this.root);
        await rootClick.click();

        //Link Card Button
        const linkCardButton = $(this.linkCardButton);
        await browser.pause(1000);
        await linkCardButton.click();
        await browser.pause(1000);

        const closeButton = $(this.closeButton);
        await closeButton.click();
    },

    writeMessageToDriver: async function () {
        const driverMessage = $(this.driverMessage);
        await driverMessage.scrollIntoView();
        await driverMessage.setValue("Thanks Driver!!!");

    },

    orderBlanketAndHankercheifs: async function () {
        const orderReqs = $(this.orderReqs);
        await orderReqs.scrollIntoView();
        await orderReqs.click();
        await browser.pause(1000);
    },

    orderIceCreams: async function (quantity) {
        const iceCreamCounter = $(this.iceCreamCounter);
        for (let i = 0; i <= quantity; i++) {
            await iceCreamCounter.click();
        }
    },

    submitOrder: async function () {
        const enterOrderButton = $(this.enterOrderButton);
        await enterOrderButton.click();
    }


};

