var gulp = require('gulp');
var sass = require('gulp-sass')(require('node-sass'));
var concat = require('gulp-concat');
// var sassSRC = './src/scss/**/*.scss';
// var sassDIST = './dist/css/';
var sassSRC = './web/themes/custom/custom_theme/scss/**/*.scss';
var sassDIST = './web/themes/custom/custom_theme/css';


gulp.task('sass', function () {
   return gulp.src(sassSRC)
   // .pipe(concat('style.scss'))
   .pipe(sass().on('error', sass.logError))
   .pipe(gulp.dest(sassDIST ));
});

gulp.task('sass:watch', function () {
   gulp.watch(sassSRC, gulp.series('sass'));
});
