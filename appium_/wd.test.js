
const wd = require('wd')

const serverConfig = {
  host: 'localhost',
  port: 4723
}
const desired = {
  platformName: 'Android',
  deviceName: 'Android Emulator',
  platformVersion: "7.0",
  automationName: "UiAutomator2",
  app: "/home/itachi/testApp/android/app/build/outputs/apk/app-release.apk",
  autoGrantPermissions: "true"
}

async function test()
{
  const driver = wd.promiseChainRemote(serverConfig);
  await driver.init(desired);

  for (let i = 0; i < 100; i++)
  {

    driver.setImplicitWaitTimeout(50000);
    let t = await driver.elementByAccessibilityId("Tap here to enter User Name");
    await t.clear();
    await t.type("avinash");

    driver.setImplicitWaitTimeout(50000);
    let t2 = await driver.elementByAccessibilityId("Tap here to enter Email Id")
    await t2.clear();
    await t2.type("password");

    driver.setImplicitWaitTimeout(50000);
    let t3 = await driver.elementByAccessibilityId("Tap to proceed to next screen");
    await t3.click();

    await driver.back();

  }
    await driver.quit();
};

test();
