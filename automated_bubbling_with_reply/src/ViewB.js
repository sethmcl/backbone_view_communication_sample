/**
 * @class ViewB
 */
var ViewB = BaseView.extend({
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
    this.addChildView(new ViewF(), 'viewF');

  },

  /**
   * @method render
   */
  render: function () {
    this.$el.html('View B');

    this.childViews.viewF.render();

    this.$el.append(this.childViews.viewF.$el);
  }
});
