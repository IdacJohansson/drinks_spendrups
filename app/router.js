import EmberRouter from '@ember/routing/router';
import config from 'beers/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('drinkpopup', { path: '/drinkpopup/:drinkpopup_id' }); // Id:t används sedan till den dryck som vi ska navigera till);
  this.route('favorites');
});
