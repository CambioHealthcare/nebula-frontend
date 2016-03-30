/* globals describe:false, it:false */

(function() {
    "use strict";

    var assert = require("chai").assert;

    describe("Addition", function() {

        it("adds positive numbers", function() {
            assert.equal(add(3, 4), 7);
        });
    });

    function add(x, y) {
        return x + y;
    }

}());