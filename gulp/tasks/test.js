/**
  test.js
  ==========
  Contains test gulp tasks.

var gulp = require('gulp');
var runSequence = require('run-sequence').use(gulp);

gulp.task('test', function() {
  runSequence(
    [
      'lint',
      'karma'
    ]
  );
});
*/
