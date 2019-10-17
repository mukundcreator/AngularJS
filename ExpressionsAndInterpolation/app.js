(function () {
    'use strict';
    angular.module("MsgApp", [])
        .controller("MsgController", MsgController);
    MsgController.$inject = ['$scope'];

    function MsgController($scope) {
        $scope.name = "Mukun";

        $scope.sayMessage = function () {
            return "Mukun likes to drink coffee at any part of Time!!";
        }

        $scope.stateOfBeing = "groot";

        $scope.feedMukun = function () {
            $scope.stateOfBeing = "coffee";
        }

    }
})();