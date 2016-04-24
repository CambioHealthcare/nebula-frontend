/* globals describe:false, it:false */

(function () {
  "use strict";

  var assert = require("./assert.js");
  var tabs = require("./tabs.js");

  describe("Tabs", function () {

    it("sets a class on an element", function () {
      var element = addElement("div");
      tabs.initialize(element, "someClass");

      //assert.equal(getStyleProperty(element, "display"), "none");
      assert.equal(getClass(element), "someClass");

      removeElement(element);
    });

    function addElement(name) {
      var element = document.createElement(name);
      document.body.appendChild(element);
      return element;
    }

    function getClass(element) {
      return element.getAttribute("class");
    }
    function getStyleProperty(element, propertyName) {
      var styles = getComputedStyle(element);
      var display = styles.getPropertyValue(propertyName);
      return display;
    }

    function removeElement(element) {
      element.parentNode.removeChild(element);
    }
  });

}());