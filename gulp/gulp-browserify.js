module.exports = function (gulp) {
	var browserify = require('browserify');
	var source = require('vinyl-source-stream');
	var buffer = require('vinyl-buffer');
	var uglify = require('gulp-uglify');
	var sourcemaps = require('gulp-sourcemaps');
	var gutil = require('gulp-util');

	gulp.task(':browserify', [':clean-js'], function() {
		var b = browserify({
		    entries: 'src/js/main.js',
		    debug: true
  		});

    	return b.bundle()
		    .pipe(source('bundled.js'))
		    .pipe(buffer())
		    .pipe(sourcemaps.init({loadMaps: true}))
		        // Add transformation tasks to the pipeline here.
		        .pipe(uglify())
		        .on('error', gutil.log)
		    .pipe(sourcemaps.write('./'))
		    .pipe(gulp.dest('./src/prod/js/'));
		});
};