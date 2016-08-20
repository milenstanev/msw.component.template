import angular from 'angular';
import 'angular-ui/ui-router';

//dev
import component from '../component/component.js';

//prod
//import component from '../component.dist/component.js';

export default angular.module('examlpe.core', [
  'ui.router',
  component.name
]);