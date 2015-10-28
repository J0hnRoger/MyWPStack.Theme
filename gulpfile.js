var gulp = require('gulp');
var inject = require('gulp-inject');
var mainBowerFiles = require('gulp-main-bower-files');

//Inject bower libs in assets folder
gulp.task('main-bower-files', function() {
    return gulp.src('./bower.json')
        .pipe(mainBowerFiles())
        .pipe(gulp.dest('./app/assets'));
});

gulp.task('inject', function () {
  var target = gulp.src('./app/views/material-welcome.scout.php');
  var sources = gulp.src(['./app/assets/**/*.js', './app/assets/**/*.css'], {read: false});
 
  return target.pipe(inject(sources, {addPrefix : '/content/themes/SLHB/'}))
    .pipe(gulp.dest('./app/views/'));
});

gulp.task('default', ['main-bower-files', 'inject'], function(){
	// define tasks here	
});