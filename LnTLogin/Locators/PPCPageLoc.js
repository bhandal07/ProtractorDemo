var ids = require('./IDsInjson/PPCID.json');

exports.pagelocfactory = function (id) {
    switch (id) {
        case 'LogoutButton':
            return by.xpath(ids.LogoutButton);
            break;
        case 'titlePath':
            return by.xpath(ids.titlePath);
            break;

        }
}