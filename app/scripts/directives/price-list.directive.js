angular.module('beautyApp').directive('priceListDirective', ['priceListService', function(priceListService) {
  return {
    templateUrl: './scripts/directives/price-list.directive.html',
    link: function( scope, element, attrs ){
      priceListService.getData( ).then( function( data ) {
        scope.priceList = data.data.priceList;
      } )
    }
  };

} ] );
