var computerScore = document.getElementById('computer-score');
var playerScore = document.getElementById('player-score');

var playerChoice = document.getElementById('player-choice');
var computerChoice = document.getElementById('computer-choice');

var result = document.getElementById('result-text');

const playerImg = document.getElementById('playerChoiceImg');
const computerImg = document.getElementById('compChoiceImg');

function rock() {
    const computerVal = parseInt(Math.random()*3) + 1;
    playerChoice.innerHTML = "Player Chose Rock";
    playerImg.setAttribute("src", "images/rock.avif");

    if (computerVal == 1){
        result.innerHTML = "Tie!";
        computerChoice.innerHTML = "Computer Chose Rock";
        computerImg.setAttribute("src", "images/rock.avif");
    }else if (computerVal == 2){
        result.innerHTML = "You lose!";
        computerScore.innerHTML = parseInt(computerScore.innerHTML) + 1;
        computerChoice.innerHTML = "Computer Chose Paper";
        computerImg.setAttribute("src", "images/paper.jpg");
    }else if (computerVal == 3){
        result.innerHTML = "You win!";
        playerScore.innerHTML = parseInt(playerScore.innerHTML) + 1;
        computerChoice.innerHTML = "Computer Chose Scissors";
        computerImg.setAttribute("src", "images/scissors.jpg");
    }
}

function paper() {
    const computerVal = parseInt(Math.random()*3) + 1;
    playerChoice.innerHTML = "Player Chose Paper";
    playerImg.setAttribute("src", "images/paper.jpg");

    if (computerVal == 1){
        result.innerHTML = "You win!";
        playerScore.innerHTML = parseInt(playerScore.innerHTML) + 1;
        computerChoice.innerHTML = "Computer Chose Rock";
        computerImg.setAttribute("src", "images/rock.avif");
    }else if (computerVal == 2){
        result.innerHTML = "Tie!";
        computerChoice.innerHTML = "Computer Chose Paper";
        computerImg.setAttribute("src", "images/paper.jpg");
    }else if (computerVal == 3){
        result.innerHTML = "You lose!";
        computerScore.innerHTML = parseInt(computerScore.innerHTML) + 1;
        computerChoice.innerHTML = "Computer Chose Scissors";
        computerImg.setAttribute("src", "images/scissors.jpg");
    }
}

function scissors() {
    const computerVal = parseInt(Math.random()*3) + 1;
    playerChoice.innerHTML = "Player Chose Scissors";
    playerImg.setAttribute("src", "images/scissors.jpg");

    if (computerVal == 1){
        result.innerHTML = "You lose!";
        computerScore.innerHTML = parseInt(computerScore.innerHTML) + 1;
        computerChoice.innerHTML = "Computer Chose Rock";
        computerImg.setAttribute("src", "images/rock.avif");
    }else if (computerVal == 2){
        result.innerHTML = "You win!";
        playerScore.innerHTML = parseInt(playerScore.innerHTML) + 1;
        computerChoice.innerHTML = "Computer Chose Paper";
        computerImg.setAttribute("src", "images/paper.jpg");
    }else if (computerVal == 3){
        result.innerHTML = "Tie!";
        computerChoice.innerHTML = "Computer Chose Scissors";
        computerImg.setAttribute("src", "images/scissors.jpg");
    }
}

function reset() {
    playerScore.innerHTML = 0;
    computerScore.innerHTML = 0;
    playerChoice.innerHTML = "Player";
    computerChoice.innerHTML = "Computer";
    computerImg.setAttribute("src", "images/");
    playerImg.setAttribute("src", "images/");
}
