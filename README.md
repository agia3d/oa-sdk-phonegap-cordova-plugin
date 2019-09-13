# oneaudience-sdk-phonegap-cordova-plugin
For more information about One Audience, [see www.oneaudience.com](http://www.oneaudience.com).

## 0. Index

1. [Description](#1-description)
2. [Installation](#2-installation)
3. [Usage](#3-usage)
    3. [Initialization](#3a-initialization)

## 1. Description
This plugin allows you to use One Audience from your PhoneGap/Cordova app.

## 2. Installation
First, it is recommended to backup your project.

To install the plugin automatically with PhoneGap, use:
```
$ phonegap local plugin add https://github.com/oneaudience/oneaudience-sdk-phonegap-cordova-plugin.git
```
To install the plugin automatically with Cordova, use:
```
$ cordova plugin add https://github.com/oneaudience/oneaudience-sdk-phonegap-cordova-plugin.git
```
Then run:
```
$ cordova prepare
```

## 3. Usage
One Audience is automatically added to your javascript through the window.plugins.oneaudience object. So you are now ready to integrate One Audience into your Cordova/PhoneGap app:

### 3a. Google play services (Android only)
OneAudience for Android requires Google Play Services in order to process the Google Advertising Id and ensure fraud-free audience segmentation. If you do not already have integration with Google Play Services, follow the steps to sign up with [Firebase](https://firebase.google.com/ "Firebase"), download the `google-services.json` for your project, and place in `platforms/android/app`.

### 3b. Initialization
Initialize the SDK by within your onDeviceReady function implementation:
```
window.plugins.oneaudiencecordova.init("YOUR-APP-KEY");
```

Optionally, you may also pass success and error callbacks:
```
window.plugins.oneaudiencecordova.init(
    "YOUR-APP-KEY",
    function(data) { console.log(data); },
    function(err) { console.log(err); }
);
```