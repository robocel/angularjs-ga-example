(function() {
    'use strict';

    angular.module('app')
        .factory('AnalyticsService', AnalyticsService);

    AnalyticsService.$inject = [
        '$q',
        '$analytics'
    ];

    function AnalyticsService($q, $analytics) {

        /**
         * setStatus
         * Sets a custom dimension with the given status value.
         * This value will be attached to all events fired henceforth.
         */
        function setStatus(status) {
            $analytics.setUserProperties({dimension1: status});
        }

        /**
         * trackEvent
         * Sends an event to Google Analytics. Configuration for the event is stored in the
         * objects below. The eventName parameter is a key used to grab the correct configuration.
         * The data parameter is optional. When present, it is an integer value used to fill out
         * the eventData section of the Google Analytics event.
         */
        function trackEvent(eventName, data) {
            if (_.isString(eventName)) {

                var eventData = eventMap[eventName];

                _.forOwn(eventData, function(value, key, object) {
                    if (value === null && angular.isDefined(data)) {
                        // Replace default null value with actual value
                        object[key] = data;
                    }
                    else if (value === null && angular.isUndefined(data)) {
                        throw 'AnalyticsService.trackEvent(): Missing required "data" parameter';
                    }
                });

                if (angular.isDefined(eventData)) {
                    var angularticsFormattedData = {  category: eventData.eventCategory, action: eventData.eventAction, label: eventData.eventLabel };
                    if (angular.isDefined(eventData.eventValue)) {
                        angularticsFormattedData.value = eventData.eventValue;
                    }
                    $analytics.eventTrack(eventData.eventAction, angularticsFormattedData);
                }

                return $q.resolve();
            }
            else {
                throw 'AnalyticsService.trackEvent(): Invalid "eventName" parameter: ' + eventName;
            }
        }

        /**
         * trackPage
         * Sends a virtual pageview to Google Analytics. Configuration for the pageview is stored in the
         * objects below. The pageName parameter is a key used to grab the correct configuration.
         */
        function trackPage(pageName) {
            if (_.isString(pageName)) {
                var pageData = pageMap[pageName];

                if (angular.isDefined(pageData)) {
                    $analytics.pageTrack(pageData.page);
                }

                return $q.resolve();
            }
            else {
                throw 'AnalyticsService.trackPage(): Invalid "pageName" parameter';
            }
        }

        // Configuration information for the possible events we fire. The key is arbitrary but used
        // to retrieve this particular configuration information when called. eventValue is an
        // optional field in these configuration files.
        var eventMap = {
            OrderSubmitted: {
                hitType: 'event',
                eventCategory: 'OrderForm',
                eventAction: 'Click',
                eventLabel: 'OrderCompleted',
                eventValue: null
            }
        };

        // Configuration information for the possible pageviews we fire. The key is arbitrary but used
        // to retrieve this particular configuration information when called.
        var pageMap = {
            Step1: {
                hitType: 'pageview',
                page: '/step1'
            },
            Step2: {
                hitType: 'pageview',
                page: '/step2'
            },
            Step3: {
                hitType: 'pageview',
                page: '/step3'
            },
            Confirmation: {
                hitType: 'pageview',
                page: '/confirm'
            }
        };

        return {
            trackEvent: trackEvent,
            trackPage: trackPage,
            setStatus: setStatus
        };
    }
})();
