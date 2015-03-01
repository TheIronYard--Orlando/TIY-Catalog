<<<<<<< HEAD
 var gulp = require('gulp');
 var sass = require('gulp-sass');
 var browserSync = require('browser-sync');


 gulp.task('sass', function () {
     gulp.src('src/scss/*.scss')
=======
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
//
//gulp.task('default', ['serve']);


// !!The below code works for $ gulp sass!!

var gulp = require('gulp');
var sass = require('gulp-sass');

 gulp.task('sass', function () {
     return gulp.src('src/scss/*.scss')
>>>>>>> 01bae05a7b3111034cdb2d4d475fdf9de809153e
         .pipe(sass())
         .pipe(gulp.dest('src/css'));
 });

<<<<<<< HEAD
 gulp.task('server', function () {
     browserSync({
         server: {
             baseDir: "./src",
             index: "products.html",
             routes: {
                 "/bower_components": "bower_components"
             }
         }
     });
=======
 gulp.task('watch', function () {
     gulp.watch('scss/*.scss', ['sass']);
>>>>>>> 01bae05a7b3111034cdb2d4d475fdf9de809153e
 });