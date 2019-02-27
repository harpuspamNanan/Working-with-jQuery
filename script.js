$(document).ready(function (){
    $("p").hide();              // Hide the <p> tags

    $("h1").click(function (){             // Show the p tag after a delay of 500secs
        $(this).next().slideToggle(500);
    });
});