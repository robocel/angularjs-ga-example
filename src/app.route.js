export default angular.module('app').config(routerConfig);

routerConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('step1', {
            url: '/step1',
            templateUrl: './src/main/step-1.html',
            controller: 'Step1Controller',
            controllerAs: 'vm',
            resolve: {
                analytics: ['AnalyticsService', function(AnalyticsService) {
                    return AnalyticsService.trackPage('Home');
                }]
            }
        })
        .state('step2', {
            url: '/step2',
            templateUrl: './src/main/step-2.html',
            controller: 'Step2Controller',
            controllerAs: 'vm',
            resolve: {
                analytics: ['AnalyticsService', function(AnalyticsService) {
                    return AnalyticsService.trackPage('Home');
                }]
            }
        })
        .state('step3', {
            url: '/step3',
            templateUrl: './src/main/step-3.html',
            controller: 'Step3Controller',
            controllerAs: 'vm',
            resolve: {
                analytics: ['AnalyticsService', function(AnalyticsService) {
                    return AnalyticsService.trackPage('Home');
                }]
            }
        })
        .state('confirm', {
            parent: 'app',
            url: '/confirm',
            templateUrl: './src/main/confirm.html',
            controller: 'ConfirmationController',
            controllerAs: 'vm',
            resolve: {
                analytics: ['AnalyticsService', function(AnalyticsService) {
                    return AnalyticsService.trackPage('Home');
                }]
            }
        });

    $urlRouterProvider.otherwise('/step1');
}