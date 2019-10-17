(function () {
    'use strict';
    angular.module("MsgApp", [])
        .controller("MsgController", MsgController)
        .filter('loves', lovesFilter)
        .filter('truth', truthFilter);
    MsgController.$inject = ['$scope', 'lovesFilter'];

    function MsgController($scope, lovesFilter) {
        $scope.name = "Mukun";
        $scope.coffeeCost = 100;

        $scope.sayMessage = function () {
            var msg = "Mukun likes to drink coffee at any part of Time!!";
            return msg;
        }

        $scope.sayLovesMessage = function () {
            var msg = "Mukun likes to drink coffee at any part of Time!!";
            msg=lovesFilter(msg);
            return msg;
        }

        $scope.stateOfBeing = "groot";

        $scope.feedMukun = function () {
            $scope.stateOfBeing = "coffee";
        };
    }

    function lovesFilter() {
        return function (input) {
            input = input || "";
            input = input.replace("likes", "loves");
            return input;
        };
    }

    function truthFilter(){
        return function(input,target,replace){
            input=input||"";
            input=input.replace(target,replace);
            return input;
        };
    }
})();