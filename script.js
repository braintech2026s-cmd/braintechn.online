function showMessage() {
    alert("Thank you for choosing BrainTech 🚀");
}

/* Scroll Animation */

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add("show");
    }
  });
});

document.querySelectorAll("section, .feature-card, .service-card, .price-card")
.forEach(el=>{
  el.classList.add("fade-up");
  observer.observe(el);
});
// Loader

window.addEventListener("load", function(){
document.getElementById("loader").style.display="none";
});


// Typing Effect

const words = ["High-Converting Websites", "Startup SaaS Platforms", "AI Solutions"];
let i = 0;
let j = 0;
let currentWord = "";
let isDeleting = false;

function type(){
currentWord = words[i];

if(isDeleting){
j--;
}else{
j++;
}

document.getElementById("typing").textContent = currentWord.substring(0,j);

if(!isDeleting && j === currentWord.length){
isDeleting = true;
setTimeout(type,1000);
return;
}

if(isDeleting && j === 0){
isDeleting = false;
i++;
if(i === words.length){
i = 0;
}
}

setTimeout(type,120);
}

type();


// Particles Background

particlesJS("particles-js",{
particles:{
number:{value:80},
size:{value:3},
move:{speed:2},
line_linked:{
enable:true,
opacity:0.2
}
}
});
// Scroll Reveal Animation

window.addEventListener("scroll", reveal);

function reveal(){
let reveals=document.querySelectorAll(".reveal");

for(let i=0;i<reveals.length;i++){

let windowHeight=window.innerHeight;
let elementTop=reveals[i].getBoundingClientRect().top;
let elementVisible=150;

if(elementTop<windowHeight-elementVisible){
reveals[i].classList.add("active");
}

}
}
document.querySelectorAll("nav a").forEach(anchor=>{
anchor.addEventListener("click",function(e){
e.preventDefault();

document.querySelector(this.getAttribute("href"))
.scrollIntoView({
behavior:"smooth"
});
});
});