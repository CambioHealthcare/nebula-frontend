/* globals describe:false, it:false */

(function() {
    "use strict";

     describe("Addition", function() {

         it("adds positive numbers", function () {
            assertEqual(add(3, 4), 7);
         });

         it("adds floating numbers", function () {
             assertEqual(add(0.1, 0.2), 0.30000000000000004);
         });

        function assertEqual(actual, expected) {
            if (actual !== expected) throw new Error("Expected: " + expected + ", got: " + actual + ".");
        }
    });

        function add(x, y) {
            return x + y;
        }

}());