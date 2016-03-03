var gulp          = require('gulp'),
    sass          = require('gulp-sass'),
    autoprefixer  = require('gulp-autoprefixer');


var paths = {
  cssSource: 'scss/',
  cssDestination: 'css/'
};

var options = [
  "Android 2.3",
  "Android >= 4",
  "Chrome >= 20",
  "Firefox >= 24",
  "Explorer >= 8",
  "iOS >= 6",
  "Opera >= 12",
  "Safari >= 6"
];

gulp.task('sass', function () {
  gulp.src(paths.cssSource + '**/*.scss')
    .pipe(sass())
    .pipe(autoprefixer({options}))
    .pipe(gulp.dest(paths.cssDestination));
});

gulp.watch(paths.cssSource + '**/*.scss', ['sass']);

gulp.task('default', ['sass']);