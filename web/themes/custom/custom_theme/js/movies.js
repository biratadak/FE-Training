(function ($, Drupal, once) {
  Drupal.behaviors.movie_grid = {
    attach: function (context, settings) {
      val = 0;
      $moviesGrid = ".movies-grid";
      // Removing img-responsive class to render images according to image-style.
      once("removeBootstrapResponsive", $moviesGrid, context).forEach(
        function (e) {
          $(e).find("img").removeClass("img-responsive");
        }
      );

      // Showing popup on click on movie image.
      $($moviesGrid).unbind("click");
      $($moviesGrid).on(
        "click",
        ".views-field-field-movie-image",
        function () {
          $(this).parent().find(".popup").fadeIn("slow");
        }
        );

      // Hide popup on click on popup area.
      $($moviesGrid).on("click", ".popup", function (e) {
        $(this).fadeOut();
      });
    },
  };
})(jQuery, Drupal, once);
