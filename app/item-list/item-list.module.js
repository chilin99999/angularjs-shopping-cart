'use strict';

angular.module('itemList', ['ngCookies'])
    .service('ShoppingCartService', ['$cookies', ShoppingCartService]);