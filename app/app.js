'use strict';

// Declare app level module which depends on views, and components
angular.module('mainApp', [
  'ngRoute',
  'itemList',
  'itemInfo',
  'shoppingCart'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.
    when('/itemList', {
      template: '<item-list></item-list>',
      css: 'item-list/item-list.css'
    }).
    when('/itemInfo/:itemId', {
      template: '<item-info></item-info>'
    }).
    when('/shoppingCart', {
      template: '<shopping-cart></shopping-cart>'
    }).
    otherwise('/itemList');
}]);
