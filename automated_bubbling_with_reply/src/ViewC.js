/**
 * @class ViewC
 */
var ViewC = BaseView.extend({
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
    this.addChildView(new ViewD(), 'viewD');

  },

  /**
   * @method render
   */
  render: function () {
    this.$el.html('View C');

    this.childViews.viewD.render();

    this.$el.append(this.childViews.viewD.$el);
  }
});
