'use strict';

angular.module('shoppingCart').component('shoppingCart', {
    templateUrl: 'shopping-cart/shopping-cart.template.html',
    controller: [ 'ShoppingCartService', function ItemListController(ShoppingCartService) {
        var _this = this;

        _this.checkout = function() {
            alert("結帳成功，金額一共是" + ShoppingCartService.getItemsPrice() + "元，謝謝您的惠顧");
        };

        _this.getItemsCount = function() {
            return ShoppingCartService.getItemsCount();
        };
        _this.getItems = function() {
            return ShoppingCartService.getItems();
        };
        _this.getItemsPrice = function() {
            return ShoppingCartService.getItemsPrice();
        };
        _this.removeItem = function(id) {
            return ShoppingCartService.removeItem(id);
        };
    }]
});