/**
 * @class ViewB
 */
var ViewB = Backbone.View.extend({
  /**
   * @property attributes
   */
  attributes: {
    class: 'view-b'
  },

  /**
   * @method initialize
   */
  initialize: function () {

    // Create child view
    this.viewF = new ViewF();

  },

  /**
   * @method render
   */
  render: function () {
    this.$el.html('View B');

    this.viewF.render();

    this.$el.append(this.viewF.$el);
  }
});
