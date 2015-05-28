module.exports = function (gulp) {
	var less = require('gulp-less');
	var autoprefixer = require('gulp-autoprefixer');

	gulp.task(':less', [':clean-css'], function () {
  		return gulp.src('./src/styles/main.less')
    		.pipe(less())
    		.pipe(autoprefixer({
        		browsers: ['last 2 versions'],
        		cascade: false
    	}))
    	.pipe(gulp.dest('./src/prod/css'));
	});
};