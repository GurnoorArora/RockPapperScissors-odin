document.addEventListener('DOMContentLoaded', function () {
    let playerSelection = '';
    let computerSelection = '';
    let PlayerCounter = 0;
    let ComputerCounter = 0;
    let roundWinner = '';
    let finalResult = '';

    function getComputerChoice() {
        return Math.random();
    }

    function convertString() {
        let computerSelection = getComputerChoice();
        if (computerSelection > 1 / 3 && computerSelection < 0.66) {
            computerSelection = 'ROCK';
        } else if (computerSelection < 1 / 3) {
            computerSelection = 'SCISSORS';
        } else if (computerSelection > 0.66) {
            computerSelection = 'PAPER';
        }
        return computerSelection;
    }

    function Result(playerSelection, computerSelection) {
        if (playerSelection == 'ROCK' && computerSelection == 'ROCK') {
            roundWinner = 'tie';
            return
        } else if (playerSelection == "ROCK" && computerSelection == 'PAPER') {
            ComputerCounter++;
            roundWinner = 'computer';
            return
        } else if (playerSelection == "ROCK" && computerSelection == "SCISSORS") {
            PlayerCounter++;
            roundWinner = 'player';
            return
        } else if (playerSelection == 'SCISSORS' && computerSelection == 'SCISSORS') {
            roundWinner = 'tie';
            return
        } else if (playerSelection == "SCISSORS" && computerSelection == 'ROCK') {
            ComputerCounter++;
            roundWinner = 'computer';
            return
        } else if (playerSelection == "SCISSORS" && computerSelection == "paper") {
            PlayerCounter++;
            roundWinner = 'player';
            return
        } else if (playerSelection == 'PAPER' && computerSelection =='PAPER') {
            roundWinner = 'tie';
            return
        } else if (playerSelection == 'PAPER' && computerSelection == 'SCISSORS') {
            ComputerCounter++;
            roundWinner = 'computer';
            return
        } else if (playerSelection == 'PAPER' && computerSelection == 'ROCK') {
            PlayerCounter++;
            roundWinner = 'player';
            return
        }
    }

    function final() {
        if (PlayerCounter == 3 || ComputerCounter == 3) {
            if (PlayerCounter == 3) {
                finalResult = "Player Won";
            } else {
                finalResult = "Computer Won";
            }
            return finalResult;
        }
    }

    // dom manipulation
    const playerSign = document.getElementById('player1');
    const computerSign = document.getElementById('computerSign');
    const rock = document.getElementById('rock');
    const scissors = document.getElementById('scissors');
    const paper = document.getElementById('paper');
    const result=document.getElementById('result');
    const ComputerScore1=document.getElementById('ComputerScore');
    const PlayerScore1=document.getElementById('PlayerScore');

   if(ComputerCounter!=3 && PlayerCounter!=3)
   {
    rock.addEventListener('click', () => handleClick('ROCK'));
    paper.addEventListener('click', () => handleClick('PAPER'));
    scissors.addEventListener('click', () => handleClick('SCISSORS'));
   }
    function updatePIcons(PlayerSelection) {
        switch (PlayerSelection) {
            case 'ROCK':
                playerSign.textContent = '👊';
                break;
            case 'PAPER':
                playerSign.textContent = '✋';
                break;
            case 'SCISSORS':
                playerSign.textContent = '✌️';
                break;
        }

    }
    function updateCIcons(computerSelection)
    {
        switch (computerSelection) {
            case 'ROCK':
                computerSign.textContent = '👊';
                break;
            case 'PAPER':
                computerSign.textContent = '✋';
                break;
            case 'SCISSORS':
                computerSign.textContent = '✌️';
                break;
        }
    }
    function updateScoreInfo() {
        ComputerScore1.textContent = `Computer: ${ComputerCounter}`;
        PlayerScore1.textContent=`Player: ${PlayerCounter}`;
    }
    

    function handleClick(playerSelection) {
        computerSelection = convertString();
        updatePIcons(playerSelection,computerSelection);
        updateCIcons(computerSelection);
        Result(playerSelection,computerSelection)
        updateScoreInfo();
        if(PlayerCounter == 3 || ComputerCounter == 3)
        {
            const finalResult=final();
            result.textContent=finalResult;
            
        }
    }
});