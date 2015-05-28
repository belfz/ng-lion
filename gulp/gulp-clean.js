module.exports = function (gulp) {
	var clean = require('gulp-clean');
	
	gulp.task(':clean-css', function() {
    	gulp.src('./src/prod/css/*')
    	.pipe(clean({force: true}));
	});

	gulp.task(':clean-js', function() {
    	gulp.src('./src/prod/js/*')
    	.pipe(clean({force: true}));
	});	
};