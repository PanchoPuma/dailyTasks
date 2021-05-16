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


var saveEventDetails = function() {
    $(".btn").on("click", function () {
        var time = $(this).siblings(".hour").text(); 
        var details = $(this).siblings(".description").val()
        console.log (details);
        console.log (time);
        //debugger;
        localStorage.setItem (time, details);
    })
}

    
// load existing values 

    var loadEventDetails = function() {
        var nineAmTask = localStorage.getItem("9AM");
        var tenAmTask = localStorage.getItem("10AM");
        var elevenAmTask = localStorage.getItem("11AM");
        var twelveAmTask = localStorage.getItem("12PM");
        var thirteenAmTask = localStorage.getItem("13PM");
        var fourteenAmTask = localStorage.getItem("14PM");
        var fifteenAmTask = localStorage.getItem("15PM");
        var sixteenAmTask = localStorage.getItem("16PM");
        var seventeenAmTask = localStorage.getItem("17PM");

        console.log (nineAmTask);
        console.log (tenAmTask);
        console.log (elevenAmTask);
        console.log (twelveAmTask);
        console.log (thirteenAmTask);
        console.log (fourteenAmTask);
        console.log (fifteenAmTask);
        console.log (sixteenAmTask);
        console.log (seventeenAmTask);

        $("#eventDetails9").val(nineAmTask);
        $("#eventDetails10").val(nineAmTask);
        $("#eventDetails11").val(nineAmTask);
        $("#eventDetails12").val(nineAmTask);
        $("#eventDetails13").val(nineAmTask);
        $("#eventDetails14").val(nineAmTask);
        $("#eventDetails15").val(nineAmTask);
        $("#eventDetails16").val(nineAmTask);
        $("#eventDetails17").val(nineAmTask);


};

hourHighlight ();
loadEventDetails();
saveEventDetails();

