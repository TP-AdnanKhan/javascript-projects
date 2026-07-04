const quote=document.querySelector(".quote");
const author=document.querySelector(".author");

const fetchQuote=async ()=>{
  quote.textContent = "Loading an inspiring quote...";
  author.textContent = "...";

  const response=await fetch("https://dummyjson.com/quotes/random");
  let quoteObj=await response.json();

  quote.textContent=`\"${quoteObj.quote}\"`;
  author.textContent=`\~ ${quoteObj.author}`;
};

fetchQuote();

const newQuote=document.querySelector(".newQuote");
newQuote.addEventListener("click",()=>{
  fetchQuote();
});