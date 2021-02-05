describe('webdriver.io page', () => {

    before(function () {
        console.log("Before test case");
    });

    after(function () {
        console.log("After test case");
    });

    it('Check the webdriverIO page title', () => {
        console.log("This is the first test case");
        //browser.url('https://webdriver.io');
        //expect(browser).toHaveTitle('WebdriverIO · Next-gen browser and mobile automation test framework for Node.js');
    });

    it('Sample second describe block', () => {
        console.log("This is the second test case");
    });
});
