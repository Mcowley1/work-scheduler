// Current Date Moment.js
var timeDisplay = $("#currentDay");
var theDay = moment();
// Moment Object with current time
  timeDisplay.text(theDay.format("dddd MMMM Do YYYY, h:mm:ss a"));

$("textarea").blur()

var taskNotification = function() {
  var currentTime = moment().format("H")

  $("textarea").each(function() {
      var hour = parseInt($(this).attr('data-hour'))
      console.log(hour)
      if (hour == currentTime) {
          $(this).addClass("present")
      } else if (hour > currentTime) {
          $(this).addClass("future")
      } else {
          $(this).addClass("past")
      }
  })

}
taskNotification();

setInterval(taskNotification,36000 * 100);

// Save Function
$(document).ready(function() {
  $(".saveBtn").on('click', function() {
      var taskToDo = $(this).siblings(".description").val();
      var hourSave = $(this).parent().attr("id");

      localStorage.setItem(hourSave, taskToDo);
  })

  $("#h9 .description").val(localStorage.getItem("hour9"));
  $("#h10 .description").val(localStorage.getItem("hour10"));
  $("#h11 .description").val(localStorage.getItem("hour11"));
  $("#h12 .description").val(localStorage.getItem("hour12"));
  $("#h13 .description").val(localStorage.getItem("hour13"));
  $("#h14 .description").val(localStorage.getItem("hour14"));
  $("#h15 .description").val(localStorage.getItem("hour15"));
  $("#h16 .description").val(localStorage.getItem("hour16"));
  $("#h17 .description").val(localStorage.getItem("hour17"));
})

// style with jQuery
$('.display-3').css('color', 'black');

$('.display-3').css('border', 'solid');
$('.display-3').css('border-radius', '10px');
$('.display-3').css('box-shadow', 'black');

$('.lead').css('color', 'black');
