module.exports = function (gulp) {
	var jshint = require('gulp-jshint');
	gulp.task(':hint', function() {
  		gulp.src(['./src/**/*.js', '!./src/components/**', '!./src/prod/**'])
    	.pipe(jshint({esnext: true}))
    	.pipe(jshint.reporter('default'))
    	.pipe(jshint.reporter('fail'));
	});
};