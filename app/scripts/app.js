'use strict';

var b2cApp = angular.module('b2cApp', [
    'ngResource',
    'ui.router'
  ]);

  b2cApp.config(function($stateProvider, $urlRouterProvider) {

  	$urlRouterProvider.otherwise('/home');

  	$stateProvider
  	.state('home', {
            url: '/home',
            templateUrl: '../views/home.html',
            controller:'homeCTRL'
            
        })
    .state('packages', {
            url: '/packages',
            templateUrl: '../views/packages.html',
            
            
        });

  });
