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
