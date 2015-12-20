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
            'main/webapp/bower_components/modernizr/modernizr.js',
            'main/webapp/bower_components/jquery/dist/jquery.js',
            'main/webapp/bower_components/angular/angular.js',
            'main/webapp/bower_components/angular-aria/angular-aria.js',
            'main/webapp/bower_components/angular-messages/angular-messages.js',
            'main/webapp/bower_components/angular-route/angular-route.js',
            'main/webapp/bower_components/angular-bootstrap/ui-bootstrap-tpls.js',
            'main/webapp/bower_components/angular-cache-buster/angular-cache-buster.js',
            'main/webapp/bower_components/angular-cookies/angular-cookies.js',
            'main/webapp/bower_components/angular-dynamic-locale/src/tmhDynamicLocale.js',
            'main/webapp/bower_components/angular-local-storage/dist/angular-local-storage.js',
            'main/webapp/bower_components/angular-loading-bar/build/loading-bar.js',
            'main/webapp/bower_components/angular-resource/angular-resource.js',
            'main/webapp/bower_components/angular-touch/angular-touch.js',
            'main/webapp/bower_components/angular-sanitize/angular-sanitize.js',
            'main/webapp/bower_components/angular-translate/angular-translate.js',
            'main/webapp/bower_components/messageformat/messageformat.js',
            'main/webapp/bower_components/angular-translate-interpolation-messageformat/angular-translate-interpolation-messageformat.js',
            'main/webapp/bower_components/angular-translate-loader-partial/angular-translate-loader-partial.js',
            'main/webapp/bower_components/angular-translate-storage-cookie/angular-translate-storage-cookie.js',
            'main/webapp/bower_components/angular-ui-router/release/angular-ui-router.js',
            'main/webapp/bower_components/angular-animate/angular-animate.js',
            'main/webapp/bower_components/angular-material/angular-material.js',
            'main/webapp/bower_components/lodash/lodash.js',
            'main/webapp/bower_components/rxjs/dist/rx.all.js',
            'main/webapp/bower_components/moment/moment.js',
            'main/webapp/bower_components/json3/lib/json3.js',
            'main/webapp/bower_components/ng-file-upload/ng-file-upload.js',
            'main/webapp/bower_components/ngInfiniteScroll/build/ng-infinite-scroll.js',
            'main/webapp/bower_components/sockjs-client/dist/sockjs.js',
            'main/webapp/bower_components/stomp-websocket/lib/stomp.min.js',
            'main/webapp/bower_components/api-check/dist/api-check.js',
            'main/webapp/bower_components/angular-formly/dist/formly.js',
            'main/webapp/bower_components/Chart.js/Chart.js',
            'main/webapp/bower_components/angular-chart.js/dist/angular-chart.js',
            'main/webapp/bower_components/chartist/dist/chartist.min.js',
            'main/webapp/bower_components/angular-chartist.js/dist/angular-chartist.js',
            'main/webapp/bower_components/datatables/media/js/jquery.dataTables.js',
            'main/webapp/bower_components/angular-datatables/dist/angular-datatables.js',
            'main/webapp/bower_components/angular-datatables/dist/plugins/bootstrap/angular-datatables.bootstrap.js',
            'main/webapp/bower_components/angular-datatables/dist/plugins/colreorder/angular-datatables.colreorder.js',
            'main/webapp/bower_components/angular-datatables/dist/plugins/columnfilter/angular-datatables.columnfilter.js',
            'main/webapp/bower_components/angular-datatables/dist/plugins/light-columnfilter/angular-datatables.light-columnfilter.js',
            'main/webapp/bower_components/angular-datatables/dist/plugins/colvis/angular-datatables.colvis.js',
            'main/webapp/bower_components/angular-datatables/dist/plugins/fixedcolumns/angular-datatables.fixedcolumns.js',
            'main/webapp/bower_components/angular-datatables/dist/plugins/fixedheader/angular-datatables.fixedheader.js',
            'main/webapp/bower_components/angular-datatables/dist/plugins/scroller/angular-datatables.scroller.js',
            'main/webapp/bower_components/angular-datatables/dist/plugins/tabletools/angular-datatables.tabletools.js',
            'main/webapp/bower_components/angular-datatables/dist/plugins/buttons/angular-datatables.buttons.js',
            'main/webapp/bower_components/angular-datatables/dist/plugins/select/angular-datatables.select.js',
            'main/webapp/bower_components/angular-simple-logger/dist/angular-simple-logger.js',
            'main/webapp/bower_components/angular-google-maps/dist/angular-google-maps.js',
            'main/webapp/bower_components/d3/d3.js',
            'main/webapp/bower_components/nvd3/build/nv.d3.js',
            'main/webapp/bower_components/angular-nvd3/dist/angular-nvd3.js',
            'main/webapp/bower_components/momentjs/moment.js',
            'main/webapp/bower_components/humanize-duration/humanize-duration.js',
            'main/webapp/bower_components/angular-timer/dist/angular-timer.js',
            'main/webapp/bower_components/fullcalendar/dist/fullcalendar.js',
            'main/webapp/bower_components/angular-ui-calendar/src/calendar.js',
            'main/webapp/bower_components/c3/c3.js',
            'main/webapp/bower_components/c3-angular/c3-angular.min.js',
            'main/webapp/bower_components/datatables-responsive/js/dataTables.responsive.js',
            'main/webapp/bower_components/handlebars/handlebars.js',
            'main/webapp/bower_components/highlightjs/highlight.pack.js',
            'main/webapp/bower_components/mobile-detect/mobile-detect.js',
            'main/webapp/bower_components/perfect-scrollbar/js/perfect-scrollbar.jquery.js',
            'main/webapp/bower_components/perfect-scrollbar/js/perfect-scrollbar.js',
            'main/webapp/bower_components/rangy/rangy-core.js',
            'main/webapp/bower_components/rangy/rangy-classapplier.js',
            'main/webapp/bower_components/rangy/rangy-highlighter.js',
            'main/webapp/bower_components/rangy/rangy-selectionsaverestore.js',
            'main/webapp/bower_components/rangy/rangy-serializer.js',
            'main/webapp/bower_components/rangy/rangy-textrange.js',
            'main/webapp/bower_components/textAngular/dist/textAngular.js',
            'main/webapp/bower_components/textAngular/dist/textAngular-sanitize.js',
            'main/webapp/bower_components/textAngular/dist/textAngularSetup.js',
            'main/webapp/bower_components/toastr/toastr.js',
            'main/webapp/bower_components/Sortable/Sortable.js',
            'main/webapp/bower_components/Sortable/ng-sortable.js',
            'main/webapp/bower_components/Sortable/knockout-sortable.js',
            'main/webapp/bower_components/Sortable/react-sortable-mixin.js',
            'main/webapp/bower_components/angular-smart-table/dist/smart-table.js',
            'main/webapp/bower_components/angular-upload/angular-upload.js',
            'main/webapp/bower_components/ng-file-upload-shim/ng-file-upload-shim.js',
            'main/webapp/bower_components/object.observe/dist/object-observe.min.js',
            'main/webapp/bower_components/moment-timezone/builds/moment-timezone-with-data-2010-2020.js',
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
