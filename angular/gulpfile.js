var gulp = require('gulp');
var sass = require('gulp-sass');

var browserSync = require('browser-sync');


gulp.task('sass', function () {
    return gulp.src('src/scss/*.scss')
        .pipe(sass({
          includePaths: [
            'bower_components/bootstrap-sass/assets/stylesheets/'
          ],
          onError: console.error.bind(console, 'Sass error:')
        }))
        .pipe(gulp.dest('src/css'));
});

gulp.task('watch', function () {
    gulp.watch('scss/*.scss', ['sass']);
});

gulp.task('serve', function () {
    browserSync({
        server: {
            baseDir: "./src",
            directory: true,
            routes: {
                "/bower_components": "bower_components"
            }
        }
    });
});
