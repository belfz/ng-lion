module.exports = function (gulp) {
  require('./gulp-browserify')(gulp);
  var karma = require('gulp-karma');

  var testFiles = [
      './src/test/**/*.js'
  ];
 
  gulp.task('test', [':browserify'], function() {
      return gulp.src(testFiles)
      .pipe(karma({
          configFile: 'karma.conf.js',
          action: 'run'
      }))
      .on('error', function(err) {
          throw err;
      });
  });
};