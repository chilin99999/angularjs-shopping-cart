'use strict';

angular.module('shoppingCart', ['ngCookies'])
    .service('ShoppingCartService', ['$cookies', ShoppingCartService]);