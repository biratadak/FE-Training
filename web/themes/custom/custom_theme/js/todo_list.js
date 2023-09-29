(function ($, Drupal) {
  Drupal.behaviors.todo_list = {
    // To Set Todo lists.
    attach: function (context, settings) {
      // Define the setting if not initialized.
      once("todoBehaviour", "#todo-list", context).forEach((element) => {
        // Render Todos list if data is avialable.
        if (getLocalStorage() && getLocalStorage().length) {
          renderTodos(getLocalStorage());
        } 
        else {
          $("#todo-list").html("No Todos Available");
        }
      });

      // Initialize messanger object.
      const messenger = new Drupal.Message();

      // Adding todos on click.
      $(".todo-action").unbind("click");
      $(".todo-action").on("click", "#todo-submit", function (e) {
        e.preventDefault();
        inputTodo = $("#todo-text").val();
        if (inputTodo !== "") {
          addTodo(inputTodo);
          renderTodos();
        } 
        else {
          messenger.add("Todos cannot be empty", { type: "warning" });
        }
      });

      // Deleting the todos on click.
      $(".todo-delete").unbind("click");
      $(".todo-list").on("click", ".todo-delete", function () {
        buttonId = $(this).attr("id");
        console.log("todo deleted: " + buttonId);
        deleteTodo(buttonId);
        renderTodos();
      });

      /**
       * Get the todos as array.
       *
       * @returns JSON array of todos.
       */
      function getLocalStorage() {
        return JSON.parse(localStorage.getItem("todos"));
      }

      /**
       * Shows the todo lists.
       */
      function renderTodos() {
        // Setting each elements ID and value as list.
        listArr = getLocalStorage().map(
          (e) =>
            "<li id='" +
            e[0] +
            "' >" +
            e[1] +
            "<button class='todo-delete' id='" +
            e[0] +
            "'>X</button>" +
            "</li>"
        );
        renderElement = listArr.toString().replace(/,/g, "");
        $("#todo-list").html(renderElement);
      }

      /**
       * Add string to the end of todo list.
       *
       * @param string value
       *  stores the string value of todo.
       */
      function addTodo(value) {
        // When local storage has values.
        console.log(getLocalStorage());
        if (getLocalStorage() && getLocalStorage().length) {
          oldTodos = getLocalStorage();
          // Calculate last injected todo id.
          id = getLocalStorage()[getLocalStorage().length - 1][0] + 1;
          console.log("old data:", id);
          oldTodos.push([id, value]);
          localStorage.setItem("todos", JSON.stringify(oldTodos));
        }
        // When local storage is empty.
        else {
          var count = 0;
          localStorage.setItem("todos", JSON.stringify([[count++, value]]));
        }
      }

      /**
       * Delete the todo from the list and HTML.
       *
       * @param int id
       * Stores the id of the todo.
       */
      function deleteTodo(id) {
        // Check if local storage has values.
        if (getLocalStorage()) {
          oldTodos = getLocalStorage();
          newTodos = [];
          oldTodos.forEach((element) => {
            // If the current element is not the clicked element add it to newArray.
            if (element[0] != id) {
              newTodos.push(element);
            }
          });
          localStorage.setItem("todos", JSON.stringify(newTodos));
        }
      }
    },
  };
})(jQuery, Drupal);
