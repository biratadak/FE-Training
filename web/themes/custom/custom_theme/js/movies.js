(function ($, Drupal, once) {
  Drupal.behaviors.movie_grid = {
    attach: function (context, settings) {
      val = 0;
      // Removing img-responsive class to render images according to image-style.
      once("removeBootstrapResponsive", ".movies-grid", context).forEach(
        function (e) {
          $(e).find("img").removeClass("img-responsive");
        }
      );

      // Showing popup on click on movie image.
      $(".movies-grid").unbind("click");
      $(".movies-grid").on(
        "click",
        ".views-field-field-movie-image",
        function () {
          $(this).parent().find(".popup").fadeIn("slow");
        }
        );
        
      // Hide popup on click on popup area.
      $(".movies-grid").on("click", ".popup", function (e) {
        $(this).fadeOut();
      });
    },
  };
})(jQuery, Drupal, once);
