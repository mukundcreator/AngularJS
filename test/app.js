//IIFE
(function () {
    'use strict';
    angular.module('helloWorldApp', [])
        .controller('firstcontroller', function ($scope) {
            $scope.name="MUKUN";
            $scope.sayHello=function (){
                return "Hello world";
            };
        });
})(); 