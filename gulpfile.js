var gulp = require('gulp');
var browserify = require('gulp-browserify');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var react = require('gulp-react');
var rename = require('gulp-rename');
var template = require('gulp-template');
var fs = require('fs');
var debug = require('gulp-debug');
var gutil = require('gulp-util');
var plumber = require('gulp-plumber');
var reactify = require('gulp-reactify');
var reactTools = require('react-tools');

gulp.task('scripts', function() {
    gulp.src('./src/app.js', {
        read: false
    })
        .pipe(plumber())
        .pipe(browserify())
        .pipe(rename('main.js'))
        .pipe(gulp.dest('./build')).on('error', gutil.log)
});

gulp.task('styles', function() {
    gulp.src('./styles/*.scss')
        .pipe(sass({
            errLogToConsole: true
        }))
        .pipe(rename('main.css'))
        .pipe(gulp.dest('./build'));
});

gulp.task('watch', function() {
    gulp.watch(['./src/**/*.js'], ['scripts']);
    gulp.watch(['./styles/**/*.scss'], ['styles']);
});

gulp.task('default', ['scripts', 'styles', 'watch']);
