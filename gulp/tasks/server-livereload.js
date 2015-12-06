/**
  gulp-server-livereload.js
  ==========
*/

var gulp = require('gulp');
var config = require('../config').server;
var serverlivereload = require('gulp-server-livereload');

gulp.task('server-livereload', function() {
  gulp.src(config.src)
    .pipe(serverlivereload({
      //livereload: true,
      defaultFile: '/index.html',
      open: true,
      port: 8080,
    }));
});
