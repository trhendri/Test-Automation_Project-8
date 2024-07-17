module.exports = {
    // Inputs
    fromField: '#from',
    toField: '#to',
    phoneNumberField: '#phone',
    codeField: '#code',
    cCNumberField:'#number',
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
    root: '#root',
    closeButton: '.payment-picker .section.active .close-button',
    orderReqs: '.r-sw',
    iceCreamCounter: '.counter-plus',
    
    blanketHankey: '.switch-input',
    
    // Modals
    phoneNumberModal: '.modal',
    paymentModal: '//div[starts-with(text(), "Payment")]',
    addingCardModal: '.head',
    // Functions
    fillAddresses: async function(from, to) {
        const fromField = await $(this.fromField);
        await fromField.setValue(from);
        const toField = await $(this.toField);
        await toField.setValue(to);
        const callATaxiButton = await $(this.callATaxiButton);
        await callATaxiButton.waitForDisplayed();
        await callATaxiButton.click();
    },
    fillPhoneNumber: async function(phoneNumber) {
        const phoneNumberButton = await $(this.phoneNumberButton);
        await phoneNumberButton.waitForDisplayed();
        await phoneNumberButton.click();
        const phoneNumberModal = await $(this.phoneNumberModal);
        await phoneNumberModal.waitForDisplayed()
        const phoneNumberField = await $(this.phoneNumberField);
        await phoneNumberField.waitForDisplayed();
        await phoneNumberField.setValue(phoneNumber);
    },

fillCreditCard: async function(creditCardNumber) {
    const addingCardModal = await $(this.addingCardModal);
    await addingCardModal.waitforDisplayed();
    const cCNumberField = await $(this.cCNumberField);
    await cCNumberField.waitforDisplayed();
    await cCNumberField.click();
    await browser.pause(2000);
    await cCNumberField.setValue(creditCardNumber);
},

submitCreditCard: async function (creditCardNumber) {
    await this.fillCreditCard(creditCardNumber);
    await browser.pause(2000);
    await this.cCNumberField.setValue(creditCardNumber)

},


    submitPhoneNumber: async function(phoneNumber) {
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
        await expect(requests.length).toBe(1)
        const code = await requests[0].response.body.code
        await codeField.setValue(code)
        await $(this.confirmButton).click()
    },

   // fillCreditCard: aync function(credit){

   // }
};

//getCreditCardNumber