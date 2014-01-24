/**
 * @class ViewD
 */
var ViewD = Backbone.View.extend({
  /**
   * @property attributes
   */
  attributes: {
    class: 'view-d'
  },

  /**
   * @method initialize
   */
  initialize: function () {

    // Create child view
    this.viewE = new ViewE();

    // Listen for bubbled event
    this.listenTo(this.viewE, 'item-selected', function (eventData) {
      this.trigger('item-selected', eventData);
    });

  },

  /**
   * @method render
   */
  render: function () {
    this.$el.html('View D');

    this.viewE.render();

    this.$el.append(this.viewE.$el);
  }
});
