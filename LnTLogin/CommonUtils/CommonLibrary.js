const path = require('path');
const fs = require('fs');
const upath = require('upath');
// var LoginCredPage = require('../../credentials/LoginCredentials.json');
// var LocationManager = require('../testmanager/LocationManager.js');





exports.waitForElementAndClick = function (object, objectName, timeTowait, isSnapRequired) {
    if (timeTowait == undefined)
        timeTowait = 30000;
    return browser.wait(EC.elementToBeClickable(object), timeTowait).then(function () {
        console.log(objectName + " : successfully showing on application",objectName+"_ExistsAndClickable");
        //self.consoleLogWithScreenShot(objectName + " : successfully showing on application",objectName+"_ExistsAndClickable");
        return object.click().then(function () {
     //       self.consoleLogWithScreenShot("Clicked/Selected on : " + objectName + " UI element", "ClickedOn_" + objectName, isSnapRequired);
            return true;
        }, function (error) {
    //        self.failReport("Error while clicking on : " + objectName + ", Error : " + error, "IssueWhileClickingOn_" + objectName);
            return false;
        });
    }, function (error) {
    //    self.failReport("Error/timeout while checking the clickable property of : " + objectName + ", Error : " + error, objectName + "_Not_Clickable");
        return false;
    });
};
//
//
// exports.newbrowser = function () {
//     browserinstance = browser.forkNewDriverInstance();
//     browserinstance.manage().window().maximize();
//     browserinstance.manage().deleteAllCookies();
//     return browserinstance;
// };
//
// exports.resetbrowser = function () {
//     //browserinstance = browser;
//     browser = browserinstance;
//     return browserinstance;
// };
//
// exports.swtichTobrowser = function (browserInst) {
//     browserinstance = browserInst;
//     return browserinstance;
// };
//
// exports.swtichToTab = function (TabNo) {
//
//     browserinstance.getAllWindowHandles().then(function (handles) {
//         browserinstance.switchTo().window(handles[TabNo]);
//     });
// };
//
// exports.closebrowser = function () {
//     console.log("browser closed");
//     //browserinstance.close();
// }
//
// exports.backbrowser = function () {
//     browserinstance.navigate().back();
//
// }
//
//
// exports.validateText = function (object, objectName, ExpectedText) {
//     return object.getText().then(function (ActualText) {
//         expect(ActualText).toContain(ExpectedText);
//     }, function (error) {
//         fail("Error while checking the visibility of : " + objectName + ", Error : " + error);
//         return false;
//     });
// };
// exports.isElementDisplayed = function (object, objectName) {
//
//     return object.isDisplayed().then(function (isPresent) {
//         return isPresent;
//     });
// };

exports.waitForElementToBeDisappear = function (object, objectName, timeTowait) {
    return browser.wait(global.EC.invisibilityOf(object), timeTowait).then(function () {
        console.log(objectName + " : successfully disappear or doesn't exist on application", objectName + "_Disappeared")
       // self.consoleLogWithScreenShot(objectName + " : successfully disappear or doesn't exist on application", objectName + "_Disappeared", isSnapRequired);
        return true;
    }, function (error) {
        fail(objectName + " : successfully disappear or doesn't exist on application", objectName + "_Disappeared")
        return false;
    });
};

exports.waitForElementToBeAppear = function (object, objectName, timeTowait) {
    return browser.wait(EC.visibilityOf(object), timeTowait).then(function () {
        browser.actions().mouseMove(object).perform();
        console.log(objectName + " : showing on application", objectName + "_ShowingOnUI")
       // self.consoleLogWithScreenShot(objectName + " : showing on application", objectName + "_ShowingOnUI", isSnapRequired);
        return true;
    }, function (error) {
        fail("Either PPC App page not loaded or check for any other issue : "+error)
      //  self.consoleLogWithScreenShot("Error while checking the visibility of : " + objectName + ", Error : " + error, "UnableToFind_" + objectName, isSnapRequired);
        return false;
    });
};

exports.isObjEnabled = function (objLocatorBy, objectName, boolIsSnapRequired) {
    return browserinstance.element(objLocatorBy).isEnabled().then(function (enabled) {
        self.consoleLogWithScreenShot(objectName + " is enabled:" + enabled, objectName + " enabled : " + enabled, boolIsSnapRequired);
        return enabled;
    }, function (error) {
        self.failReport("Error while checking enable property of : " + objectName + ", Error : " + error);
        return false;
    });
};

// var LM = function call_LM(id) {
//     var path = require('path');
//     return (LocationManager.locationMngfactory(path.basename(__filename), id));
// }
