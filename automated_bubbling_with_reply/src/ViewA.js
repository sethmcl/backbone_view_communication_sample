/**
 * @class ViewA
 */
var ViewA = BaseView.extend({
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
    this.addChildView(new ViewB(), 'viewB');
    this.addChildView(new ViewC(), 'viewC');

    // Listen for event on global event bus
    this.whisper.on('item-selected', this.onItemSelected, this);
  },

  /**
   * @method render
   */
  render: function () {
    this.$el.html('View A. Event: <span class="event">no events</span>');

    this.childViews.viewB.render();
    this.childViews.viewC.render();

    this.$el.append(this.childViews.viewB.$el);
    this.$el.append(this.childViews.viewC.$el);

    $(document.body).append(this.$el);
  },

  /**
   * @method onItemSelected
   */
  onItemSelected: function (message, e, reply) {
    var message = 'Item <strong>' + e.itemId + '</strong> selected';
    this.$el.find('.event').html(message);
    reply.resolve('View A says, "Hello Item ' + e.itemId + '!"');
  }
});

