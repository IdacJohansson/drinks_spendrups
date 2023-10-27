import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class FavoritesComponent extends Component {
  @service router;
  
  get favorites() {
    const id = JSON.parse(localStorage.getItem('drinkId')) || [];
    return id;
  }

  @action
  removeFromFavorites(drinkpopupId){
    try {
  const drinkId = JSON.parse(localStorage.getItem('drinkId')) || [];

  const index = drinkId.indexOf(drinkpopupId);
  if (index !== -1) {
    drinkId.splice(index, 1);

    localStorage.setItem('drinkId', JSON.stringify(drinkId));
    window.location.reload(true);
  }
    
  } catch (error) {
    console.error('Somthing went wrong regarding removeFromFavorites in your Local Storage', error); 
    }
  }
}
  



