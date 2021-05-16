//today's date using moment
var today = moment().format("dddd, MMMM Do");
$("#currentDay").text(today);

// highlight text area based on the hour
var hourHighlight = function () {

    var currentTimeBrowser = moment().hour();
    //console.log (currentTimeBrowser);

    $(".time-block").each(function () {
        var scheduleHour = parseInt($(this).attr("id"));
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
        localStorage.setItem (time, (JSON.stringify(details)));
    })
}

    
// load existing values 

    var loadEventDetails = function() {
        var nineAmTask = JSON.parse(localStorage.getItem("9AM"));
        var tenAmTask = JSON.parse(localStorage.getItem("10AM"));
        var elevenAmTask = JSON.parse(localStorage.getItem("11AM"));
        var twelvePmTask = JSON.parse(localStorage.getItem("12PM"));
        var thirteenPmTask = JSON.parse(localStorage.getItem("13PM"));
        var fourteenPmTask = JSON.parse(localStorage.getItem("14PM"));
        var fifteenPmTask = JSON.parse(localStorage.getItem("15PM"));
        var sixteenPmTask = JSON.parse(localStorage.getItem("16PM"));
        var seventeenPmTask = JSON.parse(localStorage.getItem("17PM"));

        console.log (nineAmTask);
        console.log (tenAmTask);
        console.log (elevenAmTask);
        console.log (twelvePmTask);
        console.log (thirteenPmTask);
        console.log (fourteenPmTask);
        console.log (fifteenPmTask);
        console.log (sixteenPmTask);
        console.log (seventeenPmTask);

        $("#eventDetails9").val(nineAmTask);
        $("#eventDetails10").val(tenAmTask);
        $("#eventDetails11").val(elevenAmTask);
        $("#eventDetails12").val(twelvePmTask);
        $("#eventDetails13").val(thirteenPmTask);
        $("#eventDetails14").val(fourteenPmTask);
        $("#eventDetails15").val(fifteenPmTask);
        $("#eventDetails16").val(sixteenPmTask);
        $("#eventDetails17").val(seventeenPmTask);


};

hourHighlight ();
loadEventDetails();
saveEventDetails();

