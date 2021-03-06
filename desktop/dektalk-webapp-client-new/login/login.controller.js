(function () {
    'use strict';

    angular
        .module('app')
        .controller('LoginController', LoginController);

    LoginController.$inject = ['$location'];
    function LoginController($location) {
        var vm = this;

        vm.login = login;

        function login() {
            vm.dataLoading = true;
            var res = vm.username.split("@");
            var parameter = {
                'debug': true,
                'username': vm.username,
                'password': res[0]
            };
            RestCommClient.Device.setup(parameter);

            // Pass a callback to get notified when RestCommWebClient is ready
            RestCommClient.Device.ready(function (device) {
                $("#log").text("Ready");
            });

            // Pass a callback to get notified if a Device error occurs
            RestCommClient.Device.error(function (error) {
                $("#log").text("Error: " + error.message);
            });

            $location.path('/home');
        };
    }

})();
