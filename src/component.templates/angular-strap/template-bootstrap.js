import angular from 'angular';
import 'mgcrea/angular-strap';
import 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css!';
import * as componentConfig from '../../componentConfig.js';

import componentHtml from './template-name-bootstrap.html!text';
import componentCss from './template-name-bootstrap.css!';

const componentTemplate = angular.module(`${componentConfig.COMPONENT_TEMPLATE_COMPONENT}`, [
  'ngAnimate',
  'mgcrea.ngStrap'
]);

//TODO: some kind of expected view data model

componentTemplate.run([
  '$templateCache',
  ($templateCache) => {
    $templateCache.put(componentConfig.COMPONENT_TEMPLATE_NAME, componentHtml);
  }
]);

export default componentTemplate;

