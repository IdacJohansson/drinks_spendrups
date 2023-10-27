import Model, { attr } from '@ember-data/model';

export default class DrinkpopupModel extends Model {

    @attr('string') name; 
    @attr('string') tagline; 
    @attr('string') description; 
    @attr('string') first_brewed;
    @attr('string') image_url; 
    @attr('object') volume; 
}
