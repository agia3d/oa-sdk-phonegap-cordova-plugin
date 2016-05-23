package com.oneaudience.cordova;


import com.oneaudience.sdk.OneAudience;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.PluginResult;
import org.json.JSONArray;
import org.json.JSONException;


public class OneAudiencePlugin extends CordovaPlugin {
    public static final String ACTION_INIT = "init";
    public static final String ACTION_EULA_ACCEPTED = "eulaAccepted";
    
    
    @Override
    public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {
        if (action.equals(ACTION_INIT)) {
            OneAudience.init(cordova.getActivity(), args.getString(0));
        } else if (action.equals(ACTION_EULA_ACCEPTED)) {
            OneAudience.eulaAccepted();
        } else {
            callbackContext.error("OneAudienceCordova: " + action + " is not supported");
            return false;
        }
        
        callbackContext.sendPluginResult(new PluginResult(PluginResult.Status.OK));
        return true;
    }
    
    @Override
    protected void pluginInitialize() {
        
    }
    
}

