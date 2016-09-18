(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyShoppingController', ToBuyShoppingController)
.controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];
function ToBuyShoppingController(ShoppingListCheckOffService) {
  var toBuy = this;

  toBuy.toBuyItems = ShoppingListCheckOffService.getToBuyItems();

  toBuy.removeAndAddItem = function(itemIndex) {
    var currentItem = toBuy.toBuyItems[itemIndex];
    console.log("currentItem: ", currentItem);
    ShoppingListCheckOffService.removeToBuyItem(itemIndex);
    ShoppingListCheckOffService.addBoughtItem(currentItem);
  }
}

AlreadyBoughtShoppingController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtShoppingController(ShoppingListCheckOffService) {
  var bought = this;

  bought.boughtItems = ShoppingListCheckOffService.getBoughtItems();
}

function ShoppingListCheckOffService() {
  var service = this;

  // List of shopping items
  var toBuyItems = [{ name: "cookies", quantity: 5 },{ name: "chips", quantity: 10 },
    { name: "ice cream", quantity: 15 },{ name: "nuts", quantity: 20 },{ name: "cakes", quantity: 25 }];

  var boughtItems = [];

  service.getToBuyItems = function() {
    return toBuyItems;
  };

  service.removeToBuyItem = function(indexItem) {
    toBuyItems.splice(indexItem, 1);
  }

  service.getBoughtItems = function() {
    return boughtItems;
  };

  service.addBoughtItem = function(item) {
    boughtItems.push(item);
  }
}

})();
