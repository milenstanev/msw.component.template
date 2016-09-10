import DataProvider from './components/DataProvider.js';
import ComponentDataModel from './component.DataModel.js';

/**
 * ComponentSvc
 * @desc ComponentSvc description
 */
class ComponentSvc {
  constructor ($q) {
    this.$q = $q;

    /**
     * @desc viewData have to contain view data
     * @type {DataProvider}
     */
    this.viewData = new DataProvider();

    this.init();
  }

  /**
   * @desc
   *  - Instantiate the service
   *  - Doing new instance of {ComponentDataModel} and put it in {this.viewData}
   */
  init () {
    this.viewData.onPush = (data) => {
      if (!data) {
        this.viewData.removeString();
      }
    };

    /* this.viewData.push(new ComponentDataModel())
    this.viewData.push(new ComponentDataModel())
    this.viewData.push(new ComponentDataModel()) */

    /* this.viewData.push('1')
    this.viewData.push('2')
    this.viewData.push('3') */

    this.viewData.push({asd: 'asd1', qwe: 'qwe'});
    this.viewData.push({asd: 'asd2', qwe: 'qwe'});
    this.viewData.push({asd: 'asd3', qwe: 'qwe'});
  }
}

ComponentSvc.$inject = ['$q'];

export default ComponentSvc;
