const path = require('path');
const fs = require('fs');
var LocationManager = require('../testmanager/LocationManager.js');
var CommonLibrary = require('../CommonUtils/CommonLibrary.js');

exports.logintoapplication=function (url,username,password){
   // browser.ignoreSynchronization = true;
    browser.waitForAngularEnabled(false);
    browser.get(url);

    browser.element(by.xpath('//*[@id=\'details-button\']')).click();
    browser.sleep(2000);
    browser.element(by.xpath('//*[@id=\'proceed-link\']')).click();

    //when protected  please click advanced

    browser.sleep(40000);

    browser.element(LM('username')).sendKeys(username).then(function(){
        console.log(username+" : entered");
    }, function(error){
        fail("Either login page not loaded or check for any other issue : "+error);
    });
    browser.element(LM('password')).sendKeys(password).then(function(){
        console.log(password+" : entered");
    }, function(error){
        fail("Either login page not loaded or check for any other issue : "+error);
    });

    browser.element(LM('LoginButton')).click().then(function(){
        console.log("Login Button Clicked");
    }, function(error){
        fail("Either login page not loaded or check for any other issue : "+error);
    });


}



var LM = function call_LM(id) {
    var path = require('path');
    return (LocationManager.locationMngfactory(path.basename(__filename), id));
}
