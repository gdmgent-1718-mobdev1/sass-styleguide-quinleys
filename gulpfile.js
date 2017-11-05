'use strict';

const gulp = require('gulp');
const gulp_sass = require('gulp-sass');

gulp.task('sass', function() {
    console.log('TASK: transpile sass to css...');
    return gulp.src('./sass/**/*.scss')
        .pipe(gulp_sass().on('error', gulp_sass.logError))
        .pipe(gulp.dest('./css'));
});


gulp.task('sass-watch', () => {
    return gulp.watch('./sass/**/*.scss',['sass']);
})