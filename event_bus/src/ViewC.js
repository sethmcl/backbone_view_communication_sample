/**
 * @class ViewC
 */
var ViewC = Backbone.View.extend({
  /**
   * @property attributes
   */
  attributes: {
    class: 'view-c'
  },

  /**
   * @method initialize
   */
  initialize: function () {

    // Create child view
    this.viewD = new ViewD();

  },

  /**
   * @method render
   */
  render: function () {
    this.$el.html('View C');

    this.viewD.render();

    this.$el.append(this.viewD.$el);
  }
});
