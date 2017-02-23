# angularjs-ga-example
A sample repository for implementing Google Analytics into AngularJS

## Mandatory Libraries

1. "angulartics" - This is a open-source tool that wraps various analytics services in an Angular service.
2. "angulartics-google-analytics" - This is a open-source tool that wraps the Google Analytics API in an Angular service.

## Cordova Hybrid Applications
To make GA work seamlessly in a Cordova mobile application, you'll need the help of an additional Cordova plug-in. Install the "com.adobe.plugins.GAPlugin" found at https://github.com/phonegap-build/GAPlugin in the same way you'd install any Google Analytics Plug-In. There are additional changes necessary to make GA work in the Angular application. Places where this is true are called out in this code base with commented-out code and code comments.

## The Approach
This sample application uses a simple Angular AnalyticsService to further abstract the Google Analytics API that Angulartics also wraps. First, we disable the default pageview tracking capability of Angulartics. This lets us fully control the way that we fire virtual pageview events. Second, we expose two major methods (trackPage and trackEvent). The details of the events to be fired is stored internally in analytics service. This means, all we need to do is call the appropriate method with the appropriate key and it will configure the call to Google Analytics for us automatically.

### trackPage(page)
This method allows us to send virtual pageviews. The parameter 'page' is a key that is used to pull the correct virtual pageview configuration information from the objects inside of the AnalyticsService. There is no additional data allowed in these pageviews. The calls to this method are found in the resolve section of the routes of the application, which means that they are fired at the appropriate time.

### trackEvent(event, data)
This method allows us to send Google Analytics events. The parameter 'event' is a key that is used to pull the correct event configuration information from the objects inside of the AnalyticsService. The additional parameter data is optional. When present, it is used to fulfill the "eventData" part of the events configured in the AnalyticsService. The data value is intended to be an integer value. Using any other type of value for 'data' may cause errors.

## Additional Dimensions
For specific use cases, it might be useful to adorn pageviews and events with additional information about the user, session, or particular event. For example, you could track whether a user is logged-in, logged-out, or logged-in with a special case. This can help the people reviewing the metrics to properly segment the data into useful categories. To achieve this, this sample includes the method setStatus, which shows how to set a custom dimension. NOTE: Custom dimensions need to be configured in the Google Analytics account in order to properly register.


