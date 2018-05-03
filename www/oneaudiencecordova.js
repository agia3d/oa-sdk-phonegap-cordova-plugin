var cordova = require('cordova');

function OneAudienceCordova() {
}

OneAudienceCordova.prototype.init = function(appKey, successCallback, errorCallback) {
    var devicePlatform = device.platform;
    console.log("Detected platform: " + devicePlatform);
    if (devicePlatform === "Android") {
        cordova.exec(successCallback, this._getErrorCallback(errorCallback, "init"), "OneAudiencePlugin", "init", [appKey]);
    } else {
        console.log("OneAudience Init IOS");
        cordova.exec(successCallback, this._getErrorCallback(errorCallback, "init"), "OneAudienceCordova", "init", [appKey]);
    }
};

OneAudienceCordova.prototype.init = function(appKey, requestPermissions, successCallback, errorCallback) {
    var devicePlatform = device.platform;
    console.log("Detected platform: " + devicePlatform);
    if (devicePlatform === "Android") {
        cordova.exec(successCallback, this._getErrorCallback(errorCallback, "init"), "OneAudiencePlugin", "init", [appKey, requestPermissions]);
    }
};

OneAudienceCordova.prototype.optout = function(successCallback, errorCallback) {
    var devicePlatform = device.platform;
    console.log("Detected platform: " + devicePlatform);
    if (devicePlatform === "Android") {
        cordova.exec(successCallback, this._getErrorCallback(errorCallback, "optout"), "OneAudiencePlugin", "optout", []);
    } else {
        console.log("OneAudience Init IOS");
        cordova.exec(successCallback, this._getErrorCallback(errorCallback, "optOut"), "OneAudienceCordova", "optOut", []);
    }
};

OneAudienceCordova.prototype.setEmailAddress = function(email, successCallback, errorCallback) {
    var devicePlatform = device.platform;
    console.log("Detected platform: " + devicePlatform);
    if (devicePlatform === "Android") {
        cordova.exec(successCallback, this._getErrorCallback(errorCallback, "setEmailAddress"), "OneAudiencePlugin", "setEmailAddress", [email]);
    } else {
        console.log("OneAudience Init IOS");
        cordova.exec(successCallback, this._getErrorCallback(errorCallback, "setEmailAddress"), "OneAudienceCordova", "setEmailAddress", [email]);
    }
};

OneAudienceCordova.prototype.setAge = function(age, successCallback, errorCallback) {
    var devicePlatform = device.platform;
    console.log("Detected platform: " + devicePlatform);
    if (devicePlatform === "Android") {
        cordova.exec(successCallback, this._getErrorCallback(errorCallback, "setAge"), "OneAudiencePlugin", "setAge", [age]);
    }
};

OneAudienceCordova.prototype.setGender = function(gender, successCallback, errorCallback) {
    var devicePlatform = device.platform;
    console.log("Detected platform: " + devicePlatform);
    if (devicePlatform === "Android") {
        cordova.exec(successCallback, this._getErrorCallback(errorCallback, "setGender"), "OneAudiencePlugin", "setGender", [gender]);
    }
};

OneAudienceCordova.prototype._getErrorCallback = function (errorCallback, functionName) {
    if (typeof errorCallback === 'function') {
        return errorCallback;
    }
    else {
        return function(result) {
            console.log("OneAudienceCordova Error Callback: function " + functionName + " returned: " + JSON.stringify(result));
        }
    }
};

OneAudienceCordova.install = function() {
    if (!window.plugins) {
        window.plugins = {};
    }

    window.plugins.oneaudiencecordova = new OneAudienceCordova();
    return window.plugins.oneaudiencecordova;
};

cordova.addConstructor(OneAudienceCordova.install);
