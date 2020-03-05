const gulp = require('gulp')
gulp.task('js',()=>{
  return gulp.src('./src/js/**/*.js').pipe(gulp.dest('./build/js'))
})
gulp.task('default',['js']);
