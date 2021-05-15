//today's date using moment
var today = moment().format("dddd, MMMM Do");
$("#currentDay").text(today);

var currentTimeBrowser = moment().hour();
console.log (currentTimeBrowser);

$(".time-block").each(function () {
    var scheduleHour = parseInt($(this).attr("id").split("hour")[0]);
console.log (scheduleHour);
});