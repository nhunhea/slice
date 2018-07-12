const gulp = require('gulp');
var gulpMinifyCss = require('gulp-minify-css');
var gulpConcat = require('gulp-concat');
var gulpUglify = require('gulp-uglify');
var gulpHtmlmin = require('gulp-htmlmin');
var gulpConnect = require('gulp-connect');

gulp.task('minify-css', function() {
  gulp.src('./src/css/style.css')
    .pipe(gulpMinifyCss({
      compatibility: 'ie8'
    }))
    .pipe(gulp.dest('./build/'))
    .pipe(gulpConnect.reload());
});

gulp.task('minify-js', function() {
  gulp
    .src([
      './src/javascript/slider.js',
      './src/javascript/slider2.js',
    ])
    .pipe(gulpConcat('bundle.js'))
    .pipe(gulpUglify())
    .pipe(gulp.dest('build'))
    .pipe(gulpConnect.reload());
});

gulp.task('minify-html', function() {
  gulp.src('*.html')
    .pipe(gulpHtmlmin({
      collapseWhitespace: true
    }))
    .pipe(gulp.dest('build'))
    .pipe(gulpConnect.reload());
});

gulp.task('server', function() {
  gulpConnect.server({
    root: 'build',
    livereload: true
  });
});

gulp.task('watch', function() {
  gulp.watch('./src/javascript/*.js', ['minify-js']);
  gulp.watch('./src/css/*.css', ['minify-css']);
  gulp.watch('/*.html', ['minify-html']);
});

gulp.task('default', ['watch', 'server']);