const fs = require('fs');
const Builder = require('systemjs-builder');

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
builder
  .buildStatic(
    `${baseUrl}/src/component.js`,
    `${baseUrl}/src.compiled/component.js`,
    { minify: true, sourceMaps: true }
  ).then(function() {
    console.log('Build complete\n');
  })
  .catch(function(err) {
    console.log('Build error\n');
    console.log(err);
  });