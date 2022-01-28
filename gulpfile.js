var gulp         = require('gulp');
var concat       = require('gulp-concat');
var clean        = require('gulp-rimraf');
var less         = require('gulp-less');
var minifyCss    = require('gulp-minify-css');
var autoprefixer = require('gulp-autoprefixer');
var notify       = require('gulp-notify');
var browserSync  = require('browser-sync');
var reload       = browserSync.reload;
var merge        = require('merge-stream');

//Directorios
var assetsDirectory  = 'assets/';
var lessDirectory    = assetsDirectory + 'less/';
var jsDirectory      = assetsDirectory + 'js/';

var targetCss  = 'css';
var targetJs   = 'js';

var scripts = [
	'lib/jquery-2.1.3.min.js',
	'lib/owl.carousel.min.js',
	'lib/jquery.validate.min.js',
	'lib/select2.min.js',
	'assets/js/custom.js'
];

var styles = [
   	'lib/animate.css',
    'lib/select2.min.css',
   	'lib/owl.carousel.min.css'
];

//limpiar carpetas
gulp.task('clean', function() {
	gulp.src([targetCss + '/*.css', targetJs + '/*.js'], {read:false})
	.pipe(clean());
});

//scripts
gulp.task('mergeScripts', function() {
	return gulp.src(scripts)
	.pipe(concat('scripts.js'))
	//.pipe(uglify())
	.pipe(gulp.dest(targetJs));
});
//scripts

gulp.task('css', function(){
	var lessStream = gulp.src(lessDirectory + '/styles.less')
		.pipe(less())
		//.pipe(minifyCss())
		.pipe(concat('less-files.less'));

	var cssStream = gulp.src(styles)
		//.pipe(minifyCss())
		.pipe(concat('css-files.css'));

	var mergedStream = merge(lessStream, cssStream)
		.pipe(concat('styles.css'))
		//.pipe(minifyCss())
		.pipe(notify('css compile'))
		.pipe(gulp.dest(targetCss))
		.pipe(reload({stream:true}));

	return mergedStream;
});

gulp.task('watch', ['connect'], function() {
	gulp.watch(lessDirectory + '/**/*.less', ['css']);
	gulp.watch(lessDirectory + '/**/**/*.less', ['css']);

	gulp.watch(jsDirectory + '/*.js', ['mergeScripts']);
});

gulp.task('connect', function() {
	browserSync.init({
		server: {
		baseDir: "./"
		}
	});
});

gulp.task('default', ['clean'], function(){
	gulp.start(['css', 'mergeScripts' ,'watch']);
});