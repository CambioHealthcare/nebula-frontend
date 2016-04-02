/* globals describe:false, it:false */

(function() {
    "use strict";
    var addition = require("./addition.js");
    var assert = require("./assert.js");

     describe("Addition", function() {

         it("adds positive numbers", function () {
            assert.equal(addition.add(3, 4), 7);
         });

         it("adds floating numbers", function () {
             assert.equal(addition.add(0.1, 0.2), 0.30000000000000004);
         });

    });

}());