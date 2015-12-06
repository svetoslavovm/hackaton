/**
  gulp-eslint.js
  ==========
  Make sure code styles are up to par and there are no obvious mistakes


var gulp      = require('gulp'),
    eslint    = require('gulp-eslint'),
    config    = require('../config').eslint,
    reporter  = require('eslint-html-reporter'),
    path      = require('path'),
    fs        = require('fs');

gulp.task('lint', function () {
	return gulp.src(config.src)
		.pipe(eslint())
    .pipe(eslint.format(reporter, function(results) {
      fs.writeFileSync(path.join('test/', 'eslint-results.html'), results);
    }))
		.pipe(eslint.failAfterError());
});
*/
