(function ($, Drupal, once) {
  Drupal.behaviors.todo_list = {
    // To Set Todo lists.
    attach: function (context, settings) {
      once("myCustomBehavior", ".custom-render", context).forEach(function (e) {
        $(e).css("color", e.innerHTML);
      });
    },
  };
})(jQuery, Drupal, once);
