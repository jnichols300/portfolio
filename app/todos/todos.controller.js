var app = angular.module("todo");
app.controller("todosController", function(){
  this.todos = [
    "Walk the dog",
    "Buy groceries",
    "Drink coffee",
    "Wake up like this"
  ];
});
