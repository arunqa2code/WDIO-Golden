exports.config = {
    runner: 'local',
    logLevel: 'info',
    coloredLogs: true,
    port: 4723,
    host: 'localhost',
    path: '/wd/hub',
    framework: 'mocha',
    mochaOpts: {
        ui: 'bdd',
        require: ['@babel/register'],
        timeout: 600000
    },
    maxInstances: 1,    
    sync: true,
    specs:[
      //   './testWithMocha.js',
      //   './api/*.js'
         './api/validateHomescreen.js',
      //     './api/validatepipByTextSearch.js'
         './api/validatepipBySkuSearch.js'
      //   './api/validateResetHomescreen.js'
    ],
    capabilities:[{
        platformName: 'android',
        automationName: "UiAutomator2",
        platformVersion: '11',
        deviceName: 'emulator-5554',
        noReset: 'false',
        app: 'C:/Users/AXS3NOV/Downloads/app-qa-firebase.apk',
        appPackage: "com.thehomedepotqa"
        //appActivity: "com.thehomedepotca.view.splash.activity.SplashActivity",
    }],
    reporters: [['allure', {
        outputDir: 'allure-results',
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: true,
    }]]  

    // THE BELOW CONFIG IS FOR THE DEMO APP*****************
    // capabilities:[{
    //     platformName: 'android',
    //     automationName: "UiAutomator2",
    //     platformVersion: '11',
    //     deviceName: 'emulator-5554',
    //     //app: 'C:/Users/AXS3NOV/Downloads/app-qa-firebase.apk',
    //     app: "C:/Users/AXS3NOV/Downloads/ApiDemos-debug.apk",
    //     appPackage: "io.appium.android.apis",
    //     //appActivity: ".view.TextFields"
    // }]
} 