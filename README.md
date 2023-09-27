# The-Great-Comic-Quiz

- Create file/folder structure
    - Two seperate HTML pages (one for the quiz, one for hiscores)
- Once a start button is clicked
    - Quiz starts, timer starts counting down (Set Interval)

    - When an answer is selected
        - IF an answer is wrong, then decrement our timer (15 seconds)
            - Display that user choice was incorrect, move to the next question
        - IF an answer is correct
            - Display that user choice was correct
            - We want to either display score with remaining time OR increment score(Up to you)
        - For loop to loop thru questions array to the next question

    - When timer hits 0 OR no more questions in our array
        - Then we have to clear Interval
        - Then allow user to input initials (prevent default on our html form)
        - Display the users score and Then link to hiscores page
        - Save data to local storage

    - We will use javascript to dynamically create our HTML 
        - createElement to create 
            - Maybe H1 for our question, buttons for our choices, maybe an H2 to display wrong/right to user

var questions = [
    {
        question: "What does HTML stand for?",
        choices: ["Hyper text markup language", "Hyper text martian language", "answer 3", "Answer 4"],
        answer: "Hyper text markup language",
    },
    {
        question: "Commonly used data types DO NOT include",
        choices: ["Strings", "booleans", "alerts", "numbers"],
        answer: "alerts",
    },
    {
        question: "The condition in an if / else statement is enclosed within ____.
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses",
    }    
]
var h1El = createElement("h1")
h1El.textContent = questions[1].question
    

// alert("working");

//click on start btn that starts both timer and game
//setinterval for timer
//store wins and losses on local storage
//get and set function for values
//array of words
//way to pick a word and replace the letters with _
// take userinput for letters (keydown event)
//check userinput against the word letter

var startBtn = document.querySelector("#start");
var timerP = document.querySelector("#timer");
var wordDiv = document.getElementById("word");
var count = 10;
var wordList = ["javascript", "function"];
var word;
var _word = "";
var wins = 0;
var losses = 0;

startBtn.addEventListener("click", function () {
    // alert("start game")
    game();
    var timer = setInterval(function () {
        if (count > 0) {
            count--;
            timerP.textContent = count;
        } else {
            clearInterval(timer)
            // alert("game over")
            wordDiv.textContent = "GAME OVER"
        }

    }, 1000)
});

function game() {
    word = wordList[Math.floor(Math.random() * wordList.length)]
    console.log(word);
    for (var i = 0; i < word.length; i++) {
        _word += "_"
    }
    // console.log(_word.split("").join(" "));
    wordDiv.textContent = _word.split("").join(" ");
}

document.addEventListener("keyup", function (e) {
    word = word.split("");
    _word = _word.split("");
    console.log(e.key, word, _word);
    for (var i = 0; i < _word.length; i++) {
        if(e.key === word[i]){
            _word[i] = e.key
        }
    }
    console.log(_word);
    word = word.join("");
    _word = _word.join("");
    wordDiv.textContent = _word;
})
