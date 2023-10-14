(function ($, Drupal, once) {
  Drupal.behaviors.custom_lib = {
    attach: function (context, settings) {
      once("myCustomBehavior", ".custom-render", context).forEach(function (e) {
        $(e).css("color", e.innerHTML);
      });
    },
  };
})(jQuery, Drupal, once);
