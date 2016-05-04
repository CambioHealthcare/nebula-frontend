/* globals describe:false, it:false */

(function () {
  "use strict";

  var assert = require("./assert.js");
  var tabs = require("./tabs.js");

  describe("Tabs", function () {

    var container;

    beforeEach(function() {
      container = document.createElement("div");
      document.body.appendChild(container);
    });

    afterEach(function() {
      removeElement(container);
    });

    it("hides an element by setting a class", function () {
      var element = addElement("div");
      tabs.initialize([element], "someClass");

      assert.equal(element.classList.contains("someClass"), true);
    });

    it("hides multiple elements", function() {
      var element1 = addElement("div");
      var element2 = addElement("div");
      var element3 = addElement("div");

      tabs.initialize([element1, element2, element3], "hideClass");

      assert.equal(element1.classList.contains("hideClass"), true, "element1");
      assert.equal(element2.classList.contains("hideClass"), true, "element2");
      assert.equal(element3.classList.contains("hideClass"), true, "element3");
    });

    it("preserves existing classes when hiding an element", function() {
      var element = addElement("div");
      element.classList.add("existingClass");

      tabs.initialize([element], "newClass");

      assert.equal(element.classList.contains("existingClass"), true);
      assert.equal(element.classList.contains("newClass"), true);
    });

    function addElement(name) {
      var element = document.createElement(name);
      container.appendChild(element);
      return element;
    }

    function removeElement(element) {
      element.parentNode.removeChild(element);
    }
  });

}());