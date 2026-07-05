const joke=document.querySelector(".joke");
const punchline=document.querySelector(".punchline");
const filter=document.querySelectorAll(".filter");
const reset=document.querySelector(".reset");
const punchlineBox=document.querySelector(".punchlineBox");
const reveal=document.querySelector(".reveal");

let type="any";
let jokePunchline;
async function generateJoke(type){
  const fetchJoke=await fetch(`https://v2.jokeapi.dev/joke/${type}?safe-mode&type=twopart`);
  let jokeObj=await fetchJoke.json();

  joke.textContent=jokeObj.setup;
  jokePunchline=jokeObj.delivery;

  console.log(jokeObj.category);
  console.log(jokeObj.setup);
  console.log(jokeObj.delivery);
}

punchlineBox.addEventListener("mouseover",()=>{
  reveal.classList.add("hide");
  punchline.classList.remove("hide");
  punchline.textContent=jokePunchline;
});

punchlineBox.addEventListener("mouseout",()=>{
  reveal.classList.remove("hide");
  punchline.classList.add("hide");
});

reset.addEventListener("click",()=>{
  joke.textContent=`Consulting the comedy Gods...`;
  punchline.textContent=`...`;
  generateJoke(type);
});

filter.forEach(option=>{
  option.addEventListener("click",()=>{
    filter.forEach(i=>{i.classList.remove("active");});//resetting styling of all options
    type=option.textContent;
    option.classList.add("active");
  });
});

generateJoke("any");
