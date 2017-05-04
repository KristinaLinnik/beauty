'use strict';

angular.module('beautyApp').controller('pageController', [ '$scope', function($scope) {
  $scope.showPrice = function($event){
    $('.price-popup').modal()
  }

}]);
