import { module, test } from 'qunit';
import { setupTest } from 'beers/tests/helpers';

module('Unit | Route | drinkpopup', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:drinkpopup');
    assert.ok(route);
  });
});
