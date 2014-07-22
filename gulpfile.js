var gulp = require('gulp');
var connect = require('gulp-connect');
var stylus = require('gulp-stylus');
var rename = require('gulp-rename');
var nib = require('nib');

gulp.task('connect', function() {
  connect.server({
    livereload: true
  });
});

gulp.task('html', function () {
  gulp.src('*.html')
  .pipe(connect.reload());
});

gulp.task('stylus', function() {  
  gulp.src('assets/stylus/*.styl')
  .pipe(stylus({use: [nib()], compress: true}))
  .pipe(rename({ extname: '.min.css' }))
  .pipe(gulp.dest('www/css'))
  .pipe(connect.reload());
});

gulp.task('watch', function () {
  gulp.watch(['*.html'], ['html']);
  gulp.watch(['assets/stylus/*.styl'], ['stylus']);
});

gulp.task('default', ['connect', 'stylus', 'watch']);
