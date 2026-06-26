let hour=document.querySelector(".hour");
let minute=document.querySelector(".minute");
let second=document.querySelector(".second");
let millisecond=document.querySelector(".millisecond");

let msAcc=0;
let secAcc=0;
let minAcc=0;
let hrAcc=0;
let acc=0

function update(){
  acc++;
  let ms=acc%100;
  let lastDigit=acc%10;//third digit of millisecond part
  if(ms<10)
    millisecond.innerText=`0${ms}${lastDigit}`;//the lastDigit is only there to add smoothness to stopwatch and to make it look more attractive.
  else
    millisecond.innerText=`${ms}${lastDigit}`;

  if(acc%100===0){
  secAcc++;
  let sec=secAcc%60;
  if(sec<10)
    second.innerText=`0${sec}`;
  else
    second.innerText=`${sec}`;
  }

  if(acc%6000===0){
  minAcc++;
  let min=minAcc%60;
  if(min<10)
    minute.innerText=`0${min}`;
  else
    minute.innerText=`${min}`;
  }

  if(acc%360000===0){
    hrAcc++;
  let hr=hrAcc%24;
  if(hr<10)
    hour.innerText=`0${hr}`;
  else
    hour.innerText=`${hr}`;
  }
}

//buttons
let start=document.querySelector(".start");
let pause=document.querySelector(".pause");
let reset=document.querySelector(".reset");


let upd;
let isRunning=false;
start.addEventListener("click",()=>{
  if(isRunning==false){
  upd=setInterval(update,10);//apparently running setInterval(update,1) cause dealy due to which the stopwatch becomes very slows
  //to deal with it :- 1.) I used 10ms intervals to make the stopwatch delay less (about 2ms per second).
  //2.)To make the stopwatch's millisecond run smoothly ,I added another variable called "lastDigit=acc%10" this variable acts as the third digit(it is not accurate but it is so fast that it not visible to the users).
  isRunning=true;
  }
});

pause.addEventListener("click",()=>{
  clearInterval(upd);
  isRunning=false;
});

reset.addEventListener("click",()=>{
  clearInterval(upd);
  isRunning=false;
  acc=0;
  msAcc=0;
  secAcc=0;
  minAcc=0;
  hrAcc=0;
  hour.innerText=`00`;
  minute.innerText=`00`;
  second.innerText=`00`;
  millisecond.innerText=`000`;
});