const path = require('path');
const fs = require('fs');
var LocationManager = require('../testmanager/LocationManager.js');
var CommonLibrary = require('../CommonUtils/CommonLibrary.js');

exports.Logout=function ()
{
    // CommonLibrary.waitForElementToBeAppear(browser.element(LM('titlePath')),'TitlePath',30000).then(function()
    // {
      browser.sleep(30000);
      browser.element(LM('LogoutButton')).click();
      console.log("Logged out")
      CommonLibrary.waitForElementToBeDisappear(browser.element(LM('titlePath')),'titlepath',40000);
    // })
    // var title= element(by.xpath("/*[@class='col-6 pl-4 title']"));
    //var title= browser.element(LM("/*[@class='col-6 pl-4 title']"));
    // browser.wait(EC.presenceOf(title), 30000);
    // expect(title.isPresent()).toBeTruthy();
    // expect(title.getText()).toEqual('Power Plant Controller');
    // browser.element(LM('LogoutButton')).click();
}
exports.ConfirmLoginUI=function (){

    CommonLibrary.waitForElementToBeAppear(browser.element(LM('titlePath')),'TitlePath',30000).then();
}


var LM = function call_LM(id) {
    var path = require('path');
    return (LocationManager.locationMngfactory(path.basename(__filename), id));
}
