const fs = require('fs');
const Builder = require('systemjs-builder');

const builder = new Builder('./', './config.js');

builder
  .buildStatic(
    'component/component.js',
    'component/component.compiled.js',
    { minify: true, sourceMaps: true }
  ).then(function() {
    console.log('Build complete');
  })
  .catch(function(err) {
    console.log('Build error');
    console.log(err);
  });