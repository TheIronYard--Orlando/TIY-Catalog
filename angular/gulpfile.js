var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
var reload = browserSync.reload;


gulp.task('sass', function () {
    return gulp.src('src/scss/*.scss')
        .pipe(sass({
          includePaths: [
            'bower_components/bootstrap-sass/assets/stylesheets/'
          ],
          onError: console.error.bind(console, 'Sass error:')
        }))
        .pipe(gulp.dest('src/css'))
        .pipe(reload({
            stream: true
        }));
});


gulp.task('serve', ['sass'], function () {
    browserSync({
        server: {
            baseDir: "./src",
            directory: true,
            routes: {
                "/bower_components": "bower_components"
            }
        }
    });

    gulp.watch('src/scss/*.scss', ['sass']);
    gulp.watch("src/*.html").on('change', reload);

});

<<<<<<< HEAD
gulp.task('default', ['serve']);
=======
gulp.task('default', ['serve']);
>>>>>>> upstream/master
