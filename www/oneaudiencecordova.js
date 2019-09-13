var cordova = require('cordova');

function OneAudienceCordova() {
}

OneAudienceCordova.prototype.init = function (appKey, successCallback = function () { }, errorCallback = function () { }) {
    var devicePlatform = device.platform;
    var requestPermissions = true;

    if (devicePlatform === "Android") {
        cordova.exec(successCallback, this._getErrorCallback(errorCallback, "init"), "OneAudiencePlugin", "init", [appKey, requestPermissions]);
    } else if (devicePlatform === "iOS") {
        cordova.exec(successCallback, this._getErrorCallback(errorCallback, "init"), "OneAudienceCordova", "init", [appKey]);
    }
};

OneAudienceCordova.prototype.optout = function (successCallback, errorCallback) {
    var devicePlatform = device.platform;
    if (devicePlatform === "Android") {
        cordova.exec(successCallback, this._getErrorCallback(errorCallback, "optout"), "OneAudiencePlugin", "optout", []);
    } else if (devicePlatform === "iOS") {
        console.log("OneAudience Init IOS");
        cordova.exec(successCallback, this._getErrorCallback(errorCallback, "optOut"), "OneAudienceCordova", "optOut", []);
    }
};

OneAudienceCordova.prototype.setEmailAddress = function (email, successCallback, errorCallback) {
    var devicePlatform = device.platform;
    if (devicePlatform === "Android") {
        cordova.exec(successCallback, this._getErrorCallback(errorCallback, "setEmailAddress"), "OneAudiencePlugin", "setEmailAddress", [email]);
    } else if (devicePlatform === "iOS") {
        console.log("OneAudience Init IOS");
        cordova.exec(successCallback, this._getErrorCallback(errorCallback, "setEmailAddress"), "OneAudienceCordova", "setEmailAddress", [email]);
    }
};

OneAudienceCordova.prototype.setAge = function (age, successCallback, errorCallback) {
    var devicePlatform = device.platform;
    if (devicePlatform === "Android") {
        cordova.exec(successCallback, this._getErrorCallback(errorCallback, "setAge"), "OneAudiencePlugin", "setAge", [age]);
    }
};

OneAudienceCordova.prototype.setGender = function (gender, successCallback, errorCallback) {
    var devicePlatform = device.platform;
    if (devicePlatform === "Android") {
        cordova.exec(successCallback, this._getErrorCallback(errorCallback, "setGender"), "OneAudiencePlugin", "setGender", [gender]);
    }
};

OneAudienceCordova.prototype._getErrorCallback = function (errorCallback, functionName) {
    if (typeof errorCallback === 'function') {
        return errorCallback;
    }
    else {
        return function (err) {
            console.log("OneAudienceCordova Error Callback: function " + functionName + " returned: " + JSON.stringify(err));
        }
    }
};

OneAudienceCordova.install = function () {
    if (!window.plugins) {
        window.plugins = {};
    }

    window.plugins.oneaudiencecordova = new OneAudienceCordova();
    return window.plugins.oneaudiencecordova;
};

cordova.addConstructor(OneAudienceCordova.install);
