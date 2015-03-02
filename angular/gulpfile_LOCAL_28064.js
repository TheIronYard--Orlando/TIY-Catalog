 var gulp = require('gulp');
 var sass = require('gulp-sass');
 var browserSync = require('browser-sync');


 gulp.task('sass', function () {
     gulp.src('src/scss/*.scss')
         .pipe(sass())
         .pipe(gulp.dest('src/css'));
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