// Requirements
var gulp = require('gulp');
var concat = require('gulp-concat');
var cleanCSS = require('gulp-clean-css');
var less = require('gulp-less');
var sourcemaps = require('gulp-sourcemaps');
var del = require('del');

// Less Task
gulp.task('less', function() {
    return gulp.src('app/less/*.less')
        .pipe(sourcemaps.init())
        .pipe(less())
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(concat('styles.css'))
        .pipe(sourcemaps.write('maps'))
        .pipe(gulp.dest('dist'));
});

// Clean Task
gulp.task('clean', function(cb) {
	return del(['dist/*'], cb);
});

// Watch Task
gulp.task('watch', function() {
    gulp.watch('app/less/*.less', gulp.series('less'));
});

// Default Task with LESS styles
gulp.task('default', gulp.parallel('clean', 'less', 'watch'));