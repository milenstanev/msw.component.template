import angular from 'angular';
import 'angular-ui/ui-router';

//dev
//import src from '../src/src.js';

//prod
import component from '../src.compiled/component.js';

export default angular.module('examlpe.core', [
  'ui.router',
  component.name
]);