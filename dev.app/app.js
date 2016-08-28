//dev baseURL: "/",
import component from '../src/component.js';
//prod
//import component from '../src/component.dist.js';

export default angular.module('examlpe.core', [
  'ui.router'
  , component.name
]);