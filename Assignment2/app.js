(function () {
    'use strict';
    angular.module('ShoppingCheckOffApp', [])
        .controller('ToBuyController', ToBuyController)
        .controller('AlreadyBoughtController', AlreadyBoughtController)
        .service('ShoppingCheckOffService', ShoppingCheckOffService);
    ToBuyController.$inject = ['ShoppingCheckOffService'];

    function ToBuyController(ShoppingCheckOffService) {
        var toBuy = this;
        toBuy.items = ShoppingCheckOffService.getItems();
        console.log(toBuy.items);
        toBuy.moveToAalreadyBought = function (itemIndex) {
            console.log("clicked");

            try {
                ShoppingCheckOffService.moveToAalreadyBought(itemIndex);
            } catch (error) {
                toBuy.Message = error.message;
            }
        }

    }

    function AlreadyBoughtController(ShoppingCheckOffService) {
        var alreadyBought = this;
        alreadyBought.Message="Nothing Bought Yet.";
        alreadyBought.boughtItems = ShoppingCheckOffService.getBoughtItems();
    }


    function ShoppingCheckOffService() {
        var service = this;
        var items = [
            {
                name: 'Banana',
                quantity: '5 Pieces'
            }, {
                name: 'Apple',
                quantity: '15 Pieces'
            }, {
                name: 'Orange',
                quantity: '7 Pieces'
            }, {
                name: 'Grape',
                quantity: '2 Kgs'
            }, {
                name: 'PineApple',
                quantity: '2 Pieces'
            }, {
                name: 'Mango',
                quantity: '3 Kgs'
            }, {
                name: 'WaterMelon',
                quantity: '1 Pieces'
            }, {
                name: 'Strawberry',
                quantity: '6 Pieces'
            }, {
                name: 'Blueberry',
                quantity: '9 Pieces'
            }, {
                name: 'Beer',
                quantity: '5 Bottle'
            }
        ];
        var alreadyBought = [];

        service.moveToAalreadyBought = function (itemIndex) {
            alreadyBought.push(items[itemIndex]);
            items.splice(itemIndex, 1);
            if (items.length == 0) {
                throw new Error("Everything is bought!");
            }
        };

        service.getItems = function () {
            return items;
        };
        
        service.getBoughtItems = function () {
            return alreadyBought;
        };
    }
})();