(function() {
  'use strict';

  angular
    .module('mytodo')
     .config(['localStorageServiceProvider', function(localStorageServiceProvider) {
        localStorageServiceProvider.setPrefix('ls');
    }])
    

})();
