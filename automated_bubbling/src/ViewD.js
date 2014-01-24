/**
 * @class ViewD
 */
var ViewD = BaseView.extend({
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
    this.addChildView(new ViewE(), 'viewE');

  },

  /**
   * @method render
   */
  render: function () {
    this.$el.html('View D');

    this.childViews.viewE.render();

    this.$el.append(this.childViews.viewE.$el);
  }
});
