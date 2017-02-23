(function() {
    'use strict';

    angular.module('app').controller('Step3Controller', Step3Controller);

    Step3Controller.$inject = ['$stateParams', 'AnalyticsService', '$state'];

    function Step3Controller($stateParams, AnalyticsService, $state) {
        var vm = this;

        vm.isLoggedOut = true;
        vm.isLoggedInNoCard = false;
        vm.isLoggedIn = false;

        vm.logOut = logOut;
        vm.logInNoCard = logInNoCard;
        vm.logIn = logIn;
        vm.submit = submit;

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

        function submit() {
            // This is an example of firing a Google Analytics event with integer event data.
            // Because this is not a normal app, the data we pass in is just random garbage. In a
            // real application, we should be careful to pass real integer data.
            AnalyticsService.trackEvent('OrderSubmitted', getRandomInt(150, 300));
            $state.go('confirm');
        }

        function getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min)) + min;
        }
    }

})();

