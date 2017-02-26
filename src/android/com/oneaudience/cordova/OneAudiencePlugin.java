package com.oneaudience.cordova;


import com.oneaudience.sdk.OneAudience;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.PluginResult;
import org.json.JSONArray;
import org.json.JSONException;


public class OneAudiencePlugin extends CordovaPlugin {
    public static final String ACTION_INIT = "init";
    public static final String ACTION_REQUEST_ACCOUNT_PERMISSION = "requestAccountPermission";
    public static final String ACTION_OPTOUT = "optout";
    public static final String ACTION_SET_EMAIL = "setEmailAddress";


    @Override
    public boolean execute(String action, final JSONArray args, CallbackContext callbackContext) throws JSONException {
        if (action.equals(ACTION_INIT)) {
            try {
                this.cordova.getActivity().runOnUiThread(new Runnable() {
                @Override
                public void run() {
                    OneAudience.init(cordova.getActivity(), args.getString(0));
                    }
                });
            } catch(Exception e){
                
            }

        } else if (action.equals(ACTION_REQUEST_ACCOUNT_PERMISSION)){
        	OneAudience.requestAccountPermission(cordova.getActivity());
        } else if (action.equals(ACTION_OPTOUT)){
        	OneAudience.optOut();
        } else if (action.equals(ACTION_SET_EMAIL)){
            OneAudience.setEmailAddress(args.getString(0));
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

