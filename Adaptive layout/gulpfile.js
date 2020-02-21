'use strict';

global.$ = {
    path: {
        task: require('./gulp/paths/task.js')
    },
    gulp: require('gulp'),
    del: require('del'),
    gp: require('gulp-load-plugins')(),
    cssunit: require('gulp-css-unit'),
    browserSync: require('browser-sync').create()
    
};


$.path.task.forEach(function(taskPath){
    require(taskPath)();
});

$.gulp.task('default', $.gulp.series(
        'clean',
        'sass',

    
        'csso'
    ,
    $.gulp.parallel(
        'watch',
        'serve',
    )
));