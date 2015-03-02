var gulp = require('gulp');
var sass = require('gulp-sass');

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
             index: "products.html",
             routes: {
                 "/bower_components": "bower_components"
             }
         }
     });
});