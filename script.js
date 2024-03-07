console.log("Hello Hoiby's World!");

let playerScore= 0;
let computerScore= 0;

//Ask user to start a game
//For every round until 5 rounds
/*
    function playGame() {
         
        for (i=0;i<5;i++) {
            playRound(getUserInput(),getComputerInput());
            console.log("Your score: " + playerScore + ", the computer score: " + computerScore);
        }

        determineWinner();
    }
*/

    function determineWinner() {

        if (playerScore == 5) {
            console.log("You win!");
            resultDisplay.textContent = "You won 5 rounds, congratulations!";
            endGame();
        } 
        else if (computerScore == 5) {
            console.log("You lose!");
            resultDisplay.textContent = "The computer won 5 rounds first, better luck next time.";
            endGame();
        }
        else { 
        };
    };

    const restartSection = document.querySelector('#restartSection');
    function endGame() {
        optionButtons.forEach((optionButton) => {
            optionButton.disabled = true;
        });

        const restartButton = document.createElement("Button");
        restartButton.textContent = "Restart";
        restartSection.appendChild(restartButton);

        restartButton.addEventListener('click', () => {
            location.reload();
        })
    }

//    playGame();

    //get userInput of rock paper scissors
    const optionButtons = document.querySelectorAll('.optionButton');
    optionButtons.forEach((optionButton) => {
        optionButton.addEventListener('click', () => {
            playerSelection=optionButton.textContent;
            console.log("I've been clicked! I am " + playerSelection);

            playRound(playerSelection,getComputerInput());
        });
    });

/*
    //ask userInput of rock paper scissors
    function getUserInput() {
        input = prompt("Scissors, Paper, or Stone?");
        return input;
    };
*/

    //getcomputerChoice
    function getComputerInput() {
        switch(Math.floor(Math.random() * 3)) {
            case 0:
                input="scissors";
                break;
            case 1:
                input="paper";
                break;
            case 2:
                input="stone";
                break;
        };
        return input;
    }
    //compare user and computer choice
    const playerSelectedOption = document.querySelector('#playerSelectedOption');
    const computerSelectedOption = document.querySelector('#computerSelectedOption');
    const resultDisplay = document.querySelector('#resultDisplay');
    const playerScoreDisplay = document.querySelector('#playerScoreDisplay');
    const computerScoreDisplay = document.querySelector('#computerScoreDisplay');

    playerScoreDisplay.textContent = 0;
    computerScoreDisplay.textContent = 0;
    function playRound(playerSelection,computerSelection) {
        
        playerSelection = playerSelection.toLowerCase();

        playerSelectedOption.textContent = playerSelection;
        computerSelectedOption.textContent = computerSelection;

        if (playerSelection === computerSelection) {
            resultDisplay.textContent = "It's a tie";
        }
        else if ((playerSelection == "scissors" && computerSelection == "paper") || (playerSelection == "paper" && computerSelection == "stone") || (playerSelection == "stone" && computerSelection == "scissors")) {
            resultDisplay.textContent = "+1 to you";
            ++playerScore;
            playerScoreDisplay.textContent = playerScore;
        }
        else {
            resultDisplay.textContent = "+1 to the computer";
            ++computerScore;
            computerScoreDisplay.textContent = computerScore;
        }
        determineWinner()
        return;
    };