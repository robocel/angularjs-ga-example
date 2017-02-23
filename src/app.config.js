(function(){
    'use strict';

    angular.module('app').config(AppConfig);

    AppConfig.$inject = ['$analyticsProvider'];

    function AppConfig($analyticsProvider) {
        // turn off automatic tracking
        $analyticsProvider.virtualPageviews(false);
    }
})();