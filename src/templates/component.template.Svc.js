import * as componentConfig from '../componentConfig.js'

function _loadTemplates ($q, $window, $ocLazyLoad) {
  let htmlUrl = ''
  let cssUrl = ''

  switch (componentConfig.uiFramework) {
    case 'angular/material':
      htmlUrl = 'matirial-html!text'
      cssUrl = 'matirial-html!text'
      break
    default:
      htmlUrl = 'src/templates/angular-strap/template-name-bootstrap.html!text'
      cssUrl = 'src/templates/angular-strap/template-name-bootstrap.css!text'
  }

  return $q.all([
    _loadHtml().then(_success, _error),
    _loadCss().then(_success, _error)
  ])

  function _loadHtml () {
    let deferred = $q.defer()

    $window.System.import(htmlUrl).then(
      (data) => {
        deferred.resolve(data)
      },
      (error) => {
        deferred.reject(error)
      }
    )
    return deferred.promise
  }

  function _loadCss () {
    let deferred = $q.defer()

    $window.System.import(cssUrl).then(
      (data) => {
        deferred.resolve(data)
      },
      (error) => {
        deferred.reject(error)
      }
    )
    return deferred.promise
  }

  function _success (res) {
    return res
  }

  function _error (error) {
    return error
  }
}

class ComponentTemplateSvc {
  constructor ($q, $window, $ocLazyLoad) {
    this.$q = $q
    this.$window = $window
    this.$ocLazyLoad = $ocLazyLoad
    this.isReady = false
  }
  loadTemplate () {
    let differed = this.$q.defer()

    _loadTemplates(this.$q, this.$window, this.$ocLazyLoad).then(
      (data) => {
        differed.resolve({
          html: data[0],
          css: data[1]
        })

        this.isReady = true
      },
      (error) => console.warn(error)
    )

    return differed.promise
  }
}
ComponentTemplateSvc.$inject = ['$q', '$window', '$ocLazyLoad']

export { ComponentTemplateSvc }
