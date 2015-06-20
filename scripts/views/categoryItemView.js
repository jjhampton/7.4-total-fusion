import {Item} from '../models/items';


export default Backbone.View.extend({
  template: JST.categoryItem,
  className: 'category-item',

  events: {
    'click .category-item-button-price': 'addToOrder'
  },

  initialize: function(options) {
    this.order = options.order;
    this.render();
    this.listenTo(this.order, 'update', this.render);
  },

  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
  },

  addToOrder: function(event) {

    console.log('clicked item with price of ' + this.model.toJSON().price + ' in category item view');

    this.order.add(this.model.toJSON());
  }
});

Handlebars.registerHelper('priceFixed', function(price) {
  return price.toFixed(2);
});
