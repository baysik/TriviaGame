var counter = 60;
var setCountDown;

function startTimerOnClick() {
    $("#start-game").click(function(){
        console.log(counter);
        startTimer();
    })
}
function startTimer(){
        setCountDown = setInterval(function(){
            $(".time-left").html("<h1 class='text-center count-down'>" + counter + "s</h1>");
            counter--
            if (counter < 0){
                stopTimer();
                console.log("You Lost!");
            }
            
        },1000)
}
function stopTimer(){
    clearInterval(setCountDown);
}

function showTriviaQuestions(){
    $("#start-game").click(function(){
        $(".trivia1").html("Dalaran once rested in Silverpine Forest before being transported to Northrend");
        $(".triviabuttons1").append("<a class='btn btn-primary btn-lg mr-3' id='start-game' role='button'>True</a>")
        $(".triviabuttons1").append("<a class='btn btn-danger btn-lg' id='start-game' role='button'>False</a>")
        $(".trivia2").html("Dalaran once rested in Silverpine Forest before being transported to Northrend");
        $(".triviabuttons2").append("<a class='btn btn-primary btn-lg mr-3' id='start-game' role='button'>True</a>")
        $(".triviabuttons2").append("<a class='btn btn-danger btn-lg' id='start-game' role='button'>False</a>")
        $(".trivia3").html("Dalaran once rested in Silverpine Forest before being transported to Northrend");
        $(".triviabuttons3").append("<a class='btn btn-primary btn-lg mr-3' id='start-game' role='button'>True</a>")
        $(".triviabuttons3").append("<a class='btn btn-danger btn-lg' id='start-game' role='button'>False</a>")
        $(".trivia4").html("Dalaran once rested in Silverpine Forest before being transported to Northrend");
        $(".triviabuttons4").append("<a class='btn btn-primary btn-lg mr-3' id='start-game' role='button'>True</a>")
        $(".triviabuttons4").append("<a class='btn btn-danger btn-lg' id='start-game' role='button'>False</a>")
    })
}

// run functions

showTriviaQuestions();
startTimerOnClick();