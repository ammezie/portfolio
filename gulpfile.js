var gulp          = require('gulp'),
    sass          = require('gulp-sass'),
    // bourbon       = require('node-bourbon').includePaths,
    neat          = require('node-neat').includePaths;


var paths = {
  cssSource: 'scss/',
  cssDestination: 'css/'
};

gulp.task('sass', function () {
  gulp.src(paths.cssSource + '**/*.scss')
    .pipe(sass({
       includePaths: ['styles'].concat(neat)
    }))
    .pipe(gulp.dest(paths.cssDestination));
});

gulp.watch(paths.cssSource + '**/*.scss', ['sass']);

gulp.task('default', ['sass']);