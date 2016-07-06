var cordova = require('cordova');

function OneAudienceCordova() {
}

OneAudienceCordova.prototype.init = function(appKey, successCallback, errorCallback) {
	var devicePlatform = device.platform;
	if (devicePlatform === "Android") {
		cordova.exec(successCallback, this._getErrorCallback(errorCallback, "init"), "OneAudiencePlugin", "init", [appKey]); 
	} else if (devicePlatform === "iOS") {
		console.log("OneAudience Init IOS");
		cordova.exec(successCallback, this._getErrorCallback(errorCallback, "init"), "OneAudienceCordova", "init", [appKey]); 
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
