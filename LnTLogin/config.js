// An example configuration file.
var HtmlScreenshotReporter = require('protractor-jasmine2-screenshot-reporter');

var reporter = new HtmlScreenshotReporter({
    dest: 'target/screenshots',
    filename: 'my-report.html'
});

exports.config = {
    directConnect: true,
    allScriptsTimeout: 1200000,
    getPageTimeout: 6000000,
    // Capabilities to be passed to the webdriver instance.
    capabilities: {
        'browserName': 'chrome'
    },
    'chromeOptions': {
        // Get rid of --ignore-certificate yellow warning
        args: ['--no-sandbox', '--test-type=browser', '--disable-extensions', '--disable-plugins', '--disable-gpu', '-disable-popup-blocking', '--pageLoadStrategy=none', '--host-rules=MAP eu-cdn.walkme.com *']
    },
    // Framework to use. Jasmine is recommended.
    framework: 'jasmine',

    // Spec patterns are relative to the current working directory when
    // protractor is called.

    specs: [//'tests/LoginStep.js'
        'tests/Testcase1.js'
    ],

    // Options to be passed to Jasmine.
    jasmineNodeOpts: {
        defaultTimeoutInterval: 150000
    },
    onPrepare: function () {
        var AllureReporter = require('jasmine-allure-reporter');
        jasmine.getEnv().addReporter(new AllureReporter({
            resultsDir: 'allure-results'
        }));
        jasmine.getEnv().addReporter(reporter);
        global.EC = protractor.ExpectedConditions;
        global.cred=require('./LoginCredentials.json');

    },
    // Setup the report before any tests start
    beforeLaunch: function() {
        return new Promise(function(resolve){
            reporter.beforeLaunch(resolve);
        });
    },

    // Assign the test reporter to each running instance

    // Close the report after all tests finish
    afterLaunch: function(exitCode) {
        return new Promise(function(resolve){
            reporter.afterLaunch(resolve.bind(this, exitCode));
        });
    }
};