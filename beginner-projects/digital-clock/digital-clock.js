let curr=new Date();
updateTime();//calling it first time so that when the page loads then current time is shown
//if this is not called then for 1st second the clock will show 00:00:00 AM beacus this is the default value in html

function updateTime(){ //putting everything inside this function because we are calling it every second to update the time already so no need to update outside the function manually
  curr=new Date();
  let time=document.querySelector(".time");
let phase=document.querySelector(".phase");

let hour=document.querySelector(".hour");
let updatedHour;
if(curr.getHours()>12){
updatedHour=curr.getHours()-12;
phase.innerText="PM";
}
if(updatedHour<10){
  hour.innerText=`0${updatedHour}`;
}else{
  hour.innerText=updatedHour;
}

let minute=document.querySelector(".minute");
if(curr.getMinutes()<10){
  minute.innerText=`0${curr.getMinutes()}`;
}else{
  minute.innerText=curr.getMinutes();
}


let second=document.querySelector(".second");
if(curr.getSeconds()<10){
  second.innerText=`0${curr.getSeconds()}`;
}else{
  second.innerText=curr.getSeconds();
}

let day=document.querySelector(".day");
let updatedDay=curr.getDay();
let days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
day.innerText=`${days[updatedDay]}`;

let date=document.querySelector(".date");
date.innerText=curr.getDate();

let month=document.querySelector(".month");
let updatedMonth=curr.getMonth();
let months=["January","February","March","April","May","June","July","August","September","October","November","December"];
month.innerText=`${months[updatedMonth]}`;

let year=document.querySelector(".year");
year.innerText=curr.getFullYear();
}

setInterval(updateTime,1000);//calling updateTime function every 1000ms=1second