//var gulp = require('gulp');
////var browser-sync = require('browser-sync');
//var sass = require('gulp-sass');
////var reload = browsersync.reload;
//
//
//gulp.task('serve', ['sass'], function () {
//    browser - sync({
//        server: "./app"
//    });
//
//    gulp.watch('scss/*.scss', ['sass']);
//    gulp.watch('src/products.html').on('change', reload);
//});
//
//gulp.task('sass', function () {
//    return gulp.src('src/scss/*.scss')
//        .pipe(sass())
//        .pipe(gulp.dest('src/css'));
//    .pipe(reload({
//        stream: true
//    }));
//});


// !!The below code works for $ gulp sass!!

var gulp = require('gulp');
var sass = require('gulp-sass');

 gulp.task('sass', function () {
     return gulp.src('src/scss/*.scss')
         .pipe(sass())
         .pipe(gulp.dest('src/css'));
 });

 gulp.task('watch', function () {
     gulp.watch('scss/*.scss', ['sass']);
 });