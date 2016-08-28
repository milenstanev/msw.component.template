!function(e){function r(e,r,o){return 4===arguments.length?t.apply(this,arguments):void n(e,{declarative:!0,deps:r,declare:o})}function t(e,r,t,o){n(e,{declarative:!1,deps:r,executingRequire:t,execute:o})}function n(e,r){r.name=e,e in v||(v[e]=r),r.normalizedDeps=r.deps}function o(e,r){if(r[e.groupIndex]=r[e.groupIndex]||[],-1==g.call(r[e.groupIndex],e)){r[e.groupIndex].push(e);for(var t=0,n=e.normalizedDeps.length;n>t;t++){var a=e.normalizedDeps[t],u=v[a];if(u&&!u.evaluated){var d=e.groupIndex+(u.declarative!=e.declarative);if(void 0===u.groupIndex||u.groupIndex<d){if(void 0!==u.groupIndex&&(r[u.groupIndex].splice(g.call(r[u.groupIndex],u),1),0==r[u.groupIndex].length))throw new TypeError("Mixed dependency cycle detected");u.groupIndex=d}o(u,r)}}}}function a(e){var r=v[e];r.groupIndex=0;var t=[];o(r,t);for(var n=!!r.declarative==t.length%2,a=t.length-1;a>=0;a--){for(var u=t[a],i=0;i<u.length;i++){var s=u[i];n?d(s):l(s)}n=!n}}function u(e){return y[e]||(y[e]={name:e,dependencies:[],exports:{},importers:[]})}function d(r){if(!r.module){var t=r.module=u(r.name),n=r.module.exports,o=r.declare.call(e,function(e,r){if(t.locked=!0,"object"==typeof e)for(var o in e)n[o]=e[o];else n[e]=r;for(var a=0,u=t.importers.length;u>a;a++){var d=t.importers[a];if(!d.locked)for(var i=0;i<d.dependencies.length;++i)d.dependencies[i]===t&&d.setters[i](n)}return t.locked=!1,r},{id:r.name});t.setters=o.setters,t.execute=o.execute;for(var a=0,i=r.normalizedDeps.length;i>a;a++){var l,s=r.normalizedDeps[a],c=v[s],f=y[s];f?l=f.exports:c&&!c.declarative?l=c.esModule:c?(d(c),f=c.module,l=f.exports):l=p(s),f&&f.importers?(f.importers.push(t),t.dependencies.push(f)):t.dependencies.push(null),t.setters[a]&&t.setters[a](l)}}}function i(e){var r,t=v[e];if(t)t.declarative?f(e,[]):t.evaluated||l(t),r=t.module.exports;else if(r=p(e),!r)throw new Error("Unable to load dependency "+e+".");return(!t||t.declarative)&&r&&r.__useDefault?r["default"]:r}function l(r){if(!r.module){var t={},n=r.module={exports:t,id:r.name};if(!r.executingRequire)for(var o=0,a=r.normalizedDeps.length;a>o;o++){var u=r.normalizedDeps[o],d=v[u];d&&l(d)}r.evaluated=!0;var c=r.execute.call(e,function(e){for(var t=0,n=r.deps.length;n>t;t++)if(r.deps[t]==e)return i(r.normalizedDeps[t]);throw new TypeError("Module "+e+" not declared as a dependency.")},t,n);c&&(n.exports=c),t=n.exports,t&&t.__esModule?r.esModule=t:r.esModule=s(t)}}function s(r){var t={};if(("object"==typeof r||"function"==typeof r)&&r!==e)if(m)for(var n in r)"default"!==n&&c(t,r,n);else{var o=r&&r.hasOwnProperty;for(var n in r)"default"===n||o&&!r.hasOwnProperty(n)||(t[n]=r[n])}return t["default"]=r,x(t,"__useDefault",{value:!0}),t}function c(e,r,t){try{var n;(n=Object.getOwnPropertyDescriptor(r,t))&&x(e,t,n)}catch(o){return e[t]=r[t],!1}}function f(r,t){var n=v[r];if(n&&!n.evaluated&&n.declarative){t.push(r);for(var o=0,a=n.normalizedDeps.length;a>o;o++){var u=n.normalizedDeps[o];-1==g.call(t,u)&&(v[u]?f(u,t):p(u))}n.evaluated||(n.evaluated=!0,n.module.execute.call(e))}}function p(e){if(I[e])return I[e];if("@node/"==e.substr(0,6))return I[e]=s(D(e.substr(6)));var r=v[e];if(!r)throw"Module "+e+" not present.";return a(e),f(e,[]),v[e]=void 0,r.declarative&&x(r.module.exports,"__esModule",{value:!0}),I[e]=r.declarative?r.module.exports:r.esModule}var v={},g=Array.prototype.indexOf||function(e){for(var r=0,t=this.length;t>r;r++)if(this[r]===e)return r;return-1},m=!0;try{Object.getOwnPropertyDescriptor({a:0},"a")}catch(h){m=!1}var x;!function(){try{Object.defineProperty({},"a",{})&&(x=Object.defineProperty)}catch(e){x=function(e,r,t){try{e[r]=t.value||t.get.call(e)}catch(n){}}}}();var y={},D="undefined"!=typeof System&&System._nodeRequire||"undefined"!=typeof require&&require.resolve&&"undefined"!=typeof process&&require,I={"@empty":{}};return function(e,n,o,a){return function(u){u(function(u){for(var d={_nodeRequire:D,register:r,registerDynamic:t,get:p,set:function(e,r){I[e]=r},newModule:function(e){return e}},i=0;i<n.length;i++)(function(e,r){r&&r.__esModule?I[e]=r:I[e]=s(r)})(n[i],arguments[i]);a(d);var l=p(e[0]);if(e.length>1)for(var i=1;i<e.length;i++)p(e[i]);return o?l["default"]:l})}}}("undefined"!=typeof self?self:global)

(["1"], ["11","10"], false, function($__System) {
var require = this.require, exports = this.exports, module = this.module;
!function(e){function r(e,r){for(var n=e.split(".");n.length;)r=r[n.shift()];return r}function n(n){if("string"==typeof n)return r(n,e);if(!(n instanceof Array))throw new Error("Global exports must be a string or array.");for(var t={},o=!0,f=0;f<n.length;f++){var i=r(n[f],e);o&&(t["default"]=i,o=!1),t[n[f].split(".").pop()]=i}return t}function t(r){if(Object.keys)Object.keys(e).forEach(r);else for(var n in e)a.call(e,n)&&r(n)}function o(r){t(function(n){if(-1==l.call(s,n)){try{var t=e[n]}catch(o){s.push(n)}r(n,t)}})}var f,i=$__System,a=Object.prototype.hasOwnProperty,l=Array.prototype.indexOf||function(e){for(var r=0,n=this.length;n>r;r++)if(this[r]===e)return r;return-1},s=["_g","sessionStorage","localStorage","clipboardData","frames","frameElement","external","mozAnimationStartTime","webkitStorageInfo","webkitIndexedDB","mozInnerScreenY","mozInnerScreenX"];i.set("@@global-helpers",i.newModule({prepareGlobal:function(r,t,i){var a=e.define;e.define=void 0;var l;if(i){l={};for(var s in i)l[s]=e[s],e[s]=i[s]}return t||(f={},o(function(e,r){f[e]=r})),function(){var r;if(t)r=n(t);else{r={};var i,s;o(function(e,n){f[e]!==n&&"undefined"!=typeof n&&(r[e]=n,"undefined"!=typeof i?s||i===n||(s=!0):i=n)}),r=s?r:i}if(l)for(var u in l)e[u]=l[u];return e.define=a,r}}}))}("undefined"!=typeof self?self:global);
$__System.register('2', [], function (_export) {
  /**
   * Name space of this component
   * @type {string}
   */
  'use strict';

  var NAMESPACE, COMPONENT_NAME, COMPONENT_NAME_caps;
  return {
    setters: [],
    execute: function () {
      NAMESPACE = 'prefix';

      _export('NAMESPACE', NAMESPACE);

      /**
       * Component name
       * @type {string}
       */
      COMPONENT_NAME = 'component';

      _export('COMPONENT_NAME', COMPONENT_NAME);

      /**
       * Component name initial Caps
       * @type {string}
       */
      COMPONENT_NAME_caps = 'Component';

      _export('COMPONENT_NAME_caps', COMPONENT_NAME_caps);
    }
  };
});

$__System.registerDynamic("3", [], false, function ($__require, $__exports, $__module) {
  var _retrieveGlobal = $__System.get("@@global-helpers").prepareGlobal($__module.id, null, null);

  (function ($__global) {})(this);

  return _retrieveGlobal();
});
$__System.register('4', [], function (_export) {
  'use strict';

  function componentConfig($stateProvider, $urlRouterProvider) {

    //$urlRouterProvider.otherwise("/state1");

    //TODO: try internal routes with different hash prefixes

    /*$stateProvider
      .state('state1', {
        url: "/state1",
        templateUrl: "partials/state1.html"
      })
      .state('state1.list', {
        url: "/list",
        templateUrl: "partials/state1.list.html",
        controller: function($scope) {
          $scope.items = ["A", "List", "Of", "Items"];
        }
      });*/
  }

  return {
    setters: [],
    execute: function () {
      componentConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

      _export('default', componentConfig);
    }
  };
});

$__System.registerDynamic("5", [], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  var $Object = Object;
  module.exports = {
    create: $Object.create,
    getProto: $Object.getPrototypeOf,
    isEnum: {}.propertyIsEnumerable,
    getDesc: $Object.getOwnPropertyDescriptor,
    setDesc: $Object.defineProperty,
    setDescs: $Object.defineProperties,
    getKeys: $Object.keys,
    getNames: $Object.getOwnPropertyNames,
    getSymbols: $Object.getOwnPropertySymbols,
    each: [].forEach
  };
  return module.exports;
});
$__System.registerDynamic('6', ['5'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  var $ = $__require('5');
  module.exports = function defineProperty(it, key, desc) {
    return $.setDesc(it, key, desc);
  };
  return module.exports;
});
$__System.registerDynamic("7", ["6"], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  module.exports = { "default": $__require("6"), __esModule: true };
  return module.exports;
});
$__System.registerDynamic("8", ["7"], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var define,
      global = this || self,
      GLOBAL = global;
  var _Object$defineProperty = $__require("7")["default"];
  exports["default"] = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        _Object$defineProperty(target, descriptor.key, descriptor);
      }
    }
    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();
  exports.__esModule = true;
  return module.exports;
});
$__System.register('9', ['a'], function (_export) {
  var _classCallCheck, ComponentDataModel;

  return {
    setters: [function (_a) {
      _classCallCheck = _a['default'];
    }],
    execute: function () {
      'use strict';

      ComponentDataModel = function ComponentDataModel() {
        _classCallCheck(this, ComponentDataModel);

        this.prop = 'Property';
      };

      _export('default', ComponentDataModel);
    }
  };
});

$__System.register('b', ['8', '9', 'a'], function (_export) {
  var _createClass, ComponentDataModel, _classCallCheck, ComponentSvc;

  return {
    setters: [function (_) {
      _createClass = _['default'];
    }, function (_2) {
      ComponentDataModel = _2['default'];
    }, function (_a) {
      _classCallCheck = _a['default'];
    }],
    execute: function () {
      'use strict';

      ComponentSvc = (function () {
        function ComponentSvc() {
          _classCallCheck(this, ComponentSvc);

          this.dataProvider = [];

          this.init();
        }

        _createClass(ComponentSvc, [{
          key: 'init',
          value: function init() {
            this.dataProvider.push(new ComponentDataModel());
          }
        }]);

        return ComponentSvc;
      })();

      ComponentSvc.$inject = [];

      _export('default', ComponentSvc);
    }
  };
});

$__System.register("c", [], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", "<div>\n  {{ctrl.dataProvider}}\n</div>");
    }
  };
});
$__System.registerDynamic("a", [], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var define,
      global = this || self,
      GLOBAL = global;
  exports["default"] = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  exports.__esModule = true;
  return module.exports;
});
$__System.register('d', ['a'], function (_export) {
  var _classCallCheck, ComponentCtrl;

  return {
    setters: [function (_a) {
      _classCallCheck = _a['default'];
    }],
    execute: function () {
      'use strict';

      ComponentCtrl = function ComponentCtrl(componentSvc) {
        _classCallCheck(this, ComponentCtrl);

        this.dataProvider = componentSvc.dataProvider;
      };

      ComponentCtrl.$inject = ['componentSvc'];

      _export('default', ComponentCtrl);
    }
  };
});

$__System.register('e', ['c', 'd'], function (_export) {
  'use strict';

  var componentHtml, ComponentCtrl;

  function componentDirective() {
    var directive = {
      scope: true,
      controllerAs: 'ctrl',

      template: componentHtml,
      controller: ComponentCtrl
    };

    return directive;
  }

  return {
    setters: [function (_c) {
      componentHtml = _c['default'];
    }, function (_d) {
      ComponentCtrl = _d['default'];
    }],
    execute: function () {
      componentDirective.$inject = [];

      _export('default', componentDirective);
    }
  };
});

$__System.register('f', ['2', '3', '4', '10', '11', 'c', 'b', 'd', 'e'], function (_export) {

  /**
   * Module Desc .etc
   * @type {angular.Module | prefix.component}
   */
  'use strict';

  var config, componentConfig, angular, componentHtml, ComponentSvc, ComponentCtrl, componentDirective, component;
  return {
    setters: [function (_3) {
      config = _3;
    }, function (_4) {}, function (_5) {
      componentConfig = _5['default'];
    }, function (_) {
      angular = _['default'];
    }, function (_2) {}, function (_c) {
      componentHtml = _c['default'];
    }, function (_b) {
      ComponentSvc = _b['default'];
    }, function (_d) {
      ComponentCtrl = _d['default'];
    }, function (_e) {
      componentDirective = _e['default'];
    }],
    execute: function () {
      component = angular.module(config.NAMESPACE + '.' + config.COMPONENT_NAME, ['ui.router']);

      /**
       * Component config
       */
      component.constant(config.COMPONENT_NAME + 'Config', config);

      /**
       * Component run
       */
      component.run(['$templateCache', function ($templateCache) {
        $templateCache.put(config.COMPONENT_NAME + 'Html', componentHtml);
      }]);

      /**
       * routes If it's necessary
       */
      component.config(componentConfig);

      /**
       * Component main ctrl
       */
      component.controller(config.COMPONENT_NAME + 'Ctrl', ComponentCtrl);

      /**
       * Component main service
       */
      component.service(config.COMPONENT_NAME + 'Svc', ComponentSvc);

      /**
       * Component main directive
       */
      component.directive('' + config.NAMESPACE + config.COMPONENT_NAME_caps, componentDirective);

      _export('default', component);
    }
  };
});

$__System.register('1', ['f'], function (_export) {
  'use strict';

  var _default;

  return {
    setters: [function (_f) {
      _default = _f['default'];
    }],
    execute: function () {
      _export('default', _default);
    }
  };
});

(function(c){if (typeof document == 'undefined') return; var d=document,a='appendChild',i='styleSheet',s=d.createElement('style');s.type='text/css';d.getElementsByTagName('head')[0][a](s);s[i]?s[i].cssText=c:s[a](d.createTextNode(c));})
("body{color:#3f3f3f}");
})
(function(factory) {
  define(["angular-ui/ui-router","angular"], factory);
});