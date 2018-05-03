package com.oneaudience.cordova;


import com.oneaudience.sdk.OneAudience;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.PluginResult;
import org.json.JSONArray;
import org.json.JSONException;
import java.util.TimeZone;
import org.apache.cordova.CordovaWebView;
import org.apache.cordova.CordovaInterface;
import org.json.JSONObject;
import android.provider.Settings;


public class OneAudiencePlugin extends CordovaPlugin {
    public static final String ACTION_INIT = "init";
    public static final String ACTION_OPTOUT = "optout";
    public static final String ACTION_SET_EMAIL = "setEmailAddress";
    public static final String ACTION_SET_AGE = "setAge";
    public static final String ACTION_SET_GENDER = "setGender";
    public static final String ACTION_GET_PLATFORM = "getDeviceInfo";

    // Device plugin
    public static String platform;

    private static final String ANDROID_PLATFORM = "Android";
    private static final String AMAZON_PLATFORM = "amazon-fireos";
    private static final String AMAZON_DEVICE = "Amazon";


    @Override
    public boolean execute(String action, JSONArray args, CallbackContext callbackContext) {

        if (action.equals(ACTION_GET_PLATFORM)){
            JSONObject r = new JSONObject();
            r.put("platform", "android");
            callbackContext.success(r);
            return true;
        }

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
                    _callbackContext.error("OneAudienceCordova: wrong parameter");
                }
            }

        });

        return true;
    }

    @Override
    protected void pluginInitialize() {

    }

    //=======================
    // Device plugin
    //=======================

    /**
     * Sets the context of the Command. This can then be used to do things like
     * get file paths associated with the Activity.
     *
     * @param cordova The context of the main Activity.
     * @param webView The CordovaWebView Cordova is running in.
     */
    public void initialize(CordovaInterface cordova, CordovaWebView webView) {
        super.initialize(cordova, webView);
    }

    /**
     * Get the OS name.
     *
     * @return
     */
    public String getPlatform() {
        String platform;
        if (isAmazonDevice()) {
            platform = AMAZON_PLATFORM;
        } else {
            platform = ANDROID_PLATFORM;
        }
        return platform;
    }

    /**
     * Function to check if the device is manufactured by Amazon
     *
     * @return
     */
    public boolean isAmazonDevice() {
        if (android.os.Build.MANUFACTURER.equals(AMAZON_DEVICE)) {
            return true;
        }
        return false;
    }

    public boolean isVirtual() {
    return android.os.Build.FINGERPRINT.contains("generic") ||
        android.os.Build.PRODUCT.contains("sdk");
    }
}

