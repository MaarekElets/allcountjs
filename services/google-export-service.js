var request = require('request');
var Q = require('q');

module.exports = function () {
    return {
        exportToSpreadsheet: function (googleWebAppUrl, fileName, dataSource, templateId, folderId) {
            return Q.nfbind(request)(googleWebAppUrl, {method: "POST", json: true, followAllRedirects: true, body: {
                fileName: fileName,
                templateId: templateId,
                folderId: folderId,
                dataSource: dataSource
            }}).then(function (result) {
                return result[1];
            })
        }
    }
};