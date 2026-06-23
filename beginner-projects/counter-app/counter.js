let count=document.querySelector(".count");
let decrease=document.querySelector(".dec");
let increase=document.querySelector(".inc");
let reset=document.querySelector(".reset");

decrease.addEventListener("click",()=>{
  let c=parseInt(count.innerText);
  c--;
  count.innerText=c;
  if(c<0){
    count.style.color="red";
  }
  if(c==0){
    count.style.color="gray";
  }
})

increase.addEventListener("click",()=>{
  let c=parseInt(count.innerText);
  c++;
  count.innerText=c;
  if(c>0){
    count.style.color="green";
  }
  if(c==0){
    count.style.color="gray";
  }
})

reset.addEventListener("click",()=>{
  count.innerText="0";
  count.style.color="gray";
})
