var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

gulp.task('serve', ['sass'], function () {
  browserSync.init({
    server: "./"
  });

  gulp.watch("./src/scss/*.scss", ['sass']);
  gulp.watch("./*.html").on('change', browserSync.reload);
});

gulp.task('sass', function () {
  return gulp.src("./src/scss/*.scss")
    .pipe(sass())
    .pipe(gulp.dest("./src/css"))
    .pipe(browserSync.stream());
});