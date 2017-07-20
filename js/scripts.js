//business logic
function ToDo(task, due, priority) {
  this.task = task;
  this.due = due;
  this.priority = priority;
  this.completed  = false;
}

ToDo.prototype.done = function() {
  if (this.completed === false) {
    this.completed = true
  } else {
    this.completed = false
  }
}

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
    $(".comp").append("Click to mark as completed");

    $("#output p").show();

    $("input#new-task").val("");
    $("input#due-date").val("");
    $("select#priority").val("");

    $(".comp").click(function(){
        newToDo.done();
        if ( newToDo.completed === true) {
        $(this).text("COMPLETED");
      }

      if (newToDo.completed === false) {
        $(this).text("Click to mark as completed");
      }

      // if (this.completed === true)

  });
  });
});
