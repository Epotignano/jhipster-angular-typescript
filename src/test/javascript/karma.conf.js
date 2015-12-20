// Karma configuration
// http://karma-runner.github.io/0.10/config/configuration-file.html

module.exports = function (config) {
    config.set({
        // base path, that will be used to resolve files and exclude
        basePath: '../../',

        // testing framework to use (jasmine/mocha/qunit/...)
        frameworks: ['jasmine'],

        // list of files / patterns to load in the browser
        files: [
            // bower:js
            'main/webapp/modernizr/modernizr.js',
            'main/webapp/jquery/dist/jquery.js',
            'main/webapp/angular/angular.js',
            'main/webapp/angular-aria/angular-aria.js',
            'main/webapp/angular-bootstrap/ui-bootstrap-tpls.js',
            'main/webapp/angular-cache-buster/angular-cache-buster.js',
            'main/webapp/angular-cookies/angular-cookies.js',
            'main/webapp/angular-dynamic-locale/src/tmhDynamicLocale.js',
            'main/webapp/angular-local-storage/dist/angular-local-storage.js',
            'main/webapp/angular-loading-bar/build/loading-bar.js',
            'main/webapp/angular-resource/angular-resource.js',
            'main/webapp/angular-sanitize/angular-sanitize.js',
            'main/webapp/angular-translate/angular-translate.js',
            'main/webapp/messageformat/messageformat.js',
            'main/webapp/angular-translate-interpolation-messageformat/angular-translate-interpolation-messageformat.js',
            'main/webapp/angular-translate-loader-partial/angular-translate-loader-partial.js',
            'main/webapp/angular-translate-storage-cookie/angular-translate-storage-cookie.js',
            'main/webapp/angular-ui-router/release/angular-ui-router.js',
            'main/webapp/angular-animate/angular-animate.js',
            'main/webapp/angular-material/angular-material.js',
            'main/webapp/json3/lib/json3.js',
            'main/webapp/ng-file-upload/ng-file-upload.js',
            'main/webapp/ngInfiniteScroll/build/ng-infinite-scroll.js',
            'main/webapp/sockjs-client/dist/sockjs.js',
            'main/webapp/stomp-websocket/lib/stomp.min.js',
            'main/webapp/angular-mocks/angular-mocks.js',
            // endbower
            'main/webapp/scripts/app/app.js',
            'main/webapp/scripts/app/**/*.js',
            'main/webapp/scripts/components/**/*.+(js|html)',
            'test/javascript/spec/helpers/module.js',
            'test/javascript/spec/helpers/httpBackend.js',
            'test/javascript/**/!(karma.conf|protractor.conf).js'
        ],


        // list of files / patterns to exclude
        exclude: ['test/javascript/e2e/**'],

        preprocessors: {
            './**/*.js': ['coverage']
        },

        reporters: ['dots', 'jenkins', 'coverage', 'progress'],

        jenkinsReporter: {
            
            outputFile: '../target/test-results/karma/TESTS-results.xml'
        },

        coverageReporter: {
            
            dir: '../target/test-results/coverage',
            reporters: [
                {type: 'lcov', subdir: 'report-lcov'}
            ]
        },

        // web server port
        port: 9876,

        // level of logging
        // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
        logLevel: config.LOG_INFO,

        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: false,

        // Start these browsers, currently available:
        // - Chrome
        // - ChromeCanary
        // - Firefox
        // - Opera
        // - Safari (only Mac)
        // - PhantomJS
        // - IE (only Windows)
        browsers: ['PhantomJS'],

        // Continuous Integration mode
        // if true, it capture browsers, run tests and exit
        singleRun: false,

        // to avoid DISCONNECTED messages when connecting to slow virtual machines
        browserDisconnectTimeout : 10000, // default 2000
        browserDisconnectTolerance : 1, // default 0
        browserNoActivityTimeout : 4*60*1000 //default 10000
    });
};
