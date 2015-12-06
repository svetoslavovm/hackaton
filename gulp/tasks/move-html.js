var gulp = require('gulp');
var config = require('../config').html;

gulp.task('move-html', function() {
  return gulp.src('static/**/*')
        .pipe(gulp.dest('compiled'));
});
