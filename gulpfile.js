// Generated on 2015-12-02 using generator-jhipster 2.24.0
/* jshint camelcase: false */
'use strict';

var gulp = require('gulp'),
    series = require('stream-series'),
    gutil = require('gulp-util'),
    prefix = require('gulp-autoprefixer'),
    minifyCss = require('gulp-minify-css'),
    usemin = require('gulp-usemin'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-sass'),
    htmlmin = require('gulp-htmlmin'),
    imagemin = require('gulp-imagemin'),
    ngAnnotate = require('gulp-ng-annotate'),
    ngConstant = require('gulp-ng-constant-fork'),
    jshint = require('gulp-jshint'),
    rev = require('gulp-rev'),
    path = require('path'),
    protractor = require("gulp-protractor").protractor,
    proxy = require('proxy-middleware'),
    es = require('event-stream'),
    flatten = require('gulp-flatten'),
    del = require('del'),
    url = require('url'),
    wiredep = require('wiredep').stream,
    fs = require('fs'),
    tsd = require('tsd'),
    runSequence = require('run-sequence'),
    browserSync = require('browser-sync');

var karmaServer = require('karma').Server;

var yeoman = {
    app: 'src/main/webapp/',
    dist: 'src/main/webapp/dist/',
    test: 'src/test/javascript/spec/',
    tmp: '.tmp/',
    importPath: 'src/main/webapp/bower_components',
    scss: 'src/main/scss/',
    port: 9000,
    apiPort: 8080,
    liveReloadPort: 35729
};

var _errorHandler = function (title) {
    'use strict';

    return function (err) {
        gutil.log(gutil.colors.red('[' + title + ']'), err.toString());
        this.emit('end');
    };
};

var endsWith = function (str, suffix) {
    return str.indexOf('/', str.length - suffix.length) !== -1;
};

var parseString = require('xml2js').parseString;
var parseVersionFromPomXml = function () {
    var version;
    var pomXml = fs.readFileSync('pom.xml', 'utf8');
    parseString(pomXml, function (err, result) {
        version = result.project.version[0];
    });
    return version;
};

gulp.task('clean', function (cb) {
    del([yeoman.dist], cb);
});

gulp.task('clean:tmp', function (cb) {
    del([yeoman.tmp], cb);
});

gulp.task('test', ['wiredep:test', 'ngconstant:dev'], function (done) {
    new karmaServer({
        configFile: __dirname + '/src/test/javascript/karma.conf.js',
        singleRun: true
    }, done).start();
});

gulp.task('protractor', function () {
    return gulp.src(["./src/main/test/javascript/e2e/*.js"])
        .pipe(protractor({
            configFile: "src/test/javascript/protractor.conf.js"
        }));
});

gulp.task('copy', function () {
    return es.merge(  // copy i18n folders only if translation is enabled
        gulp.src(yeoman.app + 'i18n/**').
            pipe(gulp.dest(yeoman.dist + 'i18n/')),
        gulp.src(yeoman.app + 'assets/**/*.{woff,svg,ttf,eot}').
            pipe(flatten()).
            pipe(gulp.dest(yeoman.dist + 'assets/fonts/')));
});

gulp.task('images', function () {
    return gulp.src(yeoman.app + 'assets/images/**').
        pipe(imagemin({ optimizationLevel: 5 })).
        pipe(gulp.dest(yeoman.dist + 'assets/images')).
        pipe(browserSync.reload({ stream: true }));
});

gulp.task('sass', function () {
    return gulp.src(yeoman.scss + '**/*.scss')
        .pipe(sass({ includePaths: yeoman.importPath }).on('error', sass.logError))
        .pipe(gulp.dest(yeoman.app + 'assets/styles'));
});

gulp.task('styles', ['sass'], function () {
    return gulp.src(yeoman.app + 'assets/styles/**/*.css').
        pipe(gulp.dest(yeoman.tmp)).
        pipe(browserSync.reload({ stream: true }));
});

var $ = require('gulp-load-plugins')();
var tsProject = $.typescript.createProject({
    target: 'es5',
    sortOutput: true
});
  
//TYPESCRIPT AND SCRIPTS
  
var tsd = require('tsd');

var tsdJson = 'tsd.json';
var tsdApi = new tsd.getAPI(tsdJson);

gulp.task('tsd:install', function () {
    var bower = require(path.join(process.cwd(), 'bower.json'));

    var dependencies = [].concat(
        Object.keys(bower.dependencies),
        Object.keys(bower.devDependencies)
        );

    var query = new tsd.Query();
    dependencies.forEach(function (dependency) {
        query.addNamePattern(dependency);
    });

    var options = new tsd.Options();
    options.resolveDependencies = true;
    options.overwriteFiles = true;
    options.saveBundle = true;

    return tsdApi.readConfig()
        .then(function () {
            return tsdApi.select(query, options);
        })
        .then(function (selection) {
            return tsdApi.install(selection, options);
        })
        .then(function (installResult) {
            var written = Object.keys(installResult.written.dict);
            var removed = Object.keys(installResult.removed.dict);
            var skipped = Object.keys(installResult.skipped.dict);

            written.forEach(function (dts) {
                gutil.log('Definition file written: ' + dts);
            });

            removed.forEach(function (dts) {
                gutil.log('Definition file removed: ' + dts);
            });

            skipped.forEach(function (dts) {
                gutil.log('Definition file skipped: ' + dts);
            });
        });
});

gulp.task('tsd:purge', function () {
    return tsdApi.purge(true, true);
});

gulp.task('tsd', ['tsd:install']);

gulp.task('scripts:app', ['scripts:components'], function () {
    return gulp.src(path.join(yeoman.app, '/ts-app/app/**/*.ts'))
        .pipe($.sourcemaps.init())
        .pipe($.tslint())
        .pipe($.tslint.report('prose', { emitError: false }))
        .pipe($.typescript(tsProject)).on('error', _errorHandler('TypeScript'))
    //.pipe($.concat('index.module.js'))
        .pipe($.sourcemaps.write())
        .pipe(gulp.dest(path.join(yeoman.app, 'scripts/app')))
        .pipe(browserSync.reload({ stream: true }))
        .pipe($.size())
})

gulp.task('scripts:components', function () {
    return gulp.src(path.join(yeoman.app, '/ts-app/components/**/*.ts'))
        .pipe($.sourcemaps.init())
        .pipe($.tslint())
        .pipe($.tslint.report('prose', { emitError: false }))
        .pipe($.typescript(tsProject)).on('error', _errorHandler('TypeScript'))
    //.pipe($.concat('index.module.js'))
        .pipe($.sourcemaps.write())
        .pipe(gulp.dest(path.join(yeoman.app, 'scripts/components')))
        .pipe(browserSync.reload({ stream: true }))
        .pipe($.size())
})


gulp.task('scripts', ['tsd:install', 'scripts:app']);

// END TYPESCRIPT

/// Start inject section 
gulp.task('inject', ['wiredep', 'inject:app']);

gulp.task('inject:app', function () {

    var injectScripts = gulp.src([
        path.join(yeoman.app, 'scripts/app/**/*.module.js'),
        path.join(yeoman.app, 'scripts/app/**/*.js'),
        path.join('!' + yeoman.app, 'scripts/app/**/*.spec.js'),
        path.join('!' + yeoman.app, 'scripts/app/**/*.mock.js')
    ], { read: false });


    var injectComponents = gulp.src([
        path.join(yeoman.app, 'scripts/components/**/*.js'),
        path.join('!' + yeoman.app, 'scripts/components/**/*.spec.js'),
        path.join('!' + yeoman.app, 'scripts/components/**/*.mock.js')
    ], { read: false });

    var injectOptions = {
        ignorePath: [yeoman.app],
        addRootSlash: false
    };

    return gulp.src(path.join(yeoman.app, '/*.html'))
        .pipe($.inject(series(injectScripts, injectComponents), injectOptions))
        .pipe(gulp.dest(yeoman.app));
});

//// END INJECTION


gulp.task('serve', ['scripts'], function () {
    runSequence('wiredep:test', 'wiredep:app', 'ngconstant:dev', 'sass', function () {
        var baseUri = 'http://localhost:' + yeoman.apiPort;
        // Routes to proxy to the backend. Routes ending with a / will setup
        // a redirect so that if accessed without a trailing slash, will
        // redirect. This is required for some endpoints for proxy-middleware
        // to correctly handle them.
        var proxyRoutes = [
            '/api',
            '/health',
            '/configprops',
            '/v2/api-docs',
            '/swagger-ui',
            '/configuration/security',
            '/configuration/ui',
            '/swagger-resources',
            '/metrics',
            '/websocket/tracker',
            '/dump',
            '/oauth/token',
            '/console/'
        ];

        var requireTrailingSlash = proxyRoutes.filter(function (r) {
            return endsWith(r, '/');
        }).map(function (r) {
            // Strip trailing slash so we can use the route to match requests
            // with non trailing slash
            return r.substr(0, r.length - 1);
        });

        var proxies = [
            // Ensure trailing slash in routes that require it
            function (req, res, next) {
                requireTrailingSlash.forEach(function (route) {
                    if (url.parse(req.url).path === route) {
                        res.statusCode = 301;
                        res.setHeader('Location', route + '/');
                        res.end();
                    }
                });

                next();
            }
        ].concat(
            // Build a list of proxies for routes: [route1_proxy, route2_proxy, ...]
            proxyRoutes.map(function (r) {
                var options = url.parse(baseUri + r);
                options.route = r;
                return proxy(options);
            }));

        browserSync({
            open: false,
            port: yeoman.port,
            server: {
                baseDir: yeoman.app,
                middleware: proxies
            }
        });

        gulp.run('watch');
    });
});

gulp.task('watch', function () {
    gulp.watch('bower.json', ['wiredep:test', 'wiredep:app']);
    gulp.watch(['gulpfile.js', 'pom.xml'], ['ngconstant:dev']);
    gulp.watch(yeoman.scss + '**/*.scss', ['styles']);
    gulp.watch(yeoman.app + 'assets/images/**', ['images']);
    gulp.watch([yeoman.app + '*.html', yeoman.app + 'scripts/**', yeoman.app + 'i18n/**']).on('change', browserSync.reload);
});

gulp.task('wiredep', ['wiredep:test', 'wiredep:app']);

gulp.task('wiredep:app', function () {
    var s = gulp.src('src/main/webapp/index.html')
        .pipe(wiredep({
            exclude: [/angular-i18n/]
        }))
        .pipe(gulp.dest('src/main/webapp'));

    return es.merge(s, gulp.src('src/main/scss/main.scss')
        .pipe(wiredep({
            exclude: [
                /angular-i18n/,  // localizations are loaded dynamically
                'bower_components/bootstrap/' // Exclude Bootstrap LESS as we use bootstrap-sass
            ],
            ignorePath: /\.\.\/webapp\/bower_components\// // remove ../webapp/bower_components/ from paths of injected sass files
        }))
        .pipe(gulp.dest('src/main/scss')));
});

gulp.task('wiredep:test', function () {
    return gulp.src('src/test/javascript/karma.conf.js')
        .pipe(wiredep({
            exclude: [/angular-i18n/, /angular-scenario/],
            ignorePath: /\.\.\/\.\.\//, // remove ../../ from paths of injected javascripts
            devDependencies: true,
            fileTypes: {
                js: {
                    block: /(([\s\t]*)\/\/\s*bower:*(\S*))(\n|\r|.)*?(\/\/\s*endbower)/gi,
                    detect: {
                        js: /'(.*\.js)'/gi
                    },
                    replace: {
                        js: '\'{{filePath}}\','
                    }
                }
            }
        }))
        .pipe(gulp.dest('src/test/javascript'));
});

gulp.task('build', function () {
    runSequence('clean', 'copy', 'wiredep:app', 'ngconstant:prod', 'usemin');
});

gulp.task('usemin', function () {
    runSequence('images', 'styles', function () {
        return gulp.src([yeoman.app + '**/*.html', '!' + yeoman.app + 'bower_components/**/*.html']).
            pipe(usemin({
                css: [
                    prefix.apply(),
                    minifyCss({ root: 'src/main/webapp' }),  // Replace relative paths for static resources with absolute path with root
                    'concat', // Needs to be present for minifyCss root option to work
                    rev()
                ],
                html: [
                    htmlmin({ collapseWhitespace: true })
                ],
                js: [
                    ngAnnotate(),
                    uglify(),
                    'concat',
                    rev()
                ]
            })).
            pipe(gulp.dest(yeoman.dist));
    });
});

gulp.task('ngconstant:dev', function () {
    return ngConstant({
        dest: 'app.constants.js',
        name: 'springTestApp',
        deps: false,
        noFile: true,
        interpolate: /\{%=(.+?)%\}/g,
        wrap: '/* jshint quotmark: false */\n"use strict";\n// DO NOT EDIT THIS FILE, EDIT THE GULP TASK NGCONSTANT SETTINGS INSTEAD WHICH GENERATES THIS FILE\n{%= __ngModule %}',
        constants: {
            ENV: 'dev',
            VERSION: parseVersionFromPomXml()
        }
    })
        .pipe(gulp.dest(yeoman.app + 'scripts/app/'));
});

gulp.task('ngconstant:prod', function () {
    return ngConstant({
        dest: 'app.constants.js',
        name: 'springTestApp',
        deps: false,
        noFile: true,
        interpolate: /\{%=(.+?)%\}/g,
        wrap: '/* jshint quotmark: false */\n"use strict";\n// DO NOT EDIT THIS FILE, EDIT THE GULP TASK NGCONSTANT SETTINGS INSTEAD WHICH GENERATES THIS FILE\n{%= __ngModule %}',
        constants: {
            ENV: 'prod',
            VERSION: parseVersionFromPomXml()
        }
    })
        .pipe(gulp.dest(yeoman.tmp + 'scripts/app/'));
});

gulp.task('jshint', function () {
    return gulp.src(['gulpfile.js', yeoman.app + 'scripts/**/*.js'])
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('server', ['serve'], function () {
    gutil.log('The `server` task has been deprecated. Use `gulp serve` to start a server');
});

gulp.task('itest', ['protractor']);

gulp.task('default', function () {
    runSequence('serve');
});
