(function () {
    'use strict';
    angular.module('nameCalculator', [])
        .controller('nameCalculatorController', function ($scope) {
            $scope.name = "MUKUN";
            $scope.totalValue = calculatenumerictostring($scope.name);

            $scope.displayNumeric = function () {
                var totalNameValue = calculatenumerictostring($scope.name);
                $scope.totalValue = totalNameValue;
            };

            function calculatenumerictostring(string) {
                var totalStringValue = 0;

                for (var i = 0; i < string.length; i++) {
                    totalStringValue += string.charCodeAt(i);
                }

                return totalStringValue;
            };
        });
})();