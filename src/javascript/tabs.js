(function () {
  "use strict";

  exports.initialize = function initialize(elements, className) {
    elements.forEach(function(element) {
      element.classList.add(className);
    });
  };
}());
