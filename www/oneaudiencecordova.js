var cordova = require('cordova');

function OneAudienceCordova() {
}

OneAudienceCordova.prototype.init = function(appKey, successCallback, errorCallback) {
	var devicePlatform = device.platform;
	if (devicePlatform === "Android") {
		cordova.exec(successCallback, this._getErrorCallback(errorCallback, "init"), "OneAudiencePlugin", "init", [appKey]); 
	} else if (devicePlatform === "iOS") {
		console.log("OneAudience Init IOS");
		new Promise(function(resolve, reject) {
			cordova.exec(successCallback, this._getErrorCallback(errorCallback, "init"), "OneAudienceCordova", "init", [appKey]); 
			resolve("OneAudience Init Called");
		});
	}
	
};

OneAudienceCordova.prototype.optout = function(successCallback, errorCallback) {
	var devicePlatform = device.platform;
	if (devicePlatform === "Android") {
		cordova.exec(successCallback, this._getErrorCallback(errorCallback, "optout"), "OneAudiencePlugin", "optout", []); 
	} else if (devicePlatform === "iOS") {
		console.log("OneAudience Init IOS");
		cordova.exec(successCallback, this._getErrorCallback(errorCallback, "optOut"), "OneAudienceCordova", "optOut", []); 
	}
	
};

OneAudienceCordova.prototype.setEmailAddress = function(email, successCallback, errorCallback) {
	var devicePlatform = device.platform;
	if (devicePlatform === "Android") {
		cordova.exec(successCallback, this._getErrorCallback(errorCallback, "setEmailAddress"), "OneAudiencePlugin", "setEmailAddress", [email]); 
	} else if (devicePlatform === "iOS") {
		console.log("OneAudience Init IOS");
		cordova.exec(successCallback, this._getErrorCallback(errorCallback, "setEmailAddress"), "OneAudienceCordova", "setEmailAddress", [email]); 
	}
	
};

OneAudienceCordova.prototype.requestAccountPermission = function(successCallback, errorCallback) {
	var devicePlatform = device.platform;
	if (devicePlatform === "Android"){
		cordova.exec(successCallback, this._getErrorCallback(errorCallback, "requestAccountPermission"), "OneAudiencePlugin", "requestAccountPermission", []); 
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
