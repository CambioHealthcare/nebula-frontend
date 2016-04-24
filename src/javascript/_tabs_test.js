/* globals describe:false, it:false */

(function () {
  "use strict";

  var assert = require("./assert.js");
  var tabs = require("./tabs.js");

  describe("Tabs", function () {

    it("sets a class on an element when that element has no existing classes", function () {
      var element = addElement("div");
      tabs.initialize(element, "someClass");

      assert.equal(element.classList.contains("someClass"), true);

      removeElement(element);
    });

    it("sets a class on an element without erasing existing classes", function() {
      var element = addElement("div");
      element.classList.add("existingClass");

      tabs.initialize(element, "newClass");

      assert.equal(element.classList.contains("existingClass"), true);
      assert.equal(element.classList.contains("newClass"), true);

      removeElement(element);
    });

    function addElement(name) {
      var element = document.createElement(name);
      document.body.appendChild(element);
      return element;
    }

    function removeElement(element) {
      element.parentNode.removeChild(element);
    }
  });

}());