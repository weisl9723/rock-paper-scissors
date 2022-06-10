//score counters
let player = 0;
let computer = 0;
let draw = 0;

//computer randomly selects choice
function computerPlay(){
const options = ['Rock', 'Paper', 'Scissors'];
let select = Math.floor(Math.random() * 3);

return options[select];
}

//the conditions that determine who wins
function playRound(playerSelection, computerSelection) {
    if (playerSelection == "rock"){
        switch(computerSelection) {
            case "Rock":
              result.textContent = "It's a draw!";
              return "DRAW!";
              break;
            case "Paper":
              result.textContent = "Paper beats Rock!";
              return "You Lose!";
              break;
            case "Scissors":
              result.textContent = "Rock beats Scissors!";
              return "You Win!";
              break;
            default:
              console.log("Error!");
          }
    }
    else if(playerSelection == "paper"){
        switch(computerSelection) {
            case "Rock":
              result.textContent = "Paper beats Rock!";
              return "You Win!";
              break;
            case "Paper":
              result.textContent = "It's a draw!";
              return "DRAW!";
              break;
            case "Scissors":
              result.textContent = "Scissor beats Paper!";
              return "You Lose!";
              break;
            default:
              console.log("Error!");
          }
    }
    else if (playerSelection == "scissors"){
        switch(computerSelection) {
            case "Rock":
              result.textContent = "Rock beats Scissors!";
              return "You Win!";
              break;
            case "Paper":
              result.textContent = "Scissor beats Paper!";
              return "You Lose!";
              break;
            case "Scissors":
              result.textContent = "It's a draw!";
              return "DRAW!";
              break;
            default:
              console.log("Error!");
          }
    }
  }

   function game(playerSelection){
     //saving the return value in a string
    let computerSelection = computerPlay();

    //stops function from running if game is over
    if (player >= 5){
      result.textContent = "WINNER!";
      rock.style.visibility = "hidden";
      paper.style.visibility = "hidden";
      scissors.style.visibility = "hidden";
      reset.style.visibility = "visible";
      return;
    }
    else if (computer >= 5){
      result.textContent = "YOU LOSE!";
      rock.style.visibility = "hidden";
      paper.style.visibility = "hidden";
      scissors.style.visibility = "hidden";
      reset.style.visibility = "visible";
      return;
    }

    if (playRound(playerSelection, computerSelection) === "You Win!"){
      player++;
    }
    else if(playRound(playerSelection, computerSelection) === "You Lose!"){
      computer++;
    }
    else {
      draw++;
    }

    //updates the score
    scoreboard.textContent = `Player: ${player} | Computer: ${computer} | Draw: ${draw}`;
   }

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const scoreboard = document.querySelector('.score p');
const result = document.querySelector('.result');
const reset = document.querySelector('.reset-button');

  rock.addEventListener("click", function(e){
    game("rock");
  });
  paper.addEventListener("click", function(e){
    game("paper");
  });
  scissors.addEventListener("click", function(e){
    game("scissors");
  });
  reset.addEventListener("click", function(e){
    reset.style.visibility = "hidden";
    player = 0;
    computer = 0;
    draw = 0;
    scoreboard.textContent = `Player: ${player} | Computer: ${computer} | Draw: ${draw}`;
    result.textContent = '';
    rock.style.visibility = "visible";
    paper.style.visibility = "visible";
    scissors.style.visibility = "visible";
  });



  //const computerSelection = computerPlay();
  //console.log(computerSelection);
  //console.log(playRound(playerSelection, computerSelection));
  //game();

