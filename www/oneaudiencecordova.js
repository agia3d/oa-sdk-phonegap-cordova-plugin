var cordova = require('cordova');

function OneAudienceCordova() {
}


OneAudienceCordova.prototype.init = function(appKey, successCallback, errorCallback) {
	cordova.exec(successCallback, this._getErrorCallback(errorCallback, "init"), "OneAudiencePlugin", "init", [appKey]); 
};

OneAudienceCordova.prototype.eulaAccepted = function(successCallback, errorCallback) {
	cordova.exec(successCallback, this._getErrorCallback(errorCallback, "eulaAccepted"), "OneAudiencePlugin", "eulaAccepted", []); 
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
