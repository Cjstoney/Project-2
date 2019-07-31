$(document).ready(function(){

    console.log("running")

    $("#add").on("click", function () {

        var dateString= $("#date").html()
        var dateValues = dateString.split(" - ")
        
        var newEvent = {
            eventName: $("#input").val(),
            eventMonth: dateValues[0],
            eventDay: dateValues[1],
            eventYear: dateValues[2]
            // eventFinished: $("#...").val(),
            // eventImportnant: $("#...").val()
        }
        console.log("this is "+ newEvent.eventMonth);
        $.ajax({
            method: "POST",
            url: "/api/new-todo",
            data: newEvent
        }).then(function (data) {
            // console.log(data)
        });
        
    });

})