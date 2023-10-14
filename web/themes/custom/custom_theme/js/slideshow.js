(function ($, Drupal, once) {
  Drupal.behaviors.slideshow = {
    attach: function (context, settings) {
      once("myCustomBehavior", "#block-custom-theme-views-block-slideshow-block-1", context).forEach(function (e) {
        $(e).find("img").removeClass("img-responsive");
        $('.slideshow .view-content').slick();
        // console.log("from slideshow.js",e);
      });

    },
  };
})(jQuery, Drupal, once);
