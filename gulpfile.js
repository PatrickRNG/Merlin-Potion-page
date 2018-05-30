const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
const useref = require('gulp-useref');
const uglify = require('gulp-uglify-es').default;
const gulpIf = require('gulp-if');
const cssnano = require('gulp-cssnano');
const runSequence = require('run-sequence');
const del = require('del');
const imagemin = require('gulp-imagemin');
const cache = require('gulp-cache');

const sassSrc = './src/scss/**/*.scss';
const sassDest = './src/css';

const htmlSrc = './src/*.html';

const imageSrc = 'src/assets/**/*.+(png|jpg|gif|svg)';
const imageDest = 'dist/assets';

var prodDest = 'dist';

const sassDev = {
  outputStyle: 'expanded'
};

// Comple sass to css and run brower sync
gulp.task('sass', function () {
  return gulp.src(sassSrc)
    .pipe(sass(sassDev).on('error', sass.logError))
    .pipe(gulp.dest(sassDest))
    .pipe(browserSync.stream({match: '**/*.css'}));
});

// Watch the sass files
gulp.task('watch', function () {
  return gulp.watch(sassSrc, ['sass']);
});

// Move the json files to dist
gulp.task('misc', function () {
	return gulp.src('./src/*.json')
		.pipe(gulp.dest('dist/'))
});

// Move and minify images to dist
gulp.task('images', function () {
	return gulp.src(imageSrc)
		.pipe(cache(imagemin([
			imagemin.optipng({optimizationLevel: 5})
		])))
		.pipe(gulp.dest(imageDest));
});

// Concatenate all js and css files to one
gulp.task('useref', function () {
	gulp.src(htmlSrc)
		.pipe(useref({searchPath:['./src', '']}))
		.pipe(gulpIf('*.js', uglify().on('error', function(e){
			console.log(e);
		 })))
		.pipe(gulpIf('*.css', cssnano()))
		.pipe(gulp.dest('dist/'));
});

// Browser Sync options and init
gulp.task('browserSync', () => {
	browserSync.init({
		injectChanges: true,
		server: {
			baseDir: './src'
		}
	});
});

// Delete dist folder when ran
gulp.task('clean:dist', function () {
	return del.sync(prodDest);
});

gulp.task('default', function (callback) {
	runSequence(['sass', 'browserSync', 'watch'], callback)
});

gulp.task('build', function (callback) {
	runSequence('clean:dist', ['misc', 'useref', 'images'], callback)
});