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
var pc_win, mapping, pcChoice, pc_choice_output, tie, user_win, userChoice, pcResult, uResult;
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

    //convert user to numbers
    if (userChoice === "rock") {
        uResult = "0";
    }
    else if (userChoice === "lizard") {
        uResult = "1";
    }
    else if (userChoice === "spock") {
        uResult = "2";
    }
    else if (userChoice === "scissors") {
        uResult = "3";
    }
    else if (userChoice === "paper") {
        uResult = "4";
    }

    //convert pc to numbers
    if (pc_choice_output === "rock") {
        pcResult = "0";
    }
    else if (pc_choice_output === "lizard") {
        pcResult = "1";
    }
    else if (pc_choice_output === "spock") {
        pcResult = "2";
    }
    else if (pc_choice_output === "scissors") {
        pcResult = "3";
    }
    else if (pc_choice_output === "paper") {
        pcResult = "4";
    }

    //check convert
    console.log(uResult);
    console.log(pcResult);

    //share results
    compare = uResult - pcResult + 5;
    if (compare % 5 === 0) {
        console.log(tie);
    } else if ((compare % 5 + 1) % 2 === 0) {
        console.log(pc_win);
    } else if ((compare % 5) % 2 === 0) {
        console.log(user_win);
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