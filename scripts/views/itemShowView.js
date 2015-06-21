import {Item} from '../models/items';

export default Backbone.View.extend({
  template: JST.itemShow,

  events: {
    'click .item-button-add': 'addToOrder'
  },

  initialize: function(options) {
    this.order = options.order;
    this.render();
  },

  render: function() {
    this.$el.html(this.template(this.model));
  },

  addToOrder: function(event) {
    var clickedItem = this.model;
    console.log(clickedItem);
    var itemToAdd = new Item();
    itemToAdd.set({
      'name': clickedItem.name,
      'number': clickedItem.number,
      'price': clickedItem.price,
      'id': clickedItem.objectId
    });
    console.log(itemToAdd.toJSON(), 'model will be added');
    this.order.add(itemToAdd);
  }
});