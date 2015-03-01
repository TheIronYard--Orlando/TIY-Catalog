 var gulp = require('gulp');
 var sass = require('gulp-sass');
 var notify = require('gulp-notify');
 var bower = require('gulp-bower');
 var config = {
 	sassPath: './src/scss',
 	bowerDir: './bower_components'
 };
 gulp.task('bower', function(){
 	return bower()
 	.pipe(gulp.dest(config.bowerDir));
 });


 gulp.task('sass', function() {
	gulp.src('src/scss/*.scss')	 
		.pipe(sass({
			style: 'compressed',
			loadPath: [
			'./src/scss',
			config.bowerDir + '/bootstrap'
			]
		})
			 .on('error', notify.onError(function (error){
			 	return 'Error: ' + error.message;
			 })))
		.pipe(gulp.dest('./src/css'));
 });
