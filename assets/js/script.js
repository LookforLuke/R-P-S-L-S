document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function () {
            if (this.getAttribute("data-type") === "play-again") {
                alert("You chose play again");
            } else {
                let userChoice = this.getAttribute("data-type");
                runGame(userChoice);
            }
        });
    }
});

function runGame(userChoice) {
//number to choice mapping
var pc_win, mapping, pcChoice, pc_choice_output, tie, user_win, userChoice, user_choice_output;
mapping = ["rock", "paper", "scissors", "spock", "lizard"];

//generate pc choice
pc_choice = Math.floor(Math.random() * 5);
pc_choice_output = mapping[pc_choice];

//confirm choices
console.log(pc_choice_output);
console.log(userChoice);

//check user choice section
if (userChoice === "scissors") {
    displayResult(userChoice, pc_choice_output);
} else if (userChoice === "paper") {
    displayResult(userChoice, pc_choice_output);
} else if (userChoice === "rock") {
    displayResult(userChoice, pc_choice_output);
} else if (userChoice === "lizard") {
    displayResult(userChoice, pc_choice_output);
} else if (userChoice === "spock") {
    displayResult(userChoice, pc_choice_output);
} else {
    alert(`unknown user choice: ${userChoice}`);
        throw `Unknown user choice: ${userChoice}. Aborting`;
}

//calc results
    pc_win = "We win!" [mapping[pc_choice], mapping[userChoice]];
    user_win = "You Win" [mapping[userChoice], mapping[pc_choice]];
    tie = "Tie!";

//share results
    if (pc_choice === userChoice) {
        console.log(tie);
    } else {
        if ((userChoice + 1) % 3 === pc_choice) {
            console.log(pc_win);
        } else {
            console.log(user_win);
        }
    }    
}

//determine choices
function determineChoices() {
    let userpick = parseInt(document.getElementById('userpick').innerText);
    let computerpick = parseInt(document.getElementById('computerpick').innerText);
}

//show choices
function displayResult(userpick, computerpick) {
    document.getElementById('userpick').textContent = userpick;
    document.getElementById('computerpick').textContent = computerpick;
}