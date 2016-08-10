var gulp = require('gulp');

gulp.task('default', ['copy','less'], function() {

});


var less = require('gulp-less');
var path = require('path');

gulp.task('less', function () {
  return gulp.src('./src/*.less')
    .pipe(less())
    .pipe(gulp.dest('./dist/'));
});

gulp.task('copy', function () {
  return gulp.src('./src/*.html')
    .pipe(gulp.dest('./dist/'));
});
