import {isDev, dist} from './constants.js';
import beautify from 'gulp-html-beautify';
import createHtml from 'gulp-twig';
import getData from 'gulp-data';
import gulp from 'gulp';
import processHtml from 'gulp-posthtml';
import useCondition from 'gulp-if';

const lintMode = Boolean(process.env.LINT);

const SOURCES = ['source/layouts/pages/**/*.twig'];
if (!isDev) {
  SOURCES.push('!source/layouts/pages/**/*-dev.twig');
}

const enrichData = async (data, fileName) => {
  try {
    return {
      ...data,
      ...(await import(`../source/data/${fileName}.js${data.version}`)).default(data),
    };
  } catch (error) {
    if (error.code !== 'ERR_MODULE_NOT_FOUND') {
      console.error(error);
    }

    return data;
  }
};

const compileLayouts = () =>
  gulp
    .src(SOURCES)
    .pipe(
      getData(async ({path}) => {
        const page = path.replace(/^.*pages(\\+|\/+)(.*)\.twig$/, '$2').replace(/\\/g, '/');
        const versionId = new Date().getTime();

        let data = {
          isDev,
          page,
          version: isDev ? `?${versionId}` : '',
        };

        data = await enrichData(data, 'global');
        data = await enrichData(data, `pages/${page}`);

        if (data.pageData) {
          data.pageData = JSON.stringify(data.pageData);
        }

        return data;
      })
    )
    .pipe(
      createHtml({
        functions: [
          {
            name: 'contains',
            func(str, [pattern]) {
              return str.includes(pattern);
            },
          },
        ],
      })
    )
    .pipe(processHtml())
    .pipe(useCondition(!lintMode, beautify()))
    .pipe(useCondition(!lintMode, gulp.dest(dist)));

export default compileLayouts;
