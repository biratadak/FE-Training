(function ($, Drupal, once) {
  Drupal.behaviors.todo_list = {
    // To Set Todo lists.
    attach: function (context, settings) {
      val = 0;
      // once("myCustomBehavior", ".custom-render", context).forEach(function (e) {
      //   val=0;
      // });
      // $(".views-field-field-movie-image").click(function () {
        //   // console.log("hello"+val++);
        //   // console.log($(this).parent().children(".views-field-field-description"));
        //   $item= $(this);
        //   $item.parent().children(".views-field-field-description").show();
        //   $(this).parent().parent().html($item.innerHTML());
        //   console.log($item.parent());

        //   // $(this).parent("grid-item").child(".views-field-field-description").show();
        // });

      $(".movies-grid").unbind("click");
      $('.movies-grid').on('click', ".views-field-field-movie-image", function () {
        // console.log("hidden");
        $item = $(this);
        // $item.parent().children(".views-field-field-description").show();
        // $(this).parent().parent().html());
        $item.parent().find(".popup").fadeIn("slow");
      });

      // $(".popup").unbind("click");
      $(".movies-grid").on("click",".popup", function (e) {
        // console.log($(this).hide());
        $(this).fadeOut();
      });

    },
  };
})(jQuery, Drupal, once);
