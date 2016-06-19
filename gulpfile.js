var gulp = require('gulp');
var webpack = require('gulp-webpack');
var webpack_config = require('./webpack.config.js');

gulp.task('webpack', function() {
  gulp.src(['./src/**/*.js', './src/**/*.jsx'])
      .pipe(webpack(webpack_config))
      .pipe(gulp.dest('dist'));
});

gulp.task('copy', function() {
  gulp.src(['./src/views/**/*.html'])
      .pipe(gulp.dest('dist'));
});

gulp.task('watch', function() {
  gulp.watch(['./src/**/*.js', './src/**/*.jsx'], 'webpack');
  gulp.watch(['./src/**/*.html'], 'copy');
});

