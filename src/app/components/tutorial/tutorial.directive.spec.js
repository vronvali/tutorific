/* globals FieldDB */
"use strict";
var debugMode = false;

describe("Directive: tutorial", function() {

  // load the directive's module and the template
  beforeEach(module("mytodo"));
  beforeEach(module("mytodoTemplates"));
  var el, scope, compileFunction;

  beforeEach(inject(function($rootScope, $compile) {
    el = angular.element("<div data-tutorial-slider json='tutorial2'></div> <div data-tutorial-slider json='tutorial1'></div>");
    scope = $rootScope.$new();
    scope.tutorial1 = ["tutorialIntroSlide", "tutorialAddRemoveSlide", "tutorialStorageSlide"];
    scope.tutorial2 = ["tutorialIntroSlide", "tutorialAddRemoveSlide", "tutorialStorageSlide"];
    compileFunction = $compile(el);
    // bring html from templateCache
    scope.$digest();
    if (debugMode) {
      console.log("post compile", el.html()); // <== html here has {{}}
    }
  }));

  // http://stackoverflow.com/questions/17223850/how-to-test-directives-that-use-templateurl-and-controllers
  it("should make a tutorial element with contents from scope", function() {

    inject(function() {
      compileFunction(scope); // <== the html {{}} are bound
      try {
        if (!scope.$$phase) {
          scope.$digest(); // <== digest to get the render to show the bound values
        }
      } catch (e) {
        console.log("error digesting scope");
      }
      if (debugMode) {
        console.log("post link", el.html());
        console.log("scope tutorial2 ", scope.tutorial2);
        console.log("scope tutorial1 ", scope.tutorial1);
      }
      expect(angular.element(el).text().trim()).toEqual("hello");
      // expect(angular.element(el.find("dd")[0]).text().trim()).toEqual("hello");
    });
  });
  xit("should have an array of slides", function() {

    inject(function() {
      compileFunction(scope); // <== the html {{}} are bound
      try {
        if (!scope.$$phase) {
          scope.$digest(); // <== digest to get the render to show the bound values
        }
      } catch (e) {
        console.log("error digesting scope");
      }
      if (debugMode) {
        console.log("post link", el.html());
        console.log("scope tutorial2 ", scope.tutorial2);
        console.log("scope tutorial1 ", scope.tutorial1);
      }
      expect(angular.element(el).text().trim()).toEqual("hello");
      // expect(angular.element(el.find("dd")[0]).text().trim()).toEqual("hello");
    });
  });
  xit("should start on the first slide", function() {

    inject(function() {
      compileFunction(scope); // <== the html {{}} are bound
      try {
        if (!scope.$$phase) {
          scope.$digest(); // <== digest to get the render to show the bound values
        }
      } catch (e) {
        console.log("error digesting scope");
      }
      if (debugMode) {
        console.log("post link", el.html());
        console.log("scope tutorial2 ", scope.tutorial2);
        console.log("scope tutorial1 ", scope.tutorial1);
      }
      expect(angular.element(el).text().trim()).toEqual("hello");
      // expect(angular.element(el.find("dd")[0]).text().trim()).toEqual("hello");
    });
  });
  xit("should go to the next slide if user pushes next", function() {

    inject(function() {
      compileFunction(scope); // <== the html {{}} are bound
      try {
        if (!scope.$$phase) {
          scope.$digest(); // <== digest to get the render to show the bound values
        }
      } catch (e) {
        console.log("error digesting scope");
      }
      if (debugMode) {
        console.log("post link", el.html());
        console.log("scope tutorial2 ", scope.tutorial2);
        console.log("scope tutorial1 ", scope.tutorial1);
      }
      expect(angular.element(el).text().trim()).toEqual("hello");
      // expect(angular.element(el.find("dd")[0]).text().trim()).toEqual("hello");
    });
  });
});
