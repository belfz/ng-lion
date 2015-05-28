var gulp = require('gulp');

require('./gulp/gulp-test')(gulp);
require('./gulp/gulp-clean')(gulp);
require('./gulp/gulp-styles')(gulp);
require('./gulp/gulp-browserify')(gulp);
require('./gulp/gulp-hint')(gulp);

gulp.task('build', [':lint', ':browserify', ':less']);

//TODO: minify css