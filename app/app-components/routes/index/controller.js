'use strict';

/**
 * @ngdoc function
 * @name meetutuApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the meetutuApp
 */
angular.module('meetutuApp').controller('IndexCtrl', ['$q', 'HttpService', '$timeout', '$location', function($q, httpService, $timeout, $location) {
    var scope = this;

    scope.userDetails = {
        email: 'askjdnaskj2askjdnaskjdn@akjdnskja.com'
    };

    scope.rideDetails = {
        origins: '12.927880,77.627600',
        destinations: '13.035542,77.597100',
        time: new Date(2016, 08, 12, 13, 0, 0)
    };

    scope.setTimer = function() {
        httpService.loadDrivingTime(scope.rideDetails).then((response) => {
            let details = response[0].elements;

            if (details) {
                scope.timeTaken = Math.ceil(details.duration.value / 60);
            }
        });
    }

}]);