'use strict';

/**
 * @ngdoc overview
 * @name meetutuApp
 * @description
 * # meetutuApp
 *
 * Main module of the application.
 */
angular
    .module('meetutuApp', [
        'ngAnimate',
        'ngCookies',
        'ui.bootstrap',
        'ngResource',
        'uiGmapgoogle-maps',
        'ngRoute',
        'ngTagsInput',
        'ngSanitize'
    ]);

angular.module('meetutuApp').config(['$routeProvider', 'uiGmapGoogleMapApiProvider', function($routeProvider, uiGmapGoogleMapApiProvider) {

    uiGmapGoogleMapApiProvider.configure({
        v: '3.20',
        libraries: 'weather,geometry,visualization'
    });

    $routeProvider
        .when('/', {
            templateUrl: 'app-components/routes/index/template.html',
            controller: 'IndexCtrl',
            controllerAs: 'indexCtrl'
        })
        .otherwise({
            redirectTo: '/'
        });


}]);