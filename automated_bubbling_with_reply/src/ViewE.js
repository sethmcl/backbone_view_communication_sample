/**
 * @class ViewE
 */
var ViewE = BaseView.extend({
  /**
   * @property attributes
   */
  attributes: {
    class: 'view-e'
  },

  /**
   * @method initialize
   */
  initialize: function () {
    this.$el.delegate('button', 'click', $.proxy(this.onItemClick, this));
  },

  /**
   * @method render
   */
  render: function () {
    var $ul, idx;

    $ul = $('<ul></ul>');

    for (idx = 0; idx < 10; idx++) {
      $ul.append('<li><button data-id="' + idx + '">Item #' + idx + '</button></li>');
    }

    this.$el.html($ul);
  },

  /**
   * @method onItemClick
   */
  onItemClick: function (e) {
    var id = e.target.getAttribute('data-id');

    this.whisper('item-selected', { itemId: id }).then(this.handleReply.bind(this));
  },

  /**
   * @method handleReply
   * @param {string} response
   */
  handleReply: function (response) {
    this.lastReply = response;
    this.$el.find('ul').append('<li>' + response + '</li>');
  }

});
