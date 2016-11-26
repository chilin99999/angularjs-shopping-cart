'use strict';

angular.module('itemInfo').component('itemInfo', {
    templateUrl: 'item-info/item-info.template.html',
    controller: [ '$http', '$routeParams', '$filter', function ItemListController($http, $routeParams, $filter) {
        var _this = this;
        var itemId = $routeParams.itemId;

        $http.get('model/items.json').then(function(response) {
            _this.item = $filter('filter')(response.data, function(d) { return d.id == itemId; })[0];
        });
    }]
});