console.log("Hello Hoiby's World!");

let playerScore= 0;
let computerScore= 0;

//Ask user to start a game
//For every round until 5 rounds
    function playGame() {
         
        for (i=0;i<5;i++) {
            playRound(getUserInput(),getComputerInput());
            console.log("Your score: " + playerScore + ", the computer score: " + computerScore);
        }

        determineWinner();
    }

    function determineWinner() {
        if (playerScore == computerScore) {
            console.log("Game over, it's a tie!");
        } 
        else if (playerScore > computerScore) {
            console.log("Game over, you win!");
        }
        else { 
            console.log("Game over, you lose!");
        };
    };

    playGame();

    //ask userInput of rock paper scissors
    function getUserInput() {
        input = prompt("Scissors, Paper, or Stone?");
        return input;
    };

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
    function playRound(playerSelection,computerSelection) {
        
        playerSelection = playerSelection.toLowerCase();

        if (playerSelection === computerSelection) {
            alert("It's a tie! Both of you chose " + playerSelection + ".");
            console.log("It's a tie! Both of you chose " + playerSelection + ".");
            return;
        }
        else if ((playerSelection == "scissors" && computerSelection == "paper") || (playerSelection == "paper" && computerSelection == "stone") || (playerSelection == "stone" && computerSelection == "scissors")) {
            alert("You win! You chose " + playerSelection + " and that beats the computer's " + computerSelection + "!");
            console.log("You win! You chose " + playerSelection + " and that beats the computer's " + computerSelection + "!");
            ++playerScore;
            return;
        }
        else {
            alert("You lose.. The computer chose " + computerSelection + " and that beats your " + playerSelection + ". :(");
            console.log("You lose.. The computer chose " + computerSelection + " and that beats your " + playerSelection + ". :(");
            ++computerScore;
            return;
        }
    };

    
        // if same it's a draw
        // PLAYER SCISSORS COMPUTER PAPER - USER WIN
        // PLAYER STONE COMPUTER SCISSORS - USER WIN
        // PLAYER PAPER COMPUTER STONE - USER WIN
        // ELSE PLAYER LOSE
    //display round result
    //record result round
//Display total score and result