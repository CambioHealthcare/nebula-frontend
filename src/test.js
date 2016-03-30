(function() {
    "use strict";

    var assert = require("chai").assert;

    assert.equal(add(3, 4), 7);

    function add(x, y) {
        return x + y;
    }

}());