import {expect as chaiExpect} from 'chai';

describe('Validate if the homepage gets displayed', function() {
    it('Given the HD app is displayed and user clicks on Prod button', function() {
        console.log("Hello World");
        const PROD_BTN = '//hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.Button[2]';
        // expect ($(PROD_BTN)).toBeDisplayed();
        // chaiExpect(2).to.equal(2);
        $(PROD_BTN).click();
        browser.pause(1000);
    });

    it('And I allow the HD app to access the device location', function() {
        const ALLOW_ACCESS = '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.Button[2]';
        $(ALLOW_ACCESS).click();       
    });    

    it('And I validate that the homepage is displayed', function() {    
        console.log("Homepage is displayed");
        // const handle = driver.getTitle();
        // console.log("The title of the app is" + handle);
        const HP_TXT = '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/androidx.drawerlayout.widget.DrawerLayout/android.widget.FrameLayout/android.widget.RelativeLayout[2]/android.widget.TextView';
        $(HP_TXT).click();                        
        //expect ($(HP_TXT)).toBeDisplayed();
    });


});