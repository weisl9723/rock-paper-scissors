function computerPlay(){
const options = ['Rock', 'Paper', 'Scissors'];
let select = Math.floor(Math.random() * 3);

return options[select];

}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == "rock"){
        switch(computerSelection) {
            case "Rock":
              return "DRAW!";
              break;
            case "Paper":
              return "You Lose!";
              break;
            case "Scissors":
              return "You Win!";
              break;
            default:
              console.log("Error!");
          }
    }
    else if(playerSelection == "paper"){
        switch(computerSelection) {
            case "Rock":
              return "You Win!";
              break;
            case "Paper":
              return "DRAW!";
              break;
            case "Scissors":
              return "You Lose!";
              break;
            default:
              console.log("Error!");
          }
    }
    else if (playerSelection == "scissors"){
        switch(computerSelection) {
            case "Rock":
              return "You Win!";
              break;
            case "Paper":
              return "You Lose!";
              break;
            case "Scissors":
              return "DRAW!";
              break;
            default:
              console.log("Error!");
          }
    }
  }

/*  function game(){
    let player = 0;
    let comp = 0;

    for (let i = 0; i < 5; i++) {
      let computerSelection = computerPlay();
      let playerSelection = prompt(`"Round (${i+1}) Pick an option: 'Rock', 'Paper', or 'Scissors'"`).toLowerCase();
      console.log(`Player chooses: ${playerSelection} Computer chooses: ${computerSelection}`);

      if (playRound(playerSelection, computerSelection) === "You Win!"){
        console.log("You Win!");
        player++;
      }
      else if(playRound(playerSelection, computerSelection) === "You Lose!"){
        console.log("You Lose!");
        comp++;
      }
      else {
        console.log("DRAW!");
      }

      console.log(`Player Score: ${player} and Computer Score: ${comp}`);
   }
   */
  
  const rock = document.querySelector('#rock');
  const paper = document.querySelector('#paper');
  const scissors = document.querySelector('#scissors');

  rock.addEventListener("click", function(e){
    console.log(rock);
  });
  paper.addEventListener("click", function(e){
    console.log(paper);
  });
  scissors.addEventListener("click", function(e){
    console.log(scissors);
  });


  //const computerSelection = computerPlay();
  //console.log(computerSelection);
  //console.log(playRound(playerSelection, computerSelection));
  //game();

