/**
  gulp-clean.js
  ==========
  Removes all files in 'dest' (/bcg-dot-com/bcg-dot-com/static) folder
*/

var gulp = require('gulp');
var del = require('del');
var config = require('../config');

//if the callback parameter is missing gulp-clean runs async, we don't want that
gulp.task('gulp-clean', function ( callback ) {
  return del( [config.dest + '/**'], callback );
});
