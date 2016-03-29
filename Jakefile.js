(function() {
    "use strict"
    
    var semver = require("semver");
    
    desc("Default task");
    task("default", [ "version" ], function() {
        console.log("\n\nBuild OK");
    });
    desc("Check Node version");
    task("version", function() {
       console.log("Checking Node version");
       
       var packageJson = require("./package.json");
       var expectedVersion = packageJson.engines.node;
       var actualVersion = process.version;
       
       if (!semver.gte(actualVersion, expectedVersion)) {
           fail("Wrong version, expected " + expectedVersion + " got " + actualVersion);
       }
    });
}());