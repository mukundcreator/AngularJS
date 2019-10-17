(function () {
    'use strict';
    angular.module('DIAPP', [])
        .controller('DIController', DIController);

    function DIController($scope, $filter, $injector) {
        $scope.name = "mukun";
        $scope.upper = function () {
            var upCase = $filter("uppercase");
            $scope.name = upCase($scope.name);
        }
        console.log($injector.annotate(DIController)); // Know about injector what it does
    }

    function annotateMe(name, job, blah) {
        return "Blah!!..";
    }

    console.log(annotateMe()); // returns Blah!!..
    console.log(annotateMe); // returns function definition
    console.log(annotateMe.toString()); // returns function definition


    console.log(DIController.toString()); // returns function definition


})();