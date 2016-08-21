class ComponentCtrl {
  constructor(componentSvc) {
    this.dataProvider = componentSvc.dataProvider;
  }
}

ComponentCtrl.$inject = ['componentSvc'];

export default ComponentCtrl;