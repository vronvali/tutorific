"use strict";

/**
 * @ngdoc directive
 * @name mytodo.directive:fielddbTutorial
 * @description
 * # fielddbTutorial
 */
angular.module("mytodo").directive("tutorialSlider", function() {
  return {
    templateUrl: "components/tutorial/tutorial.html",
    restrict: "A",
    transclude: false,
    scope: {
      tutorial: "=json"
    },
    controller: function($scope, $rootScope) {
    
    },
    link: function postLink() {}
  };
});
