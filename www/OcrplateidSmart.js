var exec = require('cordova/exec');

var ocrplateidSmartJs = {
    ocrplateidSmartOpen: function(successCallback, errorCallback) {
        exec(successCallback, errorCallback, 'OcrplateidSmart', 'ocrplateidSmartOpen', []);
    }
};

module.exports = ocrplateidSmartJs