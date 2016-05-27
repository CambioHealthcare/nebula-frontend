/* globals describe:false, it:false */

(function () {
  "use strict";

  var assert = require("./assert.js");
  var tabs = require("./tabs.js");

  describe("Tabs", function () {

    var IRRELEVANT = "irrelevant"
    var container;

    beforeEach(function() {
      container = document.createElement("div");
      document.body.appendChild(container);
    });

    afterEach(function() {
      removeElement(container);
    });

    it("hides all content elements except the default upon initialization", function() {
      var content1 = createTabContent();
      var defaultContent = createTabContent();
      var content = createTabContent();

      tabs.initialize({
        tabs: [ createTab(), createTab(), createTab() ],
        content: [content1, defaultContent, content],
        default: defaultContent,
        activeTabClass: IRRELEVANT,
        contentHideClass: "hideClass" });

      assert.equal(content1.classList.contains("hideClass"), true, "element1 should be hidden");
      assert.equal(defaultContent.classList.contains("hideClass"), false, "defaultElement should not be hidden");
      assert.equal(content.classList.contains("hideClass"), true, "element3 should be hidden");
    });

    it("preserves existing classes when hiding a content element", function() {
      var defaultContent = createTabContent();
      var hiddenContent = createTabContent();
      hiddenContent.classList.add("existingClass");

      tabs.initialize({
        tabs: [ createTab(), createTab()],
        content: [defaultContent, hiddenContent],
        default: defaultContent,
        activeTabClass: IRRELEVANT,
        contentHideClass: "newClass"});

      assert.equal(hiddenContent.classList.contains("existingClass"), true);
      assert.equal(hiddenContent.classList.contains("newClass"), true);
    });

    it("styles the default tab with a class", function() {
      var defaultContent = createTabContent();
      var defaultTab = createTab();

      tabs.initialize({
        tabs: [ defaultTab ],
        content: [ defaultContent ],
        default: defaultContent,
        activeTabClass: "activeTab",
        contentHideClass: IRRELEVANT
      });

      assert.equal(defaultTab.classList.contains("activeTab"), true);
    });

    it("preserves existing classes on the active tab", function() {
      // TODO
    });

    function createTab() {
      var tab = addElement("div");
      tab.innerHTML = "tab";
      return tab;
    };

    function createTabContent() {
      var tab = addElement("div");
      tab.innerHTML = "content";
      return tab;
    };

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