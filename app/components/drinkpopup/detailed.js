import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class DetailedComponent extends Component {
  @service router;

  @action
  addToFavorites(drinkpopupId) {
  try {
    let drinkId = JSON.parse(localStorage.getItem('drinkId')) || [];
    drinkId.push(drinkpopupId);
    localStorage.setItem('drinkId', JSON.stringify(drinkId));
    
    this.router.transitionTo('favorites');

    for (let i = 0; i < localStorage.length; i++) {
      console.log('Key: ' + localStorage.key(i));
      console.log('Value: ' + localStorage.getItem(localStorage.key(i)));
    }
    
  } catch (error) {
    console.log('Someting went wrong in your Local Storage', error)
   }
  }
}
