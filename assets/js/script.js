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
var pc_win, mapping, pcChoice, pc_choice_output, tie, user_win, userChoice;
mapping = ["rock", "lizard", "spock", "scissors", "paper"];

//generate pc choice
pc_choice = Math.floor(Math.random() * 5);
pc_choice_output = mapping[pc_choice];

//confirm choices
    console.log(userChoice);
    console.log(pc_choice_output);

//check user choice section
if (userChoice === "scissors") {
    displayChoices(userChoice, pc_choice_output);
} else if (userChoice === "paper") {
    displayChoices(userChoice, pc_choice_output);
} else if (userChoice === "rock") {
    displayChoices(userChoice, pc_choice_output);
} else if (userChoice === "lizard") {
    displayChoices(userChoice, pc_choice_output);
} else if (userChoice === "spock") {
    displayChoices(userChoice, pc_choice_output);
} else {
    alert(`unknown user choice: ${userChoice}`);
        throw `Unknown user choice: ${userChoice}. Aborting`;
}
    //calc results
    pc_win = "We win!";
    user_win = "You win!";
    tie = "Tie!";

    //share results
    if (pc_choice_output === userChoice) {
        console.log(tie);
    } else {
        if ((userChoice + 1) % 5 === pc_choice_output) {
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
function displayChoices(userpick, computerpick) {
    document.getElementById('userpick').textContent = userpick;
    document.getElementById('computerpick').textContent = computerpick;
}
