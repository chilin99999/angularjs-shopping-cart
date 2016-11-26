'use strict';

angular.module('itemList').component('itemList', {
    templateUrl: 'item-list/item-list.template.html',
    controller: [ '$http', 'ShoppingCartService', function ItemListController($http, ShoppingCartService) {
        var _this = this;

        $http.get('model/items.json').then(function(response) {
            _this.items = response.data;
        });

        _this.getItemsCount = function() {
            return ShoppingCartService.getItemsCount();
        }
        _this.addItem = function(item) {
            ShoppingCartService.addItem(item);
        }
    }]
});