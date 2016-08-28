const fs = require('fs');
const Builder = require('systemjs-builder');
const gulp = require('gulp');
const exec = require('gulp-exec');

/**
 * Define baseUrl
 * . -> build, run as npm script file
 * .. -> debug, run as node file
 * @type {string}
 */
const baseUrl = '.';
/**
 * Configure builder paths
 */
const builder = new Builder(`${baseUrl}/`, `${baseUrl}/config.js`);
/**
 * Executing the build
 */

builder.config({
  meta: {
    'angular': {
      build: false
    },
    'angular-ui/ui-router': {
      build: false
    }
  }
});


builder
  .buildStatic(
    `${baseUrl}/index.js`,
    `${baseUrl}/index.dist.js`,
    {
      minify: false,
      sourceMaps: false,
      format: 'amd', //cjs
      runtime: false
    }
  ).then(function() {
    console.log('Build complete\n');
  })
  .catch(function(err) {
    console.log('Build error\n');
    console.log(err);
  });
