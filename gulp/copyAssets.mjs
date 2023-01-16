import {isDev, dist} from './constants.js';
import gulp from 'gulp';

const SOURCES = ['source/**.html', 'source/{downloads,fonts,video}/**', 'source/img/**/*.{jpg,png,webp}', 'source/img/svg/**/*.svg'];
const IMAGE_SOURCES = ['source/img/**/*.{png,jpg,webp}'];
const PP_SOURCES = 'source/pixelperfect/**/*.{png,jpg,webp}';
if (isDev) {
  SOURCES.push(PP_SOURCES);
  IMAGE_SOURCES.push(PP_SOURCES);
}

const copySvg = () => gulp.src('source/img/**/*.svg', {base: 'source'}).pipe(gulp.dest(dist));

const copyImages = () => gulp.src(IMAGE_SOURCES, {base: 'source'}).pipe(gulp.dest(dist));

const copyFavicons = () => gulp.src('source/favicon/**').pipe(gulp.dest(dist));

const copy = () =>
  gulp
    .src(SOURCES, {
      base: 'source',
    })
    .pipe(gulp.dest(dist));

export {copy, copyFavicons, copyImages, copySvg};
