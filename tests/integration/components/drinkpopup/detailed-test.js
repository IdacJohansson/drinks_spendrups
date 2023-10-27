import { module, test } from 'qunit';
import { setupRenderingTest } from 'beers/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | drinkpopup/detailed', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<Drinkpopup::Detailed />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <Drinkpopup::Detailed>
        template block text
      </Drinkpopup::Detailed>
    `);

    assert.dom().hasText('template block text');
  });
});
