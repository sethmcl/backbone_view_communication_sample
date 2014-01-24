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

    // Listen for bubbled event
    this.listenTo(this.viewD, 'item-selected', function (eventData) {
      this.trigger('item-selected', eventData);
    });

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
