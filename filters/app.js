(function () {
    'use strict';
    angular.module("MsgApp", [])
        .controller("MsgController", MsgController);
    MsgController.$inject = ['$scope', '$filter'];

    function MsgController($scope, $filter) {
        $scope.name = "Mukun";
        $scope.coffeeCost = 100;
        $scope.sayMessage = function () {
            var msg = "Mukun likes to drink coffee at any part of Time!!";
            var output = $filter('uppercase')(msg);
            return output;
        }

        $scope.stateOfBeing = "groot";

        $scope.feedMukun = function () {
            $scope.stateOfBeing = "coffee";
        }

    }
})();