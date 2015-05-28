module.exports = function(config) {
  config.set({
    basePath: './',
    files: [
    	'src/components/angular/angular.js',
    	'src/js/**/*.js'
    ],
    preprocessors: {
    	'src/test/**/*.js': ['browserify']
    },
    frameworks: ['jasmine', 'browserify'],
    browsers: ['Chrome'],
    reporters: ['progress'],
    browserify: {
      debug: true
    }
  });
};