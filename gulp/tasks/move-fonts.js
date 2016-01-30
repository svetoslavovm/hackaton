var gulp = require('gulp');
var rename = require('gulp-rename');
var config = require('../config').fonts;

gulp.task('move-fonts', function() {
  gulp.src(config.src)

    //remove dirs, we only want files
    .pipe(rename({ dirname: '' }))
    .pipe(gulp.dest(config.dest));
});
