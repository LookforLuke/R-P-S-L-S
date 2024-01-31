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

//number to choice mapping
var pc_win, mapping, pcChoice, pc_choice_output, tie, user_win, userChoice, user_choice_output;
mapping = ["rock", "paper", "scissors", "spock", "lizard"];

