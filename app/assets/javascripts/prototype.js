(function (global, $, Backbone, undefined) {
  "use strict";

  ForkIt.Views.PrototypeView = Backbone.View.extend({
    initialize: function () {
      this.ingredient_list = this.el.querySelector(".recipe__ingredients_list");
      this.cooking_steps_list = this.el.querySelector(".recipe__cooking_steps_list");

      return this;
    },

    el: ".recipe",

    events: {
      "click .recipe__add_button": "addItem"
    },

    addItem: function (e) {
      var $trig = $(e.target),
          targ = e.target.getAttribute("data-target"),
          placeholder = targ.match("ingredient") ? "Enter Ingredient" : "Enter Cooking Step";

      e.preventDefault();

      $(targ + "_list").append("<li class=\"recipe__list_item " + targ.replace(".", "") + "\"><input class=\"recipe__input\" type=\"text\" placeholder=\"" + placeholder + "\"><\/li>");

      return this;
    }
  });

  return new ForkIt.Views.PrototypeView();
}(this, jQuery, Backbone));