package com.oneaudience.cordova;


import com.oneaudience.sdk.OneAudience;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.PluginResult;
import org.json.JSONArray;
import org.json.JSONException;


public class OneAudiencePlugin extends CordovaPlugin {
    public static final String ACTION_INIT = "init";
    public static final String ACTION_OPTOUT = "optout";
    public static final String ACTION_SET_EMAIL = "setEmailAddress";
    public static final String ACTION_SET_AGE = "setAge";
    public static final String ACTION_SET_GENDER = "setGender";


    @Override
    public boolean execute(String action, JSONArray args, CallbackContext callbackContext) {

        final String _action = action;
        final CallbackContext _callbackContext = callbackContext;
        final JSONArray _args = args;

        cordova.getActivity().runOnUiThread(new Runnable() {

            public void run() {
                try{
                    if (_action.equals(ACTION_INIT)) {
                        if(_args.length() > 1){
                            OneAudience.init(cordova.getActivity(), _args.getString(0), _args.getBoolean(1));
                        } else {
                            OneAudience.init(cordova.getActivity(), _args.getString(0));
                        }
                    } else if (_action.equals(ACTION_OPTOUT)){
                        OneAudience.optOut();
                    } else if (_action.equals(ACTION_SET_EMAIL)){
                        OneAudience.setEmailAddress(_args.getString(0));
                    } else if (_action.equals(ACTION_SET_AGE)){
                        OneAudience.setAge(_args.getInt(0));
                    } else if (_action.equals(ACTION_SET_GENDER)){
                        OneAudience.setGender(_args.getInt(0));
                    } else {
                        _callbackContext.error("OneAudienceCordova: " + _action + " is not supported");
                    }

                    _callbackContext.sendPluginResult(new PluginResult(PluginResult.Status.OK));
                } catch (JSONException e) {
                    _callbackContext.error("OneAudienceCordova: wrong function signature");
                }
            }

        });

        return true;
    }

    @Override
    protected void pluginInitialize() {

    }

}

