import componentHtml from './component.html!text';

import ComponentCtrl from './ComponentCtrl.js';

const component = angular.module('prefix.component', []);

component.run([
  '$templateCache',
  ($templateCache) => {
    $templateCache.put('componentHtml', componentHtml);
  }
]);

component.controller('componentCtrl', ComponentCtrl);

component.directive('componentName', [
  () => {
    let directive = {
      scope: true,
      controllerAs: 'ctrl',

      template: componentHtml,
      controller: 'componentCtrl',
    };

    return directive;
  }
]);

export default component;

