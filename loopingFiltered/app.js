(function () {
    'use strict';

    var shoppingList1 = ["Rice", "Meat", "Apple", "Milk", "Water", "Soap", "Beer"];

    angular.module('ShoppingListApp', [])
        .controller('ShoppingListController', ShoppingListController);
    ShoppingListController.$inject = ['$scope'];

    function ShoppingListController($scope) {
        $scope.shoppingList1 = shoppingList1;
    }
})();