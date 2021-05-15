//today's date using moment
var today = moment().format("dddd, MMMM Do");
$("#currentDay").text(today);

// highlight text area based on the hour
var hourHighlight = function () {

    var currentTimeBrowser = moment().hour();
    //console.log (currentTimeBrowser);

    $(".time-block").each(function () {
        var scheduleHour = parseInt($(this).attr("id").split("hour")[0]);
    //console.log (scheduleHour);

    if (currentTimeBrowser === scheduleHour) {
        $(this).addClass("present");
    } else if (currentTimeBrowser >= scheduleHour){
        $(this).addClass("past");
    } else if (currentTimeBrowser <= scheduleHour){
        $(this).addClass("future");
    }
    });

    //console.log (currentTimeBrowser);
};

hourHighlight ();

// saving text area

var details = $("#eventDetails1").val();
console.log (details);

    // //var saveEventDetails = function() {
    //     localStorage.setItem("EventDetails", JSON.stringify(details));
    //   };
    
// load existing values 

    // //var loadEventDetails = function() {
        //     localStorage.getItem("EventDetails", JSON.stringify(details));
        //   };
        //loadEventDetails();

