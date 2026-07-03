const input = document.getElementById("input");
const checkGuess= document.querySelector(".checkGuess");
const response=document.querySelector(".response");
const attemptsSpan = document.querySelector(".attemptsSpan");

function randomAns(){
  return Math.floor((Math.random()*100)+1);
}

let finalAns=randomAns();//calling it at starting of game
//console.log(finalAns);//showing final correct ans on console

//taking the guess of the user
let guess;
input.addEventListener("input",()=>{
  guess=input.value;
});

checkGuess.addEventListener("click",()=>{
  response.classList.remove("tooHigh");
  response.classList.remove("tooLow");
  response.classList.remove("correct");
  response.classList.remove("invalid");

  if(guess==null){
    response.innerText=`⚠️ Enter a number!`;
    response.classList.add("invalid");
    return;
  }

  if(guess>100 || guess<1){
    response.innerText=`⚠️ 1 - 100 only`;
    response.classList.add("invalid");
    return;
  }

  if(guess>finalAns){
    response.innerText=`Too High! 📈`;
    response.classList.add("tooHigh");
  }
  else if(guess<finalAns){
    response.innerText=`Too Low! 📉`;
    response.classList.add("tooLow");
  }
  else{
    response.innerText=`Correct! You won 🎯`;
    response.classList.add("correct");
  }

  updateAttempt();
});

//updating attempt count
let count=0;
function updateAttempt(){
  count++;
  attemptsSpan.innerText=`${count}`;
}

//resetting game
const reset=document.querySelector(".reset");
reset.addEventListener("click",()=>{
  input.value="";
  guess=null;

  response.classList.remove("tooHigh");
  response.classList.remove("tooLow");
  response.classList.remove("correct");
  response.classList.remove("invalid");
  response.innerText=`🤔 Can you find the secret number?`;

  finalAns=randomAns();
  //console.log("after :"+finalAns);//showing new final correct ans after resetting on console

  attemptsSpan.innerText=`0`;
});
