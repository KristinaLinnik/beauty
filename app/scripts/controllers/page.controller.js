'use strict';

angular.module('beautyApp').controller('pageController', [ '$scope', function($scope) {


  // $scope.readMore = function ($event) {
  //   $(".content").hide();
  //   $(".show_hide").on("click", function () {
  //     var txt = $(".content").is(':visible') ? 'Read More' : 'Read Less';
  //     $(".show_hide").text(txt);
  //     $(this).next('.content').slideToggle(200);
  //   });

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







