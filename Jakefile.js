/* globals jake:false, desc:false, task:false, fail:false, complete:false */
(function() {
    "use strict";
    
    var semver = require("semver");
    var jshint = require("simplebuild-jshint");
    
    desc("Default task");
    task("default", [ "version", "lint", "test" ], function() {
        console.log("\n\nBuild OK");
    });

    desc("Run localhost server");
    task("run", function() {
        jake.exec("node node_modules/http-server/bin/http-server src", { interactive: true}, complete);
    }, { async: true });

    desc("Check Node version");
    task("version", function() {
       console.log("Checking Node version: .");
       var packageJson = require("./package.json");
       var expectedVersion = packageJson.engines.node;
       var actualVersion = process.version;
       
       if (!semver.gte(actualVersion, expectedVersion)) {
           fail("Wrong version, expected " + expectedVersion + " got " + actualVersion);
       }
    });

    task("lint", function() {
        process.stdout.write("Linting JavaScript: ");
        jshint.checkFiles({
            files: ["Jakefile.js", "src/**/*.js"],
            options: lintOptions(),
            globals: lintGlobals()
        }, complete, fail);
    }, { async: true });

    function lintOptions(){
        return {
            bitwise: true,
            eqeqeq: true,
            forin: true,
            freeze: true,
            futurehostile: true,
            latedef: "nofunc",
            noarg: true,
            nocomma: true,
            nonbsp: true,
            nonew: true,
            strict: true,
            undef: true,
            node: true,
            browser: true
        };
    }
    function lintGlobals(){
        return {
            //mocha
            describe:false,
            it:false,
            before:false,
            after:false,
            beforeEach:false,
            afterEach:false
        };
    }

    task("test", function(){
        console.log("Starting test!");
        jake.exec("node node_modules/mocha/bin/mocha  src/test.js",{ interactive: true}, complete);
    }, { async: true });

}());