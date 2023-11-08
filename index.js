// JavaScript source code
//produce the random integers to be multiplied together
const num1 = Math.ceil(Math.random()*10)
const num2 = Math.ceil(Math.random() * 10)

//replace placeholder with random two integers using template literals
const questionE1 = document.getElementById("question");
questionE1.innerText = `What is ${num1} multiply by ${num2}?`;

//retrieve user answer and current score 
const formE1 = document.getElementById("form")
const inputE1 = document.getElementById("input")
const scoreE1 = document.getElementById("score")

//Pre-define score in case there is no score, so it shows 0 as opposed to null
if (!score) {
    score = o;
}

let score = JSON.parse(localStorage.getItem("score"));

//retrieve and display update score

formE1.addEventListener("submit", () => {
    const userAns = +inputE1.value;
    if (userAns === correctAns) {
        score++;
        updateLocalStorage()
    }
    else {
        score--;
        updateLocalStorage()
    }
});

function updateLocalStorage(){
    localStorage.setItem("score", JSON.stringify(score))
}

scoreE1.innerText = `score: ${scoreE1}`
