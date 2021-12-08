
//var LoginCredPage = require(path.resolve(__dirname,'credentials/Logi.js'));

describe("LOGIN TO WEB APP",function () {
    var EC = protractor.ExpectedConditions;

    it("Step_01_Enter the Url", function () {
        browser.waitForAngularEnabled(false);
        browser.get('https://35.170.91.154/ppc-app/#/login')
        browser.element(by.xpath('//*[@id=\'details-button\']')).click();
        browser.sleep(2000);
        browser.element(by.xpath('  //*[@id=\'proceed-link\']')).click();
        browser.waitForAngular();

        //browser.sleep(60000);

    });
    it("Step_02_click Advanced",function () {
        //var advancedXpath='//*[@class=\'secondary-button small-link\']';
        // browser.sleep(1000)
        console.log('URL Loaded');
        //  var EC = protractor.ExpectedConditions;


        var e = element(by.id('username'));
        browser.wait(EC.presenceOf(e), 10000);
        expect(e.isPresent()).toBeTruthy();




        //  var button = $('#xyz');

       // browser.wait(EC.elementToBeClickable(by.id('username')), 5000).then(function().sendKeys('username');

        // var isClickable = EC.elementToBeClickable(advancedXpath);
      //  element(by.xpath(advancedXpath)).click();
        browser.sleep(2000)
       // console.log("Advanced clicked")

    })


    it("Step_03_Enter Username and password",function (){
        browser.element(by.id('username')).sendKeys('admin');
        browser.element(by.id('password')).sendKeys('adminpass123');
        browser.element(by.xpath("//*[@class='btn btn-sm btn-primary mb-3']")).click();

       // var url= browser.getCurrentUrl()
       // console.log(url);
       // browser.waitForAngular();



    })
    it("Step_04_Logout from the application",function (){

       // var e = element(by.id('username'));
       //  browser.wait(EC.presenceOf(e), 10000);
       //  expect(e.isPresent()).toBeTruthy();


        var title= element(by.xpath("/*[@class='col-6 pl-4 title']"));
        browser.wait(EC.presenceOf(title), 30000);
        expect(title.isPresent()).toBeTruthy();
        expect(title.getText()).toEqual('Power Plant Controller');
   browser.element(by.xpath("//*[@class='cursor-pointer base-color-dark']")).click();
   console.log("LogedOut");

/*[@class='col-6 pl-4 title']


//*[@class='cursor-pointer base-color-dark']


 */
    })



})