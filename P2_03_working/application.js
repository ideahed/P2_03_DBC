$(document).ready(function() {
  var todoTemplate = $.trim($('#todo_template').html());
  

  
  function bindEvents() {
   $('.toolbox').on('click','button', addTodo);
   $(document).on('click', '.delete', deleteTodo);
   $(document).on('click', '.complete', completeTodo);
  }
  
  function addTodo() {
    var value = $('.todo').val();
    buildTodo(value).appendTo('.todo_list');
  }

  function buildTodo(todoName) {
    var $todo = $(todoTemplate);
    $todo.find('h2').text(todoName);
    return $todo;
  }
  
  // $(document).on('click', '.delete', function() {
  //      // console.log( 'the delete link was clicked');
  function deleteTodo() {
       $(this).closest(".todo").remove();
     }

  // $(document).on('click', '.complete', function() {
     // console.log( 'the complete link was clicked');
  function completeTodo() {   
     $(this).closest(".todo").addClass('complete');
   }

  // function deleteTodo() {
    
  // }

  bindEvents();

});






















































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

































