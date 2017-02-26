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
    public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {
            
        final String _action = action;
        final CallbackContext _callbackContext = callbackContext;
        final String argString = args.getString(0);

        cordova.getActivity().runOnUiThread(new Runnable() {

            public void run() {
                if (_action.equals(ACTION_INIT)) {
                    OneAudience.init(cordova.getActivity(), argString);
                } else if (_action.equals(ACTION_REQUEST_ACCOUNT_PERMISSION)){
                    OneAudience.requestAccountPermission(cordova.getActivity());
                } else if (_action.equals(ACTION_OPTOUT)){
                    OneAudience.optOut();
                } else if (_action.equals(ACTION_SET_EMAIL)){
                    OneAudience.setEmailAddress(argString);
                } else {
                    _callbackContext.error("OneAudienceCordova: " + _action + " is not supported");
                    //return false;
                }

                _callbackContext.sendPluginResult(new PluginResult(PluginResult.Status.OK));
                //return true;
            }

        });

        return true;
    }

    @Override
    protected void pluginInitialize() {

    }

}

