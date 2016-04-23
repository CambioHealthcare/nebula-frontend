/* globals describe:false, it:false */

(function () {
  "use strict";

  var assert = require("./assert.js");
  var tabs = require("./tabs.js");

  describe("Tabs", function () {

    it("hides an element", function () {
      var element = addElement("div");
      tabs.initialize(element);
      assert.equal(getStyleProperty(element, "display"), "none");
      removeElement(element);
    });

    function addElement(name) {
      var element = document.createElement(name);
      document.body.appendChild(element);
      return element;
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