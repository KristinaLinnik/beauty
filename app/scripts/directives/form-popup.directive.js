angular.module('beautyApp').directive('formPopupDirective', ['formPopupService', function(formPopupService) {
  return {
    templateUrl: './scripts/directives/form-popup.directive.html',
    link: function( scope, element, attrs ){
      scope.form = {};
      scope.mailSent = false;
      scope.onSubmit = function( e ) {
        e.preventDefault();
        if ( !scope.form.phone || !scope.form.message )
          return;
        $.post( '/send-mail.php', scope.form, function() {
          scope.mailSent = true;
          if ( !scope.$$phase )
            scope.$apply();
          setTimeout( function() {
            scope.mailSent = false;
            scope.form = {};
            if ( !scope.$$phase )
              scope.$apply();
          }, 5000 );
        } );
      }
    }
  };

} ] );
