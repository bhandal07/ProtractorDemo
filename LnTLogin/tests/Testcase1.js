//Login to application and logout

var LoginPage=require('../pages/LoginPage.js')
var PPCPage=require('../pages/PPCPage.js')

var URL=cred.url;
var username=cred.username;
var password=cred.password;
describe("LnT application Login/Logout testcase",function () {

    it("Step_01_Login to the application with the credentials",function () {

        LoginPage.logintoapplication(URL,username,password);
        PPCPage.ConfirmLoginUI();
    })

    it("Step_02_Logout from the application",function () {

        PPCPage.Logout();

    })

})
