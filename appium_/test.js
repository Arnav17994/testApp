// javascript

const wdio = require('webdriverio');

const opts = {
  port: 4723,
  desiredCapabilities: {
    platformName: "Android",
    platformVersion: "7.0",
    deviceName: "Android Emulator",
    app: "/home/itachi/Downloads/Veris.apk",
    automationName: "UiAutomator2",
    autoGrantPermissions: "true"
  }
};

const client = wdio.remote(opts);

client
.init()
// .toggleAirplaneMode()
.toggleWiFi()

.settings()

// .session('c8db88a0-47a6-47a1-802d-164d746c06aa')
// .timeoutsImplicitWait(5000)
// .setValue("~Tap here to enter User Name", "avinash")
// .setValue("~Tap here to enter Email Id", "password")
// .click("~Tap to proceed to next screen")

  // .click("~SubmitScreen")
.back()
  // .elementActive()
  // .back();
.end()
