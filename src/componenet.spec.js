import * as config from './config.js';
import angular from 'angular';
import 'angular-ui/ui-router';
import 'angular-mocks';
import { default as component } from "./component.js";

describe(`${config.COMPONENT_NAME} Controller:`, function () {
  "use strict";
  let ctrl;

  beforeEach(angular.mock.module(component.name));

  beforeEach(angular.mock.inject(function (_$controller_) {
    ctrl = _$controller_(`${config.COMPONENT_NAME}Ctrl`);
  }));

  it(`${config.COMPONENT_NAME}Ctrl`, () => {
    expect(ctrl.dataProvider).toBeDefined();
    expect(typeof ctrl.dataProvider === 'object').toBe(true);
  });

});
