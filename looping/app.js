(function () {
    'use strict';

    var shoppingList1 = ["Rice", "Meat", "Apple", "Milk", "Water", "Soap", "Beer"];
    var shoppingList2 = [
        {
            item: "Rice",
            quantity: "2 Kg"
        }, {
            item: "Meat",
            quantity: "1 Kg"
        }, {
            item: "Apple",
            quantity: "3 Kg"
        }, {
            item: "Milk",
            quantity: "1 Ltr"
        }, {
            item: "Water",
            quantity: "2 Bottle"
        }, {
            item: "Soap",
            quantity: "1"
        }, {
            item: "Beer",
            quantity: "2"
        }
    ];

    angular.module('ShoppingListApp', [])
        .controller('ShoppingListController', ShoppingListController);
    ShoppingListController.$inject = ['$scope'];

    function ShoppingListController($scope) {
        $scope.shoppingList1 = shoppingList1;
        $scope.shoppingList2 = shoppingList2;

        $scope.addToList=function(){
            var newItem={
                item:$scope.newItemName,
                quantity:$scope.newItemQuantity
            };

            $scope.shoppingList2.push(newItem);
        }
    }
})();