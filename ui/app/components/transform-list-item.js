/**
 * @module TransformListItem
 * TransformListItem components are used for the list items for the Transform Secret Engines for all but Transformations.
 * This component automatically handles read-only list items if capabilities are not granted or the item is internal only.
 *
 * @example
 * ```js
 * <TransformListItem @item={item} @itemPath="role/my-item" @itemType="role" />
 * ```
 * @param {object} item - item refers to the model item used on the list item partial
 * @param {string} itemPath - usually the id of the item, but can be prefixed with the model type (see transform/role)
 * @param {string} [itemType] - itemType is used to calculate whether an item is readable or
 */

import { computed } from '@ember/object';
import Component from '@ember/component';

export default Component.extend({
  item: null,
  itemPath: '',
  itemType: '',

  itemViewable: computed('item', 'itemType', function() {
    const item = this.get('item');
    if (this.itemType === 'alphabet' || this.itemType === 'template') {
      return !item.get('id').startsWith('builtin/');
    }
    return true;
  }),

  backendType: 'transform',
});
