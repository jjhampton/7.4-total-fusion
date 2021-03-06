import AdminOrderView from './adminOrderView';

export default Backbone.View.extend({
  template: JST.admin,
  className: 'admin-container',

  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.html(this.template());
    this.renderChildren();
  },

  renderChildren: function() {
    _.invoke(this.children || [], 'remove');

    this.children = this.collection.map(function(child) {
      var view = new AdminOrderView({
        model: child,
        collection: this.collection
      });
      this.$el.append(view.el);
      return view;
    }.bind(this));

    return this;
  }
});
