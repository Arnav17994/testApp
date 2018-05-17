// javascript

const webdriverio = require('webdriverio');

const options = {
  port: 4723,
  desiredCapabilities: {
    platformName: "Android",
    platformVersion: "8.1.0",
    deviceName: "Android Emulator",
    app: "/home/itachi/testApp/android/app/build/outputs/apk/app-release.apk",
    automationName: "UiAutomator2"

  }
};


webdriverio
  .remote(options)
  .init()
  // .orientation("LANDSCAPE")
  // .source()
  // .timeoutsImplicitWait(5000)
  .element('~Tap to proceed to next screen')
  // .element("#Tap here to enter User Name")
  // .setValue("~Tap here to enter User Name", "Avinash")
  .end();

