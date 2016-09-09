import * as componentConfig from './componentConfig.js'

/**
 * @example Result will be: <prefix-component></prefix-component>
 * @type {string}
 */
const directive = `<${componentConfig.DIRECTIVE_NAME}></${componentConfig.DIRECTIVE_NAME}>`

function componentRoutes ($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: '/home',
      template: directive
    })

  //return $urlRouterProvider.otherwise('/home')
}

componentRoutes.$inject = ['$stateProvider', '$urlRouterProvider']

export default componentRoutes

