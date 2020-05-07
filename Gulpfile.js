

/* 打包启动  */
const gulp = require('gulp');
const watch = require('gulp-watch');
const del = require('del');//清空目录
const browserSync = require('browser-sync');//浏览器热更新

/* 生产环境 */

// 浏览器热更新
gulp.task('online', function () {
    return browserSync.init({
        server: {
            baseDir: './src'
        },
        injectChanges: true,
        port: 3000,
        // 配置自动打开时的web路径
        startPath: "/index.html",
    })
})

/* 生产启动 */
gulp.task('start', gulp.parallel('online', function () {

    console.log(0)
    watch('./src/css/*.css', function () {
        browserSync.reload()
    })
    watch('./src/js/*js', function () {
        browserSync.reload()
    })
    watch('./src/images/*.*', function () {
        browserSync.reload()
    })
    watch('./src/*.html', function () {
        browserSync.reload()
    })
}))

/* 打包启动 */
