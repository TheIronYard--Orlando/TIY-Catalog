var gulp = require('gulp');
var sass = require('gulp-sass');
 var browserSync = require('browser-sync');


 gulp.task('sass', function () {
     return gulp.src('src/scss/*.scss')
         .pipe(sass())
         .pipe(gulp.dest('src/css'));
});

 gulp.task('watch', function () {
     gulp.watch('scss/*.scss', ['sass']);
 });

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
 });
















//backup code reference below


//var gulp = require('gulp');
//var sass = require('gulp-sass');
//var browserSync = require('browser-sync');
//
//
//gulp.task('sass', function () {
//    return gulp.src('src/scss/*.scss')
//        .pipe(sass({includePaths: ['scss']}))
//        .pipe(gulp.dest('css'));
//});
//
//gulp.task('browser-sync', function () {
//    browserSync.init(["css/products.css", "js/products.js"], {
//        server: {
//            baseDir: "./"
//        }
//    });
//});
//
////
////gulp.task('server', function () {
////    browserSync({
////        server: {
////            baseDir: "./src",
////            index: "products.html",
////            routes: {
////                "/bower_components": "bower_components"
////            }
////        }
////    });
////});
//
//
//gulp.task('default', ['sass', 'browser-sync'], function () {
//    gulp.watch('scss/products.scss', ['sass']);
//});





//var gulp = require('gulp');
//var sass = require('gulp-sass');
//var browser-sync = require('browser-sync');
//
//
//gulp.task('sass', function () {
//    return gulp.src('src/scss/*.scss')
//        .pipe(sass())
//        .pipe(gulp.dest('src/css'));
//});

//gulp.task('watch', function () {
//    gulp.watch('scss/*.scss', ['sass']);
//});
//
//gulp.task('browser-sync', function() {
//    browserSync.init(["css/products.css", "js/products.js"], {
//        server: {
//            baseDir: "./"
//        }
//    });
//});
//
//gulp.task('default', ['sass', 'browser-sync'], function() {
//    gulp.watch('scss/*.scss', ['sass']);
//});
//

//var reload = browsersync.reload;

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