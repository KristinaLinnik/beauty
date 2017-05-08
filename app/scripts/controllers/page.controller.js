'use strict';

angular.module('beautyApp').controller('pageController', [ '$scope', function($scope) {
  $scope.showPrice = function($event){
    $('.price-popup').modal()
  },
  $scope.showForm = function($event){
    $('.form-popup').modal()
  },
  $scope.showContacts = function($event){
    $('.contacts-popup').modal()
  }

}]);
