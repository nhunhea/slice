const gulp = require('gulp');
const gulpMinifyCss = require('gulp-minify-css');
const gulpConcat = require('gulp-concat');
const gulpUglify = require('gulp-uglify');
const gulpHtmlmin = require('gulp-htmlmin');
const gulpConnect = require('gulp-connect');
const gulpImagemin = require('gulp-imagemin');
const gulpSequence = require('gulp-sequence');

gulp.task('minify-css', function() {
  gulp.src('./public/assets/css/style.css')
    .pipe(gulpMinifyCss({
      compatibility: 'ie8'
    }))
    .pipe(gulp.dest('build/public/assets/css'))
    .pipe(gulpConnect.reload());
});

gulp.task('minify-js', function() {
  gulp
    .src([
      './public/assets/javascripts/slider.js',
      './public/assets/javascripts/slider2.js',
      './public/assets/javascripts/script.js'
    ])
    .pipe(gulpConcat('slider.js'))
    .pipe(gulpUglify())
    .pipe(gulp.dest('build/public/assets/javascripts'))
    .pipe(gulpConnect.reload());
});

gulp.task('minify-html', function() {
  gulp.src('*.html')
    .pipe(gulpHtmlmin({
      collapseWhitespace: true
    }))
    .pipe(gulp.dest('build/'))
    .pipe(gulpConnect.reload());
});

gulp.task('imagemin', function() {
  gulp
    .src('./public/assets/images/*')
    .pipe(gulpImagemin())
    .pipe(gulp.dest('./build/public/assets/images'))
 });

gulp.task('build', gulpSequence('minify-css', 'minify-js', 'minify-html', 'imagemin'));

gulp.task('server', function() {
  gulpConnect.server({
    root: 'build',
    livereload: true
  });
});

gulp.task('watch', function() {
  gulp.watch('./public/assets/javascript/*.js', ['minify-js']);
  gulp.watch('./public/assets/css/*.css', ['minify-css']);
  gulp.watch('/*.html', ['minify-html']);
});

gulp.task('default', ['watch', 'server']);
