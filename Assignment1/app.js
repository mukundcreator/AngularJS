(function () {
    'use strict';
    angular.module('CheckFood', [])
        .controller('CheckFoodCotroller', CheckFoodCotroller);
    CheckFoodCotroller.$inject = ['$scope'];

    function CheckFoodCotroller($scope) {

        $scope.mainFunction = function () {
            var foodItemCount = getFoodItemCount($scope.foodItems);

            if (foodItemCount <= 3) {
                $scope.message = "Enjoy!";
            } else {
                $scope.message = "Too much!";

            }
        }
    }

    function getFoodItemCount(allFoodItems) {
        return splitFoodItems(allFoodItems).length;
    }

    function splitFoodItems(fooditems) {
        return fooditems.split(',');
    }
})();