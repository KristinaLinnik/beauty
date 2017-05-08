angular.module('beautyApp').directive('formPopupDirective', ['formPopupService', function(formPopupService) {
  return {
    templateUrl: './scripts/directives/form-popup.directive.html'
    // link: function( scope, element, attrs ){
    //   priceListService.getData( ).then( function( data ) {
    //     scope.priceList = data.data.priceList;
    //   } )
    // }
  };

} ] );
