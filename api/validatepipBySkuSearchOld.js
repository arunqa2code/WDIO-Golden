import {expect as chaiExpect} from 'chai';

describe('Pre-requisites for the script', function() {
    before(function() {
        console.log("Hello World");
        const PROD_BTN = '//hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.Button[2]';
        expect ($(PROD_BTN)).toBeDisplayed();
        chaiExpect(2).to.equal(2);
        $(PROD_BTN).click();

        const ALLOW_ACCESS = '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.Button[2]';
        $(ALLOW_ACCESS).click();       
        const DEVICE_LOCATION = '/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.ScrollView/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.LinearLayout[2]/android.widget.Button[1]';
        $(DEVICE_LOCATION).click();
        browser.pause(1000);

        const TST_ICON = '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.LinearLayout[1]/android.widget.RelativeLayout/android.widget.EditText';
        $(TST_ICON).click();
        const PIN_CODE = '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.LinearLayout[1]/android.widget.RelativeLayout/android.widget.EditText';
        $(PIN_CODE).setValue('M2J2K2');
        driver.pressKeyCode(66);
        browser.pause(5000);

        const STORE = '~SCARBOROUGH #7001';
        $(STORE).click();
        browser.pause(2000);
    });

    it('Given the user enter the SKU and searches for the result', function() {
        const HOMEPAGE_IMG = '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/androidx.drawerlayout.widget.DrawerLayout/android.widget.FrameLayout/android.widget.RelativeLayout[2]/android.widget.ImageView[1]';
        $(HOMEPAGE_IMG).click();
        browser.pause(2000);
        
        const SEARCH_ICON = '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/androidx.drawerlayout.widget.DrawerLayout/android.widget.FrameLayout/android.widget.RelativeLayout/android.widget.RelativeLayout/android.widget.LinearLayout/android.widget.ImageView[1]';
        $(SEARCH_ICON).click();
        browser.pause(3000);
        
        const SEARCH_TXT = '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.widget.RelativeLayout/android.view.ViewGroup[1]/android.widget.RelativeLayout/android.widget.EditText';
        $(SEARCH_TXT).setValue(1000102904);
        browser.pause(1000);
        driver.pressKeyCode(66);
    });

    // it('Then I validate that the PIP page is loaded correctly', function() {    
    //     console.log("PIP page loaded successfully");
    // });

})
