 var gulp = require('gulp');
 var sass = require('gulp-sass');

 gulp.task('sass', function() {
	gulp.src('src/scss/*.scss')
		.pipe(sass({
          includePaths: [
             'bower_components/'
          ]
        }))
		.pipe(gulp.dest('src/css'));
 });

 gulp.task('sass:watch', function(){
   gulp.watch('src/scss/*.scss', [ 'sass' ]);
 })
