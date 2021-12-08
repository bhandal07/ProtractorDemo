var ids = require('./IDsInjson/LoginID.json');


exports.pagelocfactory = function (id) {
    switch (id) {
        case 'username':
            return by.id(ids.username);
            break;

        case 'password':
            return by.id(ids.password);
            break;
        case 'LoginButton':
            return by.xpath(ids.LoginButton);
            break;
    }
}