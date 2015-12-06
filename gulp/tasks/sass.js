/**
  sass-combine-minify.js
  ======================
  Combines separate .scss files into on .css file.  Creates a monified copy of that file.
*/

var gulp = require('gulp');
var config = require('../config').sass;
var sass = require('gulp-sass');
var minify = require('gulp-minify-css');
var rename = require('gulp-rename');
var plumber = require('gulp-plumber');

gulp.task('sass', function() {
  gulp.src(config.src)
    .pipe(plumber({
      errorHandler: function(err) {
        console.log(err);
      },
    }))
    .pipe(sass({
      errLogToConsole: false,
      onError: function(err) {
        console.log('[gulp-sass] ' + err.message + ' on line ' + err.line + ' in ' + err.file);
      },
    }))

    .pipe(gulp.dest(config.dest))
    .pipe(minify())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest(config.dest));
});
