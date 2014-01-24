/**
 * @class ViewA
 */
var ViewA = Backbone.View.extend({
  /**
   * @property attributes
   */
  attributes: {
    class: 'view-a'
  },

  /**
   * @method initialize
   */
  initialize: function () {

    // Create child views
    this.viewB = new ViewB();
    this.viewC = new ViewC();

    // Listen for event on global event bus
    this.listenTo(eventBus, 'item-selected', this.onItemSelected);
  },

  /**
   * @method render
   */
  render: function () {
    this.$el.html('View A. Event: <span class="event">no events</span>');

    this.viewB.render();
    this.viewC.render();

    this.$el.append(this.viewB.$el);
    this.$el.append(this.viewC.$el);

    $(document.body).append(this.$el);
  },

  /**
   * @method onItemSelected
   */
  onItemSelected: function (e) {
    var message = 'Item <strong>' + e.itemId + '</strong> selected';
    this.$el.find('.event').html(message);
  }
});

