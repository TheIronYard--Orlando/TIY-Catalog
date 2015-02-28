 var gulp = require('gulp');
 var sass = require('gulp-sass');
// var browser - sync = require('browser-sync');

 gulp.task('sass', function () {
     return gulp.src('src/scss/*.scss')
         .pipe(sass())
         .pipe(gulp.dest('src/css'));
 });

 gulp.task('watch', function () {
     gulp.watch('scss/*.scss', ['sass']);
 });

// gulp.task('default', ['sass', 'watch']);




// gulp.task('browser-sync', function () {
//             browser - sync({
//                         server: {
//                             baseDir: "./" /*is this supposed to be like ./css or is the "./" notation the one to use*/
//                         }
//                         gulp.task('browser-sync', function () {
//                             browserSync({
//                                 proxy: "yourlocal.dev"
//                             });
//                         });