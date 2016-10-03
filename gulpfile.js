'use strict';

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    concat = require('gulp-concat'),
    cleanCSS = require('gulp-clean-css'),
    replace = require('gulp-replace');


gulp.task('compress', function() {
    return gulp.src('src/stylesheet.sass')
        .pipe(sass({
            includePaths: [
            ]
        }))
        .pipe(cleanCSS())
        .pipe(replace('@charset "UTF-8";', ''))
        .pipe(gulp.dest('./'));
});

//Watch task
gulp.task('watch',function() {
    gulp.watch('src/**/*',['compress']);
});