var counter = 30;
var setCountDown;
var correctAnswer = 0;

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
                hideQuestions();
                $(".time-left").html("<h1 class='text-center count-down main'>Time's Up!</h1>");
            }
            
        },1000)
}
function stopTimer(){
    clearInterval(setCountDown);
}

function hideQuestions(){
    $(".trivia-questions").hide();
    $("#finished-button").hide();
}


// calculate score when button is pressed
$("#finished").click(function(){
    check();
})
// calculate score
function check(){
    $("#finished").click(function(){
        var question1 = $("input[name=question1]:checked").val();
        var question2 = $("input[name=question2]:checked").val();
        var question3 = $("input[name=question3]:checked").val();
        var question4 = $("input[name=question4]:checked").val();
            if(question1 === "Sin'dorei"){
                correctAnswer++
                $(".correct-count").html("You got " + correctAnswer + " out 4 questions correct!")
            }
            if(question2 === "False"){
                correctAnswer++
                $(".correct-count").html("You got " + correctAnswer + " out 4 questions correct!")
            }
            if(question3 === "True"){
                correctAnswer++
                $(".correct-count").html("You got " + correctAnswer + " out 4 questions correct!")
            }
            if(question4 === "Lady Katrana Prestor"){
                correctAnswer++
                $(".correct-count").html("You got " + correctAnswer + " out 4 questions correct!")
            }
    })
    hideQuestions();
    stopTimer();
}

function showTriviaQuestions(){
    $(".trivia-questions").show();
    $("#finished-button").show();
}


// call functions
showTriviaQuestions();
hideQuestions();
startTimerOnClick();
check();
console.log($('input[name=question5]').val());