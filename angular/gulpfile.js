var gulp = require('gulp');
var sass = require('gulp-sass');

var browserSync = require('browser-sync');

gulp.task('sass', function(){
     gulp.src('src/scss/*.scss')
         .pipe(sass())
         .pipe(gulp.dest('src/css'));
});

gulp.task('watch', function(){
     gulp.watch('scss/*.scss', ['sass']);
});

gulp.task('serve', function(){
     browserSync({
         server: {
             baseDir: "./src",
             directory: true,
             routes: {
                 "/bower_components": "./bower_components"
             }
         }
     });
});
