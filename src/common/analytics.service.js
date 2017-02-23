(function() {
    'use strict';

    angular.module('app')
        .factory('AnalyticsService', AnalyticsService);

    AnalyticsService.$inject = [
        '$q',
        '$analytics'
    ];

    function AnalyticsService($q, $analytics) {

        function setStatus(status) {
            $analytics.setUserProperties({dimension1: status});
        }

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

        var eventMap = {
            OrderSubmitted: {
                hitType: 'event',
                eventCategory: 'OrderForm',
                eventAction: 'Click',
                eventLabel: 'OrderCompleted',
                eventValue: null
            }
        };

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
