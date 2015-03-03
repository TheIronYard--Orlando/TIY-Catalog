var gulp = require('gulp');
var sass = require('gulp-sass');
<<<<<<< HEAD

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
    gulp.watch('src/scss/*.scss', ['sass']);
});

gulp.task('serve', function () {
=======
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
>>>>>>> carolinapowers-feature/angular/yak-shaving
    browserSync({
        server: {
            baseDir: "./src",
            directory: true,
            routes: {
                "/bower_components": "bower_components"
            }
        }
    });
<<<<<<< HEAD
});
=======

    gulp.watch('src/scss/*.scss', ['sass']);
    gulp.watch("src/*.html").on('change', reload);

});

gulp.task('default', ['serve']);
>>>>>>> carolinapowers-feature/angular/yak-shaving
