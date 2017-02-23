(function() {
    'use strict';

    angular.module('app').controller('Step1Controller', Step1Controller);

    Step1Controller.$inject = ['$stateParams', 'AnalyticsService'];

    function Step1Controller($stateParams, AnalyticsService) {
        var vm = this;

        vm.isLoggedOut = true;
        vm.isLoggedInNoCard = false;
        vm.isLoggedIn = false;

        vm.logOut = logOut;
        vm.logInNoCard = logInNoCard;
        vm.logIn = logIn;

        init();

        function init() {
            if ($stateParams.isLoggedOut == true) {
                logOut();
            } else if ($stateParams.isLoggedInNoCard == true) {
                logInNoCard();
            } else if ($stateParams.isLoggedIn == true) {
                logIn();
            }
        }

        function logOut() {
            vm.isLoggedOut = true;
            vm.isLoggedInNoCard = false;
            vm.isLoggedIn = false;

            // This is an example of setting a custom dimension based on user state
            AnalyticsService.setStatus('loggedOut');
        }

        function logInNoCard() {
            vm.isLoggedOut = false;
            vm.isLoggedInNoCard = true;
            vm.isLoggedIn = false;

            // This is an example of setting a custom dimension based on user state
            AnalyticsService.setStatus('loggedInNoCard');
        }

        function logIn() {
            vm.isLoggedOut = false;
            vm.isLoggedInNoCard = false;
            vm.isLoggedIn = true;

            // This is an example of setting a custom dimension based on user state
            AnalyticsService.setStatus('loggedIn');
        }
    }

})();

