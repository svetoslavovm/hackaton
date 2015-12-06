/**
  dafault.js
  ==========
  Contains default gulp tasks.
*/
var gulp = require('gulp');
var runSequence = require('run-sequence').use(gulp);

gulp.task('default', function() {
  runSequence(//'lint', Not adding this into the build yet.
              'gulp-clean',
              [
                'sass',
                'move-html',
              ],
              'server-livereload',
              'watch');
});

gulp.task('clean', ['gulp-clean']);
