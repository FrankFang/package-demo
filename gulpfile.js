var gulp = require('gulp');

gulp.task('default', function() {

});


var less = require('gulp-less');
var path = require('path');

gulp.task('less', function () {
  return gulp.src('./src/*.less')
    .pipe(less())
    .pipe(gulp.dest('./dist/'));
});
