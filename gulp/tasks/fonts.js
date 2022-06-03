module.exports = () => 
    $.gulp.task('fonts', () =>
        $.gulp.src($.path.src.fonts)
            .pipe($.gp.ttf2woff())
            .pipe($.gulp.dest($.path.build.fonts))
            .on('end', $.bs.reload)
    )