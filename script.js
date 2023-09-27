var questions = [
    {
        question: "Which famous character first appeared in Detective Comics #27?",
        choices: ["Polka-Dot Man", "Green Lantern", "Batman", "Mermaid Man"],
        answer: "Batman",
    },
    {
        question: "Which famous character first appeared in Action Comics #1?",
        choices: ["Iron Man", "Superman", "Barnacle Boy", "Homelander"],
        answer: "Superman",
    },
    {
        question: "Which artist has iconic comic runs with Spider-Man and Batman, while also creating Spawn? ",
        choices: ["Jim Lee", "George Perez", "John Romita Jr", "Todd McFarlane"],
        answer: "todd McFarlane",
    },
    {
        question: "Who is most known for being one of the most prolific and influential creators in comics history?",
        choices: ["Babe Ruth", "Jack Kirby", "Michael Jordan", "Jean-Luc Picard"],
        answer: "Jack Kirby",
    },
    {
        question: "Who is the biggest face of Marvel Comics today, even though they passed on in 2018?",
        choices: ["Miles Morales", "Norrin Radd", "Stan Lee", "Tony Stark"],
        answer: "Stan Lee",
    }
]
// var h1El = createElement("h1")
// h1El.textContent = questions[1].question

var startBtn = document.querySelector("#start");
var timerP = document.querySelector("#timer");
var wordDiv = document.getElementById("word");
var count = 120;
var word;
var _word = "";
var wins = 0;
var losses = 0;
var timer;
var myLevel = 0

startBtn.addEventListener("click", function () {
    // alert("start game")
    game();
    timer = setInterval(function () {
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
    document.getElementById("question").innerHTML = ""
    document.getElementById("answers").innerHTML = ""
    var h1El = document.createElement("h1")
    h1El.textContent = questions[myLevel].question
    document.getElementById("question").appendChild(h1El)
    for (var i = 0; i < 4; i++) {
        var btn = document.createElement("button");
        btn.textContent = questions[myLevel].choices[i]
        btn.onclick = answerKey;
        document.getElementById("answers").appendChild(btn)
    }

}
function answerKey() {
    console.log(this);
    if (questions[myLevel].answer === this.textContent) {
        console.log("Correct!")
    } else {
        console.log("Wrong!")
        count -= 10
    }
    myLevel++
    if (myLevel >= questions.length) {
       gameOver()
    } else {
        game()
    }
}

function gameOver() {
    console.log("GAME OVER");
    clearInterval(timer)
}
