var gulp = require('gulp');
var connect = require('gulp-connect');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');

gulp.task('connect', function () {
    connect.server({
        livereload: true
    });
});

gulp.task('html', function () {
    gulp.src('*.html')
        .pipe(connect.reload());
});

gulp.task('sass', function () {
    gulp.src('sass/**')
        .pipe(sass())
        .pipe(gulp.dest('css'))
        .pipe(minifyCss({
            keepSpecialComments: 0
        }))
        .pipe(rename({ extname: '.min.css' }))
        .pipe(gulp.dest('css'))
        .pipe(connect.reload());
});

gulp.task('watch', function () {
    gulp.watch(['*.html'], ['html']);
    gulp.watch(['sass/**'], ['sass']);
});

gulp.task('default', ['connect', 'sass', 'watch']);
