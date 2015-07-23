"use strict";
/* globals document, window */

/**
 * @ngdoc directive
 * @name mytodo.directive:fielddbTutorial
 * @description
 * # fielddbTutorial
 */
angular.module("mytodo").directive("tutorialSlider", function() {
  return {
    templateUrl: "app/components/tutorial/tutorial.html",
    restrict: "A",
    transclude: false,
    scope: {
      tutorial: "=json"
    },
    controller: function($scope) {
       $scope.tutorialpopups = ["tutorialIntroSlide", "tutorialAddRemoveSlide", "tutorialStorageSlide"];
      var currentPopUp = "";

      function toggle(div_id) {
        var el = document.getElementById(div_id);
        if (el.style.display === 'none') {
          el.style.display = 'block';
        } else {
          el.style.display = 'none';
        }
      }

      function blanket_size() {
        var viewportheight;
        var blanket_height;
        var popUpDiv_height;
        if (typeof window.innerWidth !== 'undefined') {
          viewportheight = window.innerHeight;
        } else {
          viewportheight = document.documentElement.clientHeight;
        }
        if ((viewportheight > document.body.parentNode.scrollHeight) && (viewportheight > document.body.parentNode.clientHeight)) {
          blanket_height = viewportheight;
        } else {
          if (document.body.parentNode.clientHeight > document.body.parentNode.scrollHeight) {
            blanket_height = document.body.parentNode.clientHeight;
          } else {
            blanket_height = document.body.parentNode.scrollHeight;
          }
        }
        var blanket = document.getElementById('blanket');
        blanket.style.height = blanket_height + 'px';
        for (var i = $scope.tutorialpopups.length - 1; i >= 0; i--) {
          var popUpDiv = document.getElementById($scope.tutorialpopups[i]);
          popUpDiv_height = blanket_height / 2 - 200; //200 is half popup's height
          popUpDiv.style.top = popUpDiv_height + 'px';
        }
      }

      function window_pos(popUpDivVar) {
        var viewportwidth;
        var window_width;
        if (typeof window.innerWidth !== 'undefined') {
          viewportwidth = window.innerHeight;
        } else {
          viewportwidth = document.documentElement.clientHeight;
        }
        if ((viewportwidth > document.body.parentNode.scrollWidth) && (viewportwidth > document.body.parentNode.clientWidth)) {
          window_width = viewportwidth;
        } else {
          if (document.body.parentNode.clientWidth > document.body.parentNode.scrollWidth) {
            window_width = document.body.parentNode.clientWidth;
          } else {
            window_width = document.body.parentNode.scrollWidth;
          }
        }
        var popUpDiv = document.getElementById(popUpDivVar);
        window_width = window_width / 2 - 200; //200 is half popup's width
        popUpDiv.style.left = window_width + 'px';
      }

      function popup(windowname) {
        blanket_size(windowname);
        window_pos(windowname);
        toggle('blanket');
        toggle(windowname);
      }

      $scope.next_popup = function(popups) {
          if (currentPopUp) {
            toggle(currentPopUp);
          }
          if (!popups || popups.length < 1) {
            toggle("blanket");
            return;
          }
          var popupname = popups.splice(0, 1);
          popup(popupname);
          currentPopUp = popupname;

          // body...
        };
        //This will cause the popup to show immediently
      $scope.next_popup($scope.tutorialpopups);
    },
    link: function postLink() {}
  };
});
