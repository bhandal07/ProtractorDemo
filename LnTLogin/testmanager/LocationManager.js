var LoginPageloc = require("../Locators/LoginPageLoc.js");
var PPCPageLoc = require("../Locators/PPCPageLoc.js");

exports.locationMngfactory = function(filename, locator) {
    switch (filename) {
        case "LoginPage.js":
            return LoginPageloc.pagelocfactory(locator);
            break;
        case "PPCPage.js":
            return PPCPageLoc.pagelocfactory(locator);
            break;
    }
}