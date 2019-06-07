var counter = 60;
var setCountDown;
var correctAnswer = 0;
var incorrectAnswer = 0;

// start the time when button is pressed
function startTimerOnClick() {
    $("#start-game").click(function(){
        showTriviaQuestions();
        startTimer();
        $("#start-game").hide();
    })
}

// Start the timer
function startTimer(){
        setCountDown = setInterval(function(){
            counter--
            $(".time-left").html("<h1 class='text-center count-down main'>" + counter + "s</h1>");
            // if timer hits 0, stop the timer and hide trivia questions
            if (counter < 0){
                stopTimer();
                clearQuestions();
                $(".time-left").html("<h1 class='text-center count-down main'>Time's Up!</h1>");
            }
            
        },1000)
}
function stopTimer(){
    clearInterval(setCountDown);
}

function clearQuestions(){
    $(".trivia-questions").hide();
}



// if wrong/correct answer is chosen, update score by 1
function factCheck(){
    $("#correct-answer").click(function(){
        correctAnswer++
        $("correct-count").html("Correct: " + correctAnswer)
        alert("correct!")
    })
}


function showTriviaQuestions(){
    $(".trivia-questions").show();
}


// call functions
showTriviaQuestions();
clearQuestions();
startTimerOnClick();
factCheck();
