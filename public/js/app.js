'use strict';

// Declare app level module which depends on filters, and services

angular.module('multi-screen-demo', [
  'multi-screen-demo.controllers',
  'multi-screen-demo.directives',
  'multi-screen-demo.filters',
  'multi-screen-demo.services',

  'ngRoute'
]).
config(function ($routeProvider, $locationProvider) {
  $routeProvider.
    when('/', {
      templateUrl: '/partials/home'
    }).
    when('/about', {
      templateUrl: '/partials/about'
    }).
    otherwise({
      redirectTo: '/'
    });

  $locationProvider.html5Mode(true);
});