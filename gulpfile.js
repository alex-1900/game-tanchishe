var gulp = require("gulp");
var browserify = require("browserify");
var source = require("vinyl-source-stream");
var tsify = require("tsify");
var uglify = require("gulp-uglify");
var connect = require('gulp-connect');
var sourcemaps = require("gulp-sourcemaps");
var buffer = require("vinyl-buffer");

var paths = {
  pages: ["public/**/*"],
  entries: ["src/index.ts"]
};

gulp.task("static", function () {
    return gulp.src(paths.pages).pipe(gulp.dest("dist"))
        .pipe(connect.reload());
});

gulp.task("bundle", function () {
    return browserify({
        basedir: ".",
        debug: true,
        entries: paths.entries,
        cache: {},
        packageCache: {}
    })
        .plugin(tsify)
        .transform("babelify", {
            presets: ["es2015"],
            extensions: [".ts"],
        })
        .bundle()
        .pipe(source("bundle.js"))
        .pipe(buffer())
        .pipe(sourcemaps.init({ loadMaps: true }))
        .pipe(uglify())
        .pipe(sourcemaps.write("./"))
        .pipe(gulp.dest("dist"));
});

gulp.task('server',function(){
	connect.server({
        livereload: true,
        port: 8080,
		root: './dist'
	})
})

gulp.task('watch', function() {
    gulp.watch('src/**/*', gulp.parallel("bundle"));
    gulp.watch('public/**/*', gulp.parallel("static"));
});

gulp.task('default', gulp.parallel('static', 'bundle', 'watch', 'server'))
