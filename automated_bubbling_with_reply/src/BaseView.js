/**
 * @class BaseView
 */
var BaseView = Backbone.View.extend({
  /**
   * @method constructor
   */
  constructor: function () {
    this.childViews = {};
    Backbone.Whisper.call(this);
    Backbone.View.prototype.constructor.apply(this, arguments);
  },

  /**
   * @method addChildView
   */
  addChildView: function (view, name) {
    view.parentView = this;
    this.childViews[name] = view;
  }
});
