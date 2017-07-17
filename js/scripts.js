//business logic
function ToDo(task, due, priority) {
  this.task = task;
  this.due = due;
  this.priority = priority;
}

// ToDo.prototype.everythingList = function() {
//   return this.task + this.due + this.priority;
// }

//UI logic
$(document).ready(function() {
  $("form#new-to-do").submit(function(event) {
    event.preventDefault();

    var inputtedTask = $("input#new-task").val();
    var inputtedDue = $("input#due-date").val();
    var inputtedPriority = $("select#priority").val();

    var newToDo = new ToDo(inputtedTask, inputtedDue, inputtedPriority);

    $("#output ul").append("<li><span class='task'>" + newToDo.task + "</span></li>");
    $("#output ul").append("<li>" + newToDo.due + "</li>");
    $("#output ul").append("<li>" + newToDo.priority + "</li>");
    $("#output p").show();

    $("input#new-task").val("");
    $("input#due-date").val("");
    $("select#priority").val("");



  });
});
