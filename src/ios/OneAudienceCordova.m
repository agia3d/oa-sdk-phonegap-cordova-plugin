/********* OneAudienceCordova.m Cordova Plugin Implementation *******/

#import <Cordova/CDV.h>
#import "AJKit/AJKit.h"

@interface OneAudienceCordova : CDVPlugin {
  // Member variables go here.
}

- (void)init:(CDVInvokedUrlCommand*)command;
@end

@implementation OneAudienceCordova

- (void)init:(CDVInvokedUrlCommand*)command
{
    NSLog(@"OneAudience Init Objective C called");
    CDVPluginResult* pluginResult = nil;
    NSString* appKey = [command.arguments objectAtIndex:0];

    if (appKey != nil && [appKey length] > 0) {
        pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsString:appKey];
        [AJKit initWithLaunchOptions:appKey];
    } else {
        pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_ERROR];
    }

    [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
}

@end
