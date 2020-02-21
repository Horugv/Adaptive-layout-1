'use strict'

module.exports = function(){
    $.gulp.task('csso', function () {
        return $.gulp.src('./build/assets/css/**/*.css')
            .pipe($.gp.csso({
                restructure: false,
                sourceMap: true,
                debug: true
            }))
            .pipe($.gp.rename('./main.min.css'))
            .pipe($.gulp.dest('./build/assets/css'));
    });
}

