module.exports = function (gulp) {
	require('./gulp-hint')(gulp);
	var browserify = require('browserify');
	var source = require('vinyl-source-stream');
	var buffer = require('vinyl-buffer');
	var uglify = require('gulp-uglify');
	var sourcemaps = require('gulp-sourcemaps');
	var gutil = require('gulp-util');
	var ngAnnotate = require('gulp-ng-annotate');

	gulp.task(':browserify', [':clean-js', ':hint'], function() {
		var b = browserify({
		    entries: 'src/js/main.js',
		    debug: true
  		});

    	return b.bundle()
		    .pipe(source('bundled.js'))
		    .pipe(ngAnnotate())
		    .pipe(buffer())
		    .pipe(sourcemaps.init({loadMaps: true}))
		        // Add transformation tasks to the pipeline here.
		        .pipe(uglify())
		        .on('error', gutil.log)
		    .pipe(sourcemaps.write('./'))
		    .pipe(gulp.dest('./src/prod/js/'));
		});
};