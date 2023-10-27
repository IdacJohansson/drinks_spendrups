import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class DrinkpopupRoute extends Route {
  @service store;

  async model(params) {
    return this.store.findRecord('drinkpopup', params.drinkpopup_id);
  }
}





