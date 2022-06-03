global.$ = {
    gulp: require('gulp'),
    gp: require('gulp-load-plugins')(),
    bs: require('browser-sync').create(),
    path: {
        serverDir: './app/build',
        tasks: require('./gulp/config/index.js'),
        src: {
            html: './app/src/*.{html,pug}',
            style: './app/src/styles/*.*',
            js: './app/src/script/*.js',
            img: './app/src/images/*.{jpg,jpeg,png,svg}',
            fonts: './app/src/fonts/**/**/*.*'
        },
        build: {
            html: './app/build',
            style: './app/build/styles/',
            js: './app/build/js/',
            img: './app/build/images/',
            fonts: './app/build/fonts/'
        },
        watch: {
            html:['./app/src/*.{html,pug}', './app/src/view/**/*.{html,pug}'],
            style: './app/src/styles/**/**/*.*',
            js: './app/src/script/**/*.js',
            img: './app/src/images/*.{jpg,jpeg,png,svg}',
            fonts: './app/src/fonts/**/**/*.*'
        }
    },
    tasks: {
        default:['html','style','js','img','fonts','watch','serve'],
        build:['html','style','js','img','fonts']
    }

}

$.path.tasks.forEach(taskPath=> require(taskPath)())

for (const val in $.tasks) {
   $.gulp.task(val, $.gulp.series($.gulp.parallel(...$.tasks[val])))
   
}