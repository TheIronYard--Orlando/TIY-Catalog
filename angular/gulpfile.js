 var gulp = require('gulp');
 var sass = require('gulp-sass');

 gulp.task('sass', function() {
	gulp.src('src/scss/*.scss')
		.pipe(sass())
		.pipe(gulp.dest('src/css'));
 });

gulp.task('serve', function(){
    // Do stuff in here with Browser Sync...
});
