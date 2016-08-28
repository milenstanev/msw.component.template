import angular from 'angular';
import 'angular-ui/ui-router';

//dev baseURL: "/",
//import component from '../src/component.js';
//prod
import component from '../src.compiled/component.js';


/*System.import('../src.compiled/component.js').then(
  () => {
    debugger
  },
  () => {
    debugger
  }
);*/


export default angular.module('examlpe.core', [
  'ui.router',
  component.name
]);