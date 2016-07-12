module.exports = function(grunt) {
    grunt.initConfig({
        ts: {
            default: {
                src: ["**/*.ts", "!node_modules/**/*.ts"],
                options: {
                    additionalFlags: '--module "commonjs"',
                      module: "commonjs",
                      noLib: false,
                      target: "es6",
                      sourceMap: false
                }
            }
        },
        // Configure a mochaTest task
        mochaTest: {
            test: {
                options: {
                    reporter: 'spec',
                    captureFile: 'results.txt', // Optionally capture the reporter output to a file
                    quiet: false, // Optionally suppress output to standard out (defaults to false)
                    clearRequireCache: false // Optionally clear the require cache before running tests (defaults to false)
                },
                src: ['test/**/*.js']
            }
        },
        tslint: {
          options: {
            configuration: "tslint.json"
          },
          files: {
            src: ["src/**/*.ts"]
          }
        }
    });

    grunt.loadNpmTasks("grunt-ts");
    grunt.loadNpmTasks('grunt-mocha-test');
    grunt.loadNpmTasks("grunt-tslint");

    grunt.registerTask("default", ["ts", "tslint", "mochaTest"]);
};
