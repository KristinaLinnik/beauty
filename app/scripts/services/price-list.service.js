angular.module('beautyApp').factory('priceListService', [ '$http', function ( $http, netApi ) {
  var f = {
  };

  f.getData = function() {
    return $http.get( '/data/price_list.json')
  };

  return f;

} ] );
