import componentHtml from './component.html!text';
import ComponentCtrl from './component.Ctrl.js';

function componentDirective() {
  let directive = {
    scope: true,
    controllerAs: 'ctrl',

    template: componentHtml,
    controller: ComponentCtrl,
  };

  return directive;
}

componentDirective.$inject = [];

export default componentDirective;