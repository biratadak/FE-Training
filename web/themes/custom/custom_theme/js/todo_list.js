(function ($, Drupal, once) {
  Drupal.behaviors.todo_list = {
    // To Set Todo lists.
    attach: function (context, settings) {

      // Define the setting if not initialized.
      if(!settings['demo']) {
        settings["demo"] = "";
      }

      // Unbinding the default behaviors.
      $("#todo-submit").unbind("click");
      $("#todo-submit").click(function (e) {
        e.preventDefault();
        row = "<li>" + $("#todo-text").val() + "</li>";

        // Store setting and add value to the html.
        if ($("#todo-text").val() !== "") {
          settings["demo"] += row;
          $("#todo-list").append(row);
        }
      });
    },
  };
})(jQuery, Drupal, once);
