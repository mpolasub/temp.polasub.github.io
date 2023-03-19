
const track = document.getElementById("image-track");
const blob = document.getElementById("blob");
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const letters1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let interval = null;
let interval1 = null;

document.querySelector("h3").onmouseover = event => {  
  let iteration = 0;
  
  clearInterval(interval);
  
  interval = setInterval(() => {
    event.target.innerText = event.target.innerText
      .split("")
      .map((letter, index) => {
        if(index < iteration) {
          return event.target.dataset.value[index];
        }
      
        return letters[Math.floor(Math.random() * 26)]
      })
      .join("");
    
    if(iteration >= event.target.dataset.value.length){ 
      clearInterval(interval);
    }
    
    iteration += 1 / 3;
  }, 30);
}

document.querySelector("h2").onmouseover = event => {  
  let iteration1 = 0;
  
  clearInterval(interval1);
  
  interval1 = setInterval(() => {
    event.target.innerText = event.target.innerText
      .split("")
      .map((letter, index) => {
        if(index < iteration1) {
          return event.target.dataset.value[index];
        }
      
        return letters1[Math.floor(Math.random() * 26)]
      })
      .join("");
    
    if(iteration1 >= event.target.dataset.value.length){ 
      clearInterval(interval1);
    }
    
    iteration1 += 1 / 3;
  }, 5);
}

document.querySelector("h2").onmouseout = event => {  
  let iteration1 = 0;
  
  clearInterval(interval1);
  
  interval1 = setInterval(() => {
    event.target.innerText = event.target.innerText
      .split("")
      .map((letter, index) => {
        if(index < iteration1) {
          return "scroll DOWN to continue"[index];
        }
      
        return letters1[Math.floor(Math.random() * 26)]
      })
      .join("");
    
    if(iteration1 >= event.target.dataset.value.length){ 
      clearInterval(interval1);
    }
    
    iteration1 += 1 / 3;
  }, 10);
}

// for mouse pointer blob
document.body.onpointermove = event => {
  const { clientX, clientY } = event;

  blob.animate({
    left: `${clientX}px`,
    top: `${clientY}px`
  }, { duration: 3000, fill: "forwards" });
}

// for moving track
window.onmousedown = e => {
  track.dataset.mouseDownAt = e.clientX;
}

window.onmouseup = () => {
  track.dataset.mouseDownAt = "0";
  track.dataset.prevPercentage = track.dataset.percentage;
}

window.onmousemove = e => {
  if(track.dataset.mouseDownAt === "0") return;
  
  const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
        maxDelta = window.innerWidth;
  
  const percentage = (mouseDelta / maxDelta) * -100,
        nextPercentageU = parseFloat(track.dataset.prevPercentage) + percentage, 
        nextPercentage = Math.max(Math.min(nextPercentageU, -20), -80);
  
  track.dataset.percentage = nextPercentage;

  track.animate({
    transform: `translate(${nextPercentage}%, -50%)`}, {duration:1200, fill: "forwards"});
  
  
  for (const image of track.getElementsByClassName("image")) {
    image.animate({
      objectPosition: `${80 + nextPercentage}% center`
    }, { duration: 1200, fill: "forwards"});
  };

}

// side   

let activeIndex = 0;

const slides = document.getElementsByTagName("article");

const handleLeftClick = () => {
  const nextIndex = activeIndex - 1 >= 0 ? activeIndex - 1 : slides.length - 1;
  
  const currentSlide = document.querySelector(`[data-index="${activeIndex}"]`),
        nextSlide = document.querySelector(`[data-index="${nextIndex}"]`);
        
  currentSlide.dataset.status = "after";
  
  nextSlide.dataset.status = "becoming-active-from-before";
  
  setTimeout(() => {
    nextSlide.dataset.status = "active";
    activeIndex = nextIndex;
  });
}

const handleRightClick = () => {
  const nextIndex = activeIndex + 1 <= slides.length - 1 ? activeIndex + 1 : 0;
  
  const currentSlide = document.querySelector(`[data-index="${activeIndex}"]`),
        nextSlide = document.querySelector(`[data-index="${nextIndex}"]`);
  
  currentSlide.dataset.status = "before";
  
  nextSlide.dataset.status = "becoming-active-from-after";
  
  setTimeout(() => {
    nextSlide.dataset.status = "active";
    activeIndex = nextIndex;
  });
}

// color text love
const love = document.querySelector(".activation");

love.onmouseenter = () => {
var r = document.querySelector(':root');


// Create a function for setting a variable value

  r.style.setProperty('--red', '#cc0000');
  r.style.setProperty('--darkPink', '#ff4d4d');
  r.style.setProperty('--pink', '#ff8080');
  r.style.setProperty('--fourDefaultBg', 'white')
}

love.onmouseleave = onMouseLeave = () => {
  var r = document.querySelector(':root');
  
  // r.style.setProperty('--purple', '--purpleStore');
  // r.style.setProperty('--violet', '--violetStore');
  // r.style.setProperty('--pink', '--pinkStore');
  
  r.style.setProperty('--red', 'white');
  r.style.setProperty('--darkPink', 'white');
  r.style.setProperty('--pink', 'white');
  r.style.setProperty('--fourDefaultBg', '#393631')
}

// music card1
const subtitle1 = document.getElementsByClassName("card-subtitle1")[0];

const createWord1 = (text, index) => {
  const word = document.createElement("span");
  
  word.innerHTML = `${text} `;
  
  word.classList.add("card-subtitle-word1");
  
  word.style.transitionDelay = `${index * 40}ms`;
  
  return word;
}

const addWord1 = (text, index) => subtitle1.appendChild(createWord1(text, index));

const createSubtitle1 = text => text.split(" ").map(addWord1);

createSubtitle1("A song by one of our favorite artists, Keshi.");


// music card2
const subtitle2 = document.getElementsByClassName("card-subtitle2")[0];

const createWord2 = (text, index) => {
  const word = document.createElement("span");
  
  word.innerHTML = `${text} `;
  
  word.classList.add("card-subtitle-word2");
  
  word.style.transitionDelay = `${index * 40}ms`;
  
  return word;
}

const addWord2 = (text, index) => subtitle2.appendChild(createWord2(text, index));

const createSubtitle2 = text => text.split(" ").map(addWord2);

createSubtitle2("The only song we tried to play on the piano together.");


// music card3
const subtitle3 = document.getElementsByClassName("card-subtitle3")[0];

const createWord3 = (text, index) => {
  const word = document.createElement("span");
  
  word.innerHTML = `${text} `;
  
  word.classList.add("card-subtitle-word3");
  
  word.style.transitionDelay = `${index * 40}ms`;
  
  return word;
}

const addWord3 = (text, index) => subtitle3.appendChild(createWord3(text, index));

const createSubtitle3 = text => text.split(" ").map(addWord3);

createSubtitle3("The very first song in our f****** playlist.");