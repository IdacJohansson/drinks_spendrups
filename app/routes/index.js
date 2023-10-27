import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class IndexRoute extends Route {
  @service store;

async model() {
  const allDrinks = await this.store.findAll('drinkpopup');
  const randomDrinks = this.getRandomDrinks(allDrinks, 10);
  return randomDrinks;
}

getRandomDrinks(allDrinks, count) {
  try{
  if (count >= allDrinks.length) {
    return allDrinks;
  }

  const randomDrinks = [];
  const usedIndexes = new Set();

  while (randomDrinks.length < count) {
    const randomIndex = Math.floor(Math.random() * allDrinks.length);

    if (!usedIndexes.has(randomIndex)) {
      randomDrinks.push(allDrinks[randomIndex]);
      usedIndexes.add(randomIndex);
    }
  }
  return randomDrinks;

} catch (error) {
  console.log('Error in while trying to collect random drinks', error);
  throw new error('could not retrieve drinks, please try again in a while');
    }
  }
}
