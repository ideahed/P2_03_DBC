$(document).ready(function() {
  var todoTemplate = $.trim($('#todo_template').html());
  // $('.delete').on('click', function() {
  //     console.log($(this));
  //  });
  function bindEvents() {
  // Bind functions which add, remove, and complete todos to the appropriate
  // elements
  
   $('.toolbox').on('click','button', addTodo);
   
   $(document).on('click','.delete', function(){
      deleteTodo($(this));
    });

   $(document).on('click','.complete', function(){
      completeTodo($(this));
    });
  }
  
  //Create functions to add, remove and complete todos
  function addTodo() {
    var value = $('.todo').val();
    buildTodo(value).appendTo('.todo_list');
  }

   function deleteTodo(arg) {
    arg.parent().parent().parent().remove();
  }

  function completeTodo(node) {
    arg.find("h2").addClass("todo.complete h2");
  }
 

// delete function
   // function deleteTodo() {
   //   console.log($(this))
   //   $(this).remove();
   // }
// // complete function  
//   function completeTodo(arg) {
//     $(this).closest('.h2').addClass("todo.complete");
//   }
// build To Do function - skeleton code 
  function buildTodo(todoName) {
    // Creates an jQueryDOMElement from the todoTemplate.
    var $todo = $(todoTemplate);
    // Modifies it's text to use the passed in todoName.
    $todo.find('h2').text(todoName);
    // Returns the jQueryDOMElement to be used elsewhere.
    return $todo;
  }
  // calls all the listeners
  bindEvents();
});


 
      // $(this).closest('h2').remove()




















































// $(document).ready(function() {
//   var todoTemplate = $.trim($('#todo_template').html());
 
//   function bindEvents() {
//     // Bind functions which add, remove, and complete todos to the appropriate
//     // elements
//     $('.add').on('click', function(){
//       addTodo($('.todo').val());
//     });
 
//     // $(document).on('click','.delete', function(){
//     //   deleteTodo($(this));
//     // });
 
//     // $(document).on('click','.complete', function(){
//     //   completeTodo($(this));
//     // });
//   }
 
//   //Create functions to add, remove and complete todos
//   function addTodo(arg) {
//     buildTodo(arg).appendTo('.todo_list');
//   }
 
//   // function deleteTodo(node) {
//   //   node.parent().parent().parent().remove();
//   // }
 
//   // function completeTodo(node) {
//   //   node.parent().remove();
//   // }
 
//   function buildTodo(todoName) {
//     // Creates an jQueryDOMElement from the todoTemplate.
//     var $todo = $(todoTemplate);
//     // Modifies it's text to use the passed in todoName.
//     $todo.find('h2').text(todoName);
//     // Returns the jQueryDOMElement to be used elsewhere.
//     return $todo;
//   }
 
//   bindEvents();
// });

































