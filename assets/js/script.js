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
//create a function and whithin that function use jquery to 
///determine when the button is clovked that you save the sibiling text are event details or description

var saveEventDetails = function() {
    //$(".btn").on("click", function () {
        var details = $("#eventDetails1").val();//use this and sibilings
console.log (details);
localStorage.setItem ("Details", JSON.stringify(details));
}

saveEventDetails();
    



// load existing values 

    // //var loadEventDetails = function() {
        //     localStorage.getItem("EventDetails", JSON.stringify(details));
        //   };
        //loadEventDetails();

