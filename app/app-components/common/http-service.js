'use strict';

/**
 * @ngdoc function
 * @name meetutuApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the meetutuApp
 */
angular.module('meetutuApp').service('HttpService', ['$q', '$timeout', '$http', function($q, $timeout, $http) {

    this.loadDrivingTime = function(requestBody) {
        let request = angular.copy(requestBody);
        request.arrival_time = request.time.getTime();
        delete request.time;

        let params = $.param(request) + "&key=AIzaSyB6ky0s6kmaxH15hsxsNHKuZeI6n_OG2eA";

        let url = "http://localhost:3000/driving-time?" + params;
        return $http({ url, method: 'GET', headers: { Authorization: undefined } });
    };

}]);