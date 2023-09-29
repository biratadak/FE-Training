// localStorage.removeItem('todos');
(function ($, Drupal) {
  Drupal.behaviors.todo_list = {
    // To Set Todo lists.
    attach: function (context, settings) {
      // Define the setting if not initialized.
      once("todoBehaviour", "#todo-list", context).forEach((element) => {
        // Render Todos list.
        if (getLocalStorage()) {
          renderTodos(getLocalStorage());
        } else {
          $("#todo-list").html("No Todos Available");
        }

        //tsting
        // deleteTodo(3);
      });

      // Unbinding the default behaviors.
      $("#todo-submit").unbind("click");
      // Adding todos on click.
      const messenger = new Drupal.Message();
      $("#todo-submit").click(function (e) {
        e.preventDefault();
        inputTodo = $("#todo-text").val();
        if (inputTodo !== "") {
          addTodo(inputTodo);
          renderTodos();
        } else {
          messenger.add("Todos cannot be empty", { type: "warning" });
        }
      });

      $(".todo-delete").unbind("click");
      $(".todo-delete").click(function(){
        buttonId = $(this).attr("id");
        console.log("todo deleted: "+buttonId);
        deleteTodo(buttonId);
        renderTodos();
      });

      function addTodo(value) {
        // When local storage has values.
        console.log(getLocalStorage());
        if (getLocalStorage() && getLocalStorage().length) {
          oldTodos = getLocalStorage();
          // Calculate last injected key
          key= getLocalStorage()[getLocalStorage().length - 1][0] +1;
          console.log("old data:",key);
          oldTodos.push([key,value]);
          localStorage.setItem("todos", JSON.stringify(oldTodos));
        }
        // When local storage is empty.
        else {
          var count = 0;
          localStorage.setItem("todos", JSON.stringify([[count++,value]]));
        }
      }
      
      // Get the todos as array 
      function getLocalStorage() {
        console.log(JSON.parse(localStorage.getItem("todos")));
        return JSON.parse(localStorage.getItem("todos"));
      }

      // Show the todo lists.
      function renderTodos() {
        // Setting each elements ID and value as list.
        listArr = getLocalStorage().map((e) => "<li id='"+e[0]+"' >" + e[1] + "<button class='todo-delete' id='"+e[0]+"'>X</button>"+"</li>");
        renderElement = listArr.toString().replace(/,/g, "");
        $("#todo-list").html(renderElement);
      }

      // Delete the todo from the list and HTML.
      function deleteTodo(id) {
        // Check if local storage has values.
        if (getLocalStorage()) {
          oldTodos = getLocalStorage();
          newTodos =[];
          // Calculate last injected key
          oldTodos.forEach(element => {
            if(element[0]!=id){
              console.log(element[0],element[0]!==id,id);
              newTodos.push(element);
            }
          });
          // console.log("deleteing id: " + id,oldTodos,newTodos);
          localStorage.setItem("todos", JSON.stringify(newTodos));
          $.ajax({
            success:function(){
              // $('.todo-list').html(getLocalStorage());
              renderTodos();
            }
          });
          // window.location.reload();
        }
      }
    },
  };
})(jQuery, Drupal);
