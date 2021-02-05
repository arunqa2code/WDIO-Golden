import {expect as chaiExpect} from 'chai';

describe('Validate if the homepage gets displayed', function() {
    it('Given the HD app is displayed and user clicks on Prod button', function() {
        console.log("Hello World");
        const PROD_BTN = '//hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.Button[2]';
        expect ($(PROD_BTN)).toBeDisplayed();
        chaiExpect(2).to.equal(2);
        $(PROD_BTN).click();
    });

    it('And I allow the HD app to access the device location', function() {
        const ALLOW_ACCESS = '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.Button[2]';
        $(ALLOW_ACCESS).click();       
        
        const DEVICE_LOCATION = '/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.ScrollView/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.LinearLayout[2]/android.widget.Button[1]';
        $(DEVICE_LOCATION).click();
        browser.pause(1000);
    });

    it('And I type in the pincode and click on enter', function() {
        const TST_ICON = '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.LinearLayout[1]/android.widget.RelativeLayout/android.widget.EditText';
        $(TST_ICON).click();
        const PIN_CODE = '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.LinearLayout[1]/android.widget.RelativeLayout/android.widget.EditText';
        $(PIN_CODE).setValue('M2J2K2');
        driver.pressKeyCode(66);
        browser.pause(5000);
    });

    it('When I click on the store to localize', function() {    
        const STORE = '~SCARBOROUGH #7001';
        $(STORE).click();
        browser.pause(5000);
    });

    it('Then I validate that the homepage is displayed', function() {    
        console.log("Homepage is diaplayed");
        // const handle = driver.getTitle();
        // console.log("The title of the app is" + handle);
        const HP_TXT = '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/androidx.drawerlayout.widget.DrawerLayout/android.widget.FrameLayout/android.widget.RelativeLayout[2]/android.widget.TextView';
        expect ($(HP_TXT)).toBeDisplayed();
    });
});