const container = document.querySelector(".container");
const choice = document.querySelector(".userChoice");
const compChoice=document.querySelector(".botChoice");
const choiceBox = document.querySelector(".choiceBox");
const result = document.querySelector(".result");
const history = document.querySelector(".history");

const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const defaultBotChoice=document.querySelector(".botAnswer");

const userResult = document.querySelector(".userResult");
const botResult = document.querySelector(".botResult");

const scoreboard = document.querySelector(".scoreboard");
const userScore = document.querySelector(".userScore");
const botScore = document.querySelector(".botScore");
const round = document.querySelector(".round");
let userSc = 0;
let botSc = 0;
let roundCount = 0;
let historyArray = []; //to store history

let computerChoice;
let chosenBot;
//function to randomly choose computers choice
function botChoice() {
  compChoiceReset();
  let ans = Math.floor(Math.random() * 3); //gives 0/1/2 as value:- .random gives 0 to 0.999 ; *3 gives 0 to 2.999 ; .floor makes it 0/1/2
  chosenBot = ans;
  if (ans == 0){
    ans = "✊";
    compChoice.querySelector(".rock").classList.remove("hide");
    defaultBotChoice.classList.add("hide");
  }
  else if (ans == 1){
    ans = "✋";
    compChoice.querySelector(".paper").classList.remove("hide");
    defaultBotChoice.classList.add("hide");
  }
  else{
    ans = "✌️";
    compChoice.querySelector(".scissors").classList.remove("hide");
    defaultBotChoice.classList.add("hide");
  } 
  
  return ans;
}

//when rock is clicked
let chosenValue; //for comparing choices
rock.addEventListener("click", () => {
  chosenValue = 0;
  computerChoice = botChoice();
  userResult.innerText = `You chose: ✊`;
  botResult.innerText = `Computer chose: ${computerChoice}`;
  whoWon(chosenValue, chosenBot, "✊", computerChoice);
});

//when paper is clicked
paper.addEventListener("click", () => {
  chosenValue = 1;
  computerChoice = botChoice();
  userResult.innerText = `You chose: ✋`;
  botResult.innerText = `Computer chose: ${computerChoice}`;
  whoWon(chosenValue, chosenBot, "✋", computerChoice);
});

//when scissors is clicked
scissors.addEventListener("click", () => {
  chosenValue = 2;
  computerChoice = botChoice();
  userResult.innerText = `You chose: ✌️`;
  botResult.innerText = `Computer chose: ${computerChoice}`;
  whoWon(chosenValue, chosenBot, "✌️", computerChoice);
});

//function to count rounds and assign value to user and computer
let flagRound = 0;
let flagBot = 0;
let flagUser = 0;
function whoWon(chosenValue, chosenBot, uc, bc) {
  if (chosenBot == 0 && chosenValue == 1) {
    userSc++;
  } else if (chosenBot == 0 && chosenValue == 2) {
    botSc++;
  } else if (chosenBot == 1 && chosenValue == 0) {
    botSc++;
  } else if (chosenBot == 1 && chosenValue == 2) {
    userSc++;
  } else if (chosenBot == 2 && chosenValue == 0) {
    userSc++;
  } else if (chosenBot == 2 && chosenValue == 1) {
    botSc++;
  } else {
    roundCount--;
  }
  roundCount++;

  if (flagRound < roundCount && flagUser < userSc) {
    flagRound++;
    flagUser++;

    let obj = {
      round: roundCount,
      user: uc,
      bot: bc,
    };

    updateHistory(obj, "You Won 🎉");
  } else if (flagRound < roundCount && flagBot < botSc) {
    flagRound++;
    flagBot++;

    let obj = {
      round: roundCount,
      user: uc,
      bot: bc,
    };

    updateHistory(obj, "Computer Won 🤖");
  }

  if (userSc == 3) {
    gameEnd("user", userSc, botSc);
  }
  if (botSc == 3) {
    gameEnd("bot", userSc, botSc);
  }

  round.innerText = `Round : ${roundCount}`;
  userScore.innerText = `You : ${userSc}`;
  botScore.innerText = `Computer : ${botSc}`;
}

//function determining the winner of the game
function gameEnd(a, userSc, botSc) {
  choiceBox.classList.add("hide");//hiding this (1)
  result.classList.add("hide");//hiding this (2)
  scoreboard.classList.add("hide");//hiding this (3) while showing result

  let div = document.createElement("div");
  div.classList.add("finalResultShown");
  if (a == "user") {
    div.innerHTML = `<h1>🏆 Game Over</h1>
      <p class="finalResultWinner">👑 You Won!</p>
      <h3>Final Score</h3>
      <p>You: ${userSc}</p>
      <p>Computer: ${botSc}</p>
      <button class="restartGame">RESTART</button>`;
  } else {
    div.innerHTML = `  <h1>🏆 Game Over</h1>
       <p class="finalResultWinner">🤖 Computer Won!</p>
       <h3>Final Score</h3>
       <p>You: ${userSc}</p>
       <p>Computer: ${botSc}</p>
       <button class="restartGame">RESTART</button>`;
  }
  scoreboard.insertAdjacentElement('afterend',div);
}

//round history
function updateHistory(obj, winner) {
  historyArray.push(obj);

  let colorWinner;
  if(winner=="You Won 🎉")
    colorWinner="#22c55e";
  else
    colorWinner="#f59e0b";

  let elem = document.createElement("div");
  elem.classList.add("historyRounds");
  elem.innerHTML += `<p class="historyRounds">
          <span class="roundCount">Round ${obj.round} :</span> You: ${obj.user} <span style="font-weight: 600; color:#94a3b8;">vs</span> Computer: ${obj.bot} → <span style="color:${colorWinner};">${winner}</span>
        </p>`;
  history.append(elem);

  console.log(historyArray);
}

//Reseting computer's choice
function compChoiceReset(){
  compChoice.querySelector(".rock").classList.add("hide");
  compChoice.querySelector(".paper").classList.add("hide");
  compChoice.querySelector(".scissors").classList.add("hide");
}

//restart button
container.addEventListener("click",(e)=>{
  if(e.target.closest(".restartGame")){
    e.target.closest(".finalResultShown").classList.add("hide");//hiding result panel

    choiceBox.classList.remove("hide");//removing hide from this (1)
    result.classList.remove("hide");//removing hide from this (2)
    scoreboard.classList.remove("hide");//removing hide from this (3) when game is restarted

    compChoiceReset();
    defaultBotChoice.classList.remove("hide");

    //resetting counts ans scores stored in js
    userSc=0;
    botSc=0;
    roundCount=0;
    flagRound = 0;
    flagBot = 0;
    flagUser = 0;
    //resetting count and score shown in scoreboard
    round.innerText = `Round : ${roundCount}`;
    userScore.innerText = `You : ${userSc}`;
    botScore.innerText = `Computer : ${botSc}`;

    //clearing result ("You chose:" and "Computer chose:")
    userResult.innerText = `You chose:`;
    botResult.innerText = `Computer chose:`;

    //clearing history
    historyArray=[];
    history.innerHTML=`<p>Round History</p>`;
  }
});