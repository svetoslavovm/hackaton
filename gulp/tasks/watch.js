/**
  watch.js
  ==========
  Tracks jade, js, css, and image changes in /static and rebuilds on change
*/

var gulp = require('gulp');
var config = require('../config');

/** !!! Currently does not accommodate for new or deleted files !!! */
gulp.task('watch', function() {
  gulp.watch(config.html.watchPath, ['move-html']);
  gulp.watch(config.sass.watchPath, ['sass']);

});
