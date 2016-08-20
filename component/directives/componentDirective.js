import componentHtml from '../views/component.html!text';
import ComponentCtrl from '../controllers/ComponentCtrl.js';

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