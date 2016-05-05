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

    it("hides all content elements except the default upon initialization", function() {
      var element1 = addElement("div");
      var defaultElement = addElement("div");
      var element3 = addElement("div");

      tabs.initialize({
        content: [element1, defaultElement, element3],
        default: defaultElement,
        contentHideClass: "hideClass" });

      assert.equal(element1.classList.contains("hideClass"), true, "element1 should be hidden");
      assert.equal(defaultElement.classList.contains("hideClass"), false, "defaultElement should not be hidden");
      assert.equal(element3.classList.contains("hideClass"), true, "element3 should be hidden");
    });

    it("preserves existing classes when hiding a content element", function() {
      var defaultElement = addElement("div");
      var hiddenElement = addElement("div");
      hiddenElement.classList.add("existingClass");

      tabs.initialize({
        content: [defaultElement, hiddenElement],
        default: defaultElement,
        contentHideClass: "newClass"});

      assert.equal(hiddenElement.classList.contains("existingClass"), true);
      assert.equal(hiddenElement.classList.contains("newClass"), true);
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