(function(){
    'use strict';

    angular.module('app').config(AppConfig);

    AppConfig.$inject = ['$analyticsProvider'/*, 'googleAnalyticsCordovaProvider'*/];

    function AppConfig($analyticsProvider/*, googleAnalyticsCordovaProvider*/) {
        // Google Analytics

        // NOTE: The following three properties are commented out, because this sample code is not
        //       running in a Cordova shell, because it is not a mobile application. If your code
        //       is a mobile application, uncomment these lines (and the dependencies above!)

        // The Tracking ID for the GA account (also found in index.html) - Change this to your value!
        // googleAnalyticsCordovaProvider.trackingId = 'UA-########-#';

        // The time to wait before sending batches of analytics events (default is 10 seconds)
        // googleAnalyticsCordovaProvider.period = 20;

        // Setting debug to 'true' helps you test the effects of the plug-in without waiting the period time
        // googleAnalyticsCordovaProvider.debug = false; // default: false

        // Turn off automatic tracking. We're doing custom page views in our routes, so we want
        // to disable the ordinary behavior of automatically tracking page view.
        $analyticsProvider.virtualPageviews(false);
    }
})();