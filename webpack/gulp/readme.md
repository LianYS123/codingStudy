
安装gulp
>npm i -g gulp 启动器
>npm i gulp    核心库
cnpm i gulp-uglify 压缩

在项目根目录下创建一个名为 gulpfile.js 的文件，并在文件中输入以下内容：
```javascript
function defaultTask(cb) {
  // place code for your default task here
  cb();
}
exports.default = defaultTask
```



```javascript
gulp.task('js', () => {
    return gulp.src(['./src/js/*.js'])
    .pipe(uglify())
    .pipe(gulp.dest('./build/js/'))
})
gulp.task('default',['js'])
```
gulp-uglify
gulp-concat
```javascript
gulp.task('js', () => {
  return gulp.src('./src/js/**/*.js')  //** 任意目录个目录，也可以是0个 .../js/1.js,.../js/admin/1.js等都能匹配
  .pipe(concat('bundle.min.js')) //打包到一起，传入文件名
  .pipe(uglify()) //压缩
  .pipe(gulp.dest('./build/js'))//到哪
})
gulp.task('default',['js'])


gulp-rename
.pipe(rename({sufix:'.min'}))


gulp-babel @babel-core @babel-env
.pipe(babel{
  presets: ['@babel/env']
})



sourcemap  恢复源码，方便调试
gulp-sourcemaps

在pipe(babel...)之前加
.pipe(sourcemaps.init())//保存源码
.pipe(babel...)
...压缩
.pipe(sourcemaps.write())//写入文件



gulp-cssmin 压缩css
.pipe(cssmin())

gulp-imagemin 压缩图片
.pipe(imagemin([
  imagemin.gifsicle({
    interlaced: true, //一开始模糊,渐进式加载

  }),
  imagemin.jpegtran({
    propressive:true
  }),
  imagemin.optipng({
    optimizationLevel: 5//压缩级别
  })
]))



gulp.watch([文件列表],[任务列表])
gulp.task('js'...)
gulp.task('watch',()=>{//监视所有js文件，变了自动编译
  gulp.watch('./src/js/**/*.js',['js']);
})
gulp.task('default',['js','watch'])


gulp-livereload:浏览器插件
http-server

.pipe(livereload)

gulp.task('watch',()=>{
  livereload.listen();  
  gulp.watch('js文件',['js'])
  gulp.watch([
    './js...',
    html,
    css,
    ...
  ],file=>{
    livereload.changed(file.path)
  })
})
