var gulp        = require('gulp');
var browserSync = require('browser-sync');
var reload      = browserSync.reload;
var livereload  = require('gulp-livereload');
var config      = require('../config').server
var poster      = require('../utils/poster')


gulp.task('browser-sync', function() {
  browserSync(config.development);
});

gulp.task('default', ['browser-sync'], function () {
  poster.sayWhat('Starting server...');
  livereload.listen(config.livereload);
  gulp.watch( "../dev/jade/**/*.jade", ['jade']);
  gulp.watch( "../dev/sass/*.scss", ['scss']);
});
