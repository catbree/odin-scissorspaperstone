console.log("Hello Hoiby's World!");

//Ask user to start a game
//For every round until 5 rounds
    //ask userInput of rock paper scissors
    //let userChoice
        //ensure it is case-sensitive
    //let computerChoice
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
        // if same it's a draw
        // PLAYER SCISSORS COMPUTER PAPER - USER WIN
        // PLAYER STONE COMPUTER SCISSORS - USER WIN
        // PLAYER PAPER COMPUTER STONE - USER WIN
        // ELSE PLAYER LOSE
    //display round result
    //record result round
//Display total score and result