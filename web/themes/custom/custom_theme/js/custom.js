(function ($, Drupal, once) {
  Drupal.behaviors.custom = {
    attach: function (context, settings) {
      count = 0;
      once(
        "myCustomBehavior",
        ".content .field--name-field-image img",
        context
      ).forEach(function (element) {
        // Apply the myCustomBehaviour effect to the elements only once.
        $(".content .field--name-field-image img", context).mouseleave(
          function () {
            count++;
          }
          );
      });

      $(".content .field--name-field-image img").mouseenter(function () {
        // Setting a random color.
        rgbValue =
          "rgb(" +
          100 * Math.random() +
          "," +
          100 * Math.random() +
          "," +
          100 * Math.random() +
          ")";
        $("body").css("background-color", rgbValue);
      });
    },
  };
})(jQuery, Drupal, once);
