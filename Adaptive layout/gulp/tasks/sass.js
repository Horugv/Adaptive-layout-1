'use strict';
 
module.exports = function(){
    $.gulp.task('sass', function(){
        return $.gulp.src('./source/style/main.scss')
            .pipe($.gp.sourcemaps.init())
            .pipe($.gp.sassGlob())
            .pipe($.gp.sass())
            .on('error', $.gp.notify.onError({
                title: 'style'
            }))

            .pipe($.gp.sourcemaps.write())
            .pipe($.gulp.dest('./build/assets/css'));
    });  
}

