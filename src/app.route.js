(function() {
    'use strict';

    angular.module('app').config(routerConfig);

    routerConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

    function routerConfig($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('step1', {
                url: '/step1',
                templateUrl: './src/main/step-1.html',
                controller: 'Step1Controller',
                controllerAs: 'vm',
                params: {
                    isLoggedOut: null,
                    isLoggedInNoCard: null,
                    isLoggedIn: null
                },
                resolve: {
                    // This is how to fire virtual pageviews when changing routes in the application
                    // Only routes that have pageviews configured in the AnalyticsService should be
                    // configured like this.
                    analytics: ['AnalyticsService', function(AnalyticsService) {
                        return AnalyticsService.trackPage('Step1');
                    }]
                }
            })
            .state('step2', {
                url: '/step2',
                templateUrl: './src/main/step-2.html',
                controller: 'Step2Controller',
                controllerAs: 'vm',
                params: {
                    isLoggedOut: null,
                    isLoggedInNoCard: null,
                    isLoggedIn: null
                },
                resolve: {
                    // This is how to fire virtual pageviews when changing routes in the application
                    // Only routes that have pageviews configured in the AnalyticsService should be
                    // configured like this.
                    analytics: ['AnalyticsService', function(AnalyticsService) {
                        return AnalyticsService.trackPage('Step2');
                    }]
                }
            })
            .state('step3', {
                url: '/step3',
                templateUrl: './src/main/step-3.html',
                controller: 'Step3Controller',
                controllerAs: 'vm',
                params: {
                    isLoggedOut: null,
                    isLoggedInNoCard: null,
                    isLoggedIn: null
                },
                resolve: {
                    // This is how to fire virtual pageviews when changing routes in the application
                    // Only routes that have pageviews configured in the AnalyticsService should be
                    // configured like this.
                    analytics: ['AnalyticsService', function(AnalyticsService) {
                        return AnalyticsService.trackPage('Step3');
                    }]
                }
            })
            .state('confirm', {
                url: '/confirm',
                templateUrl: './src/main/confirm.html',
                controller: 'ConfirmationController',
                controllerAs: 'vm',
                resolve: {
                    // This is how to fire virtual pageviews when changing routes in the application
                    // Only routes that have pageviews configured in the AnalyticsService should be
                    // configured like this.
                    analytics: ['AnalyticsService', function(AnalyticsService) {
                        return AnalyticsService.trackPage('Confirm');
                    }]
                }
            });

        $urlRouterProvider.otherwise('/step1');
    }
})();

