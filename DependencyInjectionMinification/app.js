// (function () {
//     'use strict';
//     angular.module('DIAPP', [])
//         // .controller('DIController', ['$scope','$filter','$injector',DIController]);    //we can either use this or the below two lines bothe will work perfectly
//         .controller('DIController', DIController);
//     DIController.$inject = ['$scope', '$filter', '$injector'];

//     function DIController($scope, $filter,$injector) {
//         $scope.name = "mukun";
//         $scope.upper = function () {
//             var upCase = $filter("uppercase");
//             $scope.name = upCase($scope.name);
//         }
//         console.log($injector.annotate(DIController)); // Know about injector what it does
//     }

//     function annotateMe(name, job, blah) {
//         return "Blah!!..";
//     }

//     console.log(annotateMe()); // returns Blah!!..
//     console.log(annotateMe); // returns function definition
//     console.log(annotateMe.toString()); // returns function definition


//     console.log(DIController.toString()); // returns function definition


// })();


// !function(){"use strict";function o(n,e,l){n.name="mukun",n.upper=function(){var o=e("uppercase");n.name=o(n.name)},console.log(l.annotate(o))}function n(o,n,e){return"Blah!!.."}angular.module("DIAPP",[]).controller("DIController",["$scope","$filter","$injector",o]),console.log("Blah!!.."),console.log(n),console.log(n.toString()),console.log(o.toString())}();

//Minified code for the above app.

!function(){"use strict";function o(n,e,l){n.name="mukun",n.upper=function(){var o=e("uppercase");n.name=o(n.name)},console.log(l.annotate(o))}function n(o,n,e){return"Blah!!.."}angular.module("DIAPP",[]).controller("DIController",o),o.$inject=["$scope","$filter","$injector"],console.log("Blah!!.."),console.log(n),console.log(n.toString()),console.log(o.toString())}();