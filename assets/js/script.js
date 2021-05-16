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

var saveEventDetails = function() {
    $(".btn").on("click", function () {
        var time = $(this).siblings(".hour").text(); 
        var details = $(this).siblings(".description").val()
        console.log (details);
        console.log (time);
        //debugger;
        localStorage.setItem (JSON.stringify(time), JSON.stringify(details));
    })
}

saveEventDetails();
    



// load existing values 

    // //var loadEventDetails = function() {
        //     localStorage.getItem("EventDetails", JSON.stringify(details));
        //   };
        //loadEventDetails();

