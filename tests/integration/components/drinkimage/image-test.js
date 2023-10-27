import { module, test } from 'qunit';
import { setupRenderingTest } from 'beers/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | drinkimage/image', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<Drinkimage::Image />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <Drinkimage::Image>
        template block text
      </Drinkimage::Image>
    `);

    assert.dom().hasText('template block text');
  });
});
