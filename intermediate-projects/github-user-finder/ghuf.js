//main profile information

const profilePic=document.getElementById("profilePic");
const name=document.querySelector(".name");
const username=document.querySelector(".username");
const joiningDate=document.querySelector(".joiningDate");
const bio=document.querySelector(".bio");
const repo=document.querySelector(".infoRn");
const followers=document.querySelector(".infoF1n");
const following=document.querySelector(".infoF2n");
const locat=document.querySelector(".location");
const redirect=document.querySelector(".redirect");

const mainCard=document.querySelector(".mainCard");
const notFound=document.querySelector(".notFound");


const findUser=async (user)=>{
  const fetchUser=await fetch(`https://api.github.com/users/${user}`);
  let userObj=await fetchUser.json();

  notFound.classList.add("hide");
  mainCard.classList.remove("hide");

  if(userObj.login){
    profilePic.src=userObj.avatar_url;
  name.textContent=userObj.name;
  username.textContent=userObj.login;
  joiningDate.textContent=`Joined ${userObj.created_at.slice(0,10)}`;
  repo.textContent=userObj.public_repos;
  followers.textContent=userObj.followers;
  following.textContent=userObj.following;

  if(userObj.bio!==null)
    bio.textContent=userObj.bio;
  else
    bio.textContent=`This profile has no bio`;

  if(userObj.location!==null)
    locat.textContent=userObj.location;
  else
    locat.textContent=`Not Available`;

  redirect.textContent=`@${userObj.login}`;
  redirect.closest(".footInfoA").href=userObj.html_url;

  console.log(userObj.name);      //for console
  console.log(userObj.login);       //for console
  console.log(userObj.created_at);      //for console
  console.log(userObj.public_repos);     //for console
  console.log(userObj.followers);      //for console
  console.log(userObj.following);    //for console
  console.log(userObj.bio);      //for console
  console.log(userObj.location);      //for console
  }
  else{
    notFound.classList.remove("hide");
    mainCard.classList.add("hide");
    notFound.querySelector(".notFoundUsername").textContent=user;
  }
};

findUser("TP-AdnanKhan");


//searchbar
const searchBtn=document.querySelector(".searchBtn");
const search=document.querySelector("#search");

let searchValue;
search.addEventListener("input",()=>{
  searchValue=search.value;
});

searchBtn.addEventListener("click",()=>{ // <= 
  if(searchValue.trim()!==""){            // \
    findUser(searchValue);                // |
    console.log(searchValue); //for console  |
  }                                       // |
});                                       // |
                                          // | 
search.addEventListener("keydown",(e)=>{  // |   This event happens inside of Input with ID of "search"; when the user clicks a key while inside input it checks if the key
  if(e.key=="Enter")                      // |   is "Enter" key => if yes => then we trigger the event using code by calling "searchBtn.click()" 
    searchBtn.click(); //--------------------/
});


//Dark and Light mode
let isDark=true;

function toDark(){
document.documentElement.style.setProperty(`--app-bg`,`#0d1117`);
document.documentElement.style.setProperty(`--card-surface`,`#161b22`);
document.documentElement.style.setProperty(`--input-bg`,`#010409`);
document.documentElement.style.setProperty(`--border-color`,`#30363d`);
document.documentElement.style.setProperty(`--text-primary`,`#e6edf3`);
document.documentElement.style.setProperty(`--text-secondary`,`#848d97`);
document.documentElement.style.setProperty(`--action-button`,`#238636`);
document.documentElement.style.setProperty(`--action-button-hover`,`#2ea043`);
document.documentElement.style.setProperty(`--information-bg`,`rgba(26, 27, 28, 0.298);`);
document.documentElement.style.setProperty(`--border-seacrhbar-mainBox`,`#161b22`);
document.documentElement.style.setProperty(`--mode-hover`,`#21262d`);
}

function toLight(){
document.documentElement.style.setProperty(`--app-bg`,`#f6f8fa`);
document.documentElement.style.setProperty(`--card-surface`,`#ffffff`);
document.documentElement.style.setProperty(`--input-bg`,`#ffffff`);
document.documentElement.style.setProperty(`--border-color`,`#d0d7de`);
document.documentElement.style.setProperty(`--text-primary`,`#24292f`);
document.documentElement.style.setProperty(`--text-secondary`,`#57606a`);
document.documentElement.style.setProperty(`--action-button`,`#2da44e`);
document.documentElement.style.setProperty(`--action-button-hover`,`#22c55e`);
document.documentElement.style.setProperty(`--information-bg`,`rgba(0, 0, 0, 0.08)`);
document.documentElement.style.setProperty(`--border-seacrhbar-mainBox`,`#24292f`);
document.documentElement.style.setProperty(`--mode-hover`,`#e5e7eb`);
}

const mode=document.querySelector(".mode");
mode.addEventListener("click",()=>{
  if(isDark){
    toLight();
    isDark=false;
    mode.textContent=`Dark 🌙`;
    mode.style.padding=`3px 8px 3px 14px`;
  }
  else{
    toDark();
    isDark=true;
    mode.textContent=`Light ☀️`;
    mode.style.padding=`3px 8px 3px 13px`;
  }
});