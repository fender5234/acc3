import {isDev, dist} from './constants.js';
import aliasify from '../source/js/utils/aliasify.js';
import gulp from 'gulp';
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import postcss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';
import csso from 'gulp-csso';
import gcmq from 'gulp-group-css-media-queries';
import rename from 'gulp-rename';

const sass = gulpSass(dartSass);

const compileStyles = () =>
  gulp
    .src('source/sass/style.scss', {sourcemaps: isDev})
    .pipe(
      sass({
        functions: {
          'aliasify($str)'(str) {
            return new dartSass.SassString(aliasify(str.getValue()));
          },
          'isDev()'() {
            return dartSass.types.Boolean[isDev ? 'TRUE' : 'FALSE'];
          }
        },
      }).on('error', sass.logError)
    )
    .pipe(
      postcss([
        autoprefixer({
          grid: true,
        }),
      ])
    )
    .pipe(gcmq())
    .pipe(gulp.dest(`${dist}/css`))
    .pipe(csso())
    .pipe(rename('style.min.css'))
    .pipe(gulp.dest(`${dist}/css`, {sourcemaps: '.'}));

export default compileStyles;
