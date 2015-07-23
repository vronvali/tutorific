(function() {
  'use strict';

  angular
    .module('tutorific')
     .config(['localStorageServiceProvider', function(localStorageServiceProvider) {
        localStorageServiceProvider.setPrefix('ls');
    }])
    

})();
