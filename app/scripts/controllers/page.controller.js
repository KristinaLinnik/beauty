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


  $scope.form = {};
  $scope.mailSent = false;
  $scope.onSubmit = function( e ) {
    e.preventDefault();
    if ( !$scope.form.phone || !$scope.form.message )
      return;
    $.post( '/send-mail.php', $scope.form, function() {
      $scope.mailSent = true;
      if (!$scope.$$phase)
        $scope.$apply();
      setTimeout( function() {
        $scope.mailSent = false;
        $scope.form = {}
        if (!$scope.$$phase)
          $scope.$apply();

      }, 5000 );
    } );
  }




}]);







