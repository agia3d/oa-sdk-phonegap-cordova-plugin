/********* OneAudienceCordova.m Cordova Plugin Implementation *******/

#import <Cordova/CDV.h>
#import "AJKit/AJKit.h"

@interface OneAudienceCordova : CDVPlugin {
  // Member variables go here.
}

- (void)init:(CDVInvokedUrlCommand*)command;
- (void)setEmailAddress:(CDVInvokedUrlCommand*)command;
- (void)optOut:(CDVInvokedUrlCommand*)command;;

@end

@implementation OneAudienceCordova

- (void)init:(CDVInvokedUrlCommand*)command
{
    NSLog(@"OneAudience Init Objective C called");
    CDVPluginResult* pluginResult = nil;
    NSString* appKey = [command.arguments objectAtIndex:0];

    if (appKey != nil && [appKey length] > 0) {
        NSLog(@"OneAudience AppKey: %@", appKey);
        pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsString:appKey];
        [Self.commandDelegate runInBackground:^]{
            [AJKit init:appKey];
        }];
    } else {
        NSLog(@"OneAudience AppKey is nill or empty");
        pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_ERROR];
    }

    [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
}

- (void)setEmailAddress:(CDVInvokedUrlCommand*)command
{
    NSLog(@"OneAudience setEmailAddress Objective C called");
    CDVPluginResult* pluginResult = nil;
    NSString* email = [command.arguments objectAtIndex:0];

    if (email != nil && [email length] > 0) {
        NSLog(@"email: %@", email);
        pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsString:email];
        [AJKit setEmailAddress:email];
    } else {
        NSLog(@"email is nill or empty");
        pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_ERROR];
    }

    [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
}

- (void)optOut:(CDVInvokedUrlCommand*)command
{
    NSLog(@"optout Objective C called");

    CDVPluginResult* pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK];
    [AJKit optOut];

    [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
}
@end
