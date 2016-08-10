var gulp = require('gulp');
var livereload = require('gulp-livereload');
var uglify = require('gulp-uglify')
var jshint = require('gulp-jshint')

gulp.task('default', ['copy','less', 'js'], function() {

});


var less = require('gulp-less');
var path = require('path');

gulp.task('less', function () {
  return gulp.src('./src/*.less')
    .pipe(less())
    .pipe(gulp.dest('./dist/'))
    .pipe(livereload())
});

gulp.task('copy', function () {
  return gulp.src('./src/*.html')
    .pipe(gulp.dest('./dist/'));
});

gulp.task('watch', function(){
  livereload.listen()
  gulp.watch('./src/*.less', ['less'] ,function(event) {
    console.log('less');
  });
  gulp.watch('./src/*.html', ['copy'] ,function(event) {
    console.log('html');
  });
})


gulp.task('js', function(argument) {
  return gulp.src('src/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(uglify())
    .pipe(gulp.dest('dist/'));
});
