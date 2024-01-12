// welcome text effect + the scroll down thing logic
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

// mouse pointer blob logic
document.body.onpointermove = event => {
  const { clientX, clientY } = event;

  blob.animate({
    left: `${clientX}px`,
    top: `${clientY}px`
  }, { duration: 3000, fill: "forwards" });
}

// img track logic
window.addEventListener('scroll', () => {
	const scrollable = document.documentElement.scrollHeight - window.innerHeight
	const scrolled = window.scrollY;
	console.log(scrolled)
});


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

// slides logic   

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
// const love = document.querySelector(".activation");

// love.onmouseenter = () => {
// var r = document.querySelector(':root');


// // Create a function for setting a variable value

//   r.style.setProperty('--red', '#cc0000');
//   r.style.setProperty('--darkPink', '#ff4d4d');
//   r.style.setProperty('--pink', '#ff8080');
//   r.style.setProperty('--fourDefaultBg', 'white')
// }

// love.onmouseleave = onMouseLeave = () => {
//   var r = document.querySelector(':root');
  
//   r.style.setProperty('--red', 'white');
//   r.style.setProperty('--darkPink', 'white');
//   r.style.setProperty('--pink', 'white');
//   r.style.setProperty('--fourDefaultBg', '#393631')
// }

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

createSubtitle1("Java\n Python\n HTML\n    CSS\n JavaScript\n R     \nEnglish");


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

createSubtitle2("Firebase\n Git\n    GitHub\n Flask\n   JUnit\n    SQLite\n    Shiny");


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

createSubtitle3("Snowboarding\n Guitar\n Drums\n Mechanical- Keyboards\n Reading");


// card1 text color change option (it doesnt actually work but if I ever wanna implement this i will work on it so im keeping this here lol)

// const cardText = document.querySelector(".card1");

// cardText.onmouseenter = () => {
// var c1 = document.querySelector(':root');

//   c1.style.setProperty('--c1Text', 'black');
// }

// cardText.onmouseleave = onMouseLeave = () => {
//   var c1 = document.querySelector(':root');
  
//   c1.style.setProperty('--c1Text', 'white');
// }


// modal work for welcome
document.getElementById("mainWel").style.cursor = "pointer";

document.getElementById("mainWel").addEventListener("click",function(){
  document.getElementById("mainWel").style.display = "none";
  document.getElementsByClassName("popup")[0].classList.add("active");
});
 
document.getElementById("dismiss-popup-btn").addEventListener("click",function(){
  document.getElementById("mainWel").style.display = "block";
  document.getElementsByClassName("popup")[0].classList.remove("active");
});
// modal work ends



	




// github style
const link = document.querySelector(".myLink");

link.onmouseenter = () => {
var r1 = document.querySelector(':root');

//   sunset variation
  // r1.style.setProperty('--red1', '#fce38a');
  // r1.style.setProperty('--darkPink1', '#fc8181');
  // r1.style.setProperty('--pink1', '#ff8080');

// default variation
r1.style.setProperty('--red1', 'mediumpurple');
r1.style.setProperty('--darkPink1', 'white');
r1.style.setProperty('--pink1', 'mediumslateblue');

r1.style.setProperty('--pc1', 'mediumpurple');
r1.style.setProperty('--pc2', 'white');
r1.style.setProperty('--pc3', 'mediumslateblue');

  r1.style.setProperty('--fourDefaultBg', 'white')
  r1.style.setProperty('--pss', '4.5rem')

}

link.onmouseleave = onMouseLeave = () => {
  var r1 = document.querySelector(':root');

  r1.style.setProperty('--red1', 'white');
  r1.style.setProperty('--darkPink1', 'white');
  r1.style.setProperty('--pink1', 'white');

  r1.style.setProperty('--pc1', 'white');
  r1.style.setProperty('--pc2', 'white');
  r1.style.setProperty('--pc3', 'white');

  r1.style.setProperty('--fourDefaultBg', '#393631')
  r1.style.setProperty('--pss', '4rem')

}


link.onmousedown = () => {
	var r1 = document.querySelector(':root');

	r1.style.setProperty('--red1', 'white');
	r1.style.setProperty('--darkPink1', 'white');
	r1.style.setProperty('--pink1', 'white');

  r1.style.setProperty('--pc1', 'white');
  r1.style.setProperty('--pc2', 'white');
  r1.style.setProperty('--pc3', 'white');

	r1.style.setProperty('--fourDefaultBg', '#393631')
	r1.style.setProperty('--pss', '4rem')
  
  }


  // linkedin style

  const link1 = document.querySelector(".myLink1");

  link1.onmouseenter = () => {
  var r2 = document.querySelector(':root');
  
  //   sunset variation
    // r2.style.setProperty('--red1', '#fce38a');
    // r2.style.setProperty('--darkPink1', '#fc8181');
    // r2.style.setProperty('--pink1', '#ff8080');
  
    // default variation
    r2.style.setProperty('--white1', 'white');
    r2.style.setProperty('--lightBlue1', '#00A0DC');
    r2.style.setProperty('--blue1', '#0077B5');

    r2.style.setProperty('--pc1', 'white');
    r2.style.setProperty('--pc2', '#00A0DC');
    r2.style.setProperty('--pc3', '#0077B5');
  
    r2.style.setProperty('--fourDefaultBg', 'white')
    r2.style.setProperty('--pss1', '4.5rem')
  
  }
  
  link1.onmouseleave = onMouseLeave = () => {
    var r2 = document.querySelector(':root');
  
    r2.style.setProperty('--white1', 'white');
    r2.style.setProperty('--lightBlue1', 'white');
    r2.style.setProperty('--blue1', 'white');

    r2.style.setProperty('--pc1', 'white');
    r2.style.setProperty('--pc2', 'white');
    r2.style.setProperty('--pc3', 'white');

    r2.style.setProperty('--fourDefaultBg', '#393631')
    r2.style.setProperty('--pss1', '4rem')
  
  }
  
  
  link1.onmousedown = () => {
    var r2 = document.querySelector(':root');
  
    r2.style.setProperty('--white1', 'white');
    r2.style.setProperty('--lightBlue1', 'white');
    r2.style.setProperty('--blue1', 'white');

    r2.style.setProperty('--pc1', 'white');
    r2.style.setProperty('--pc2', 'white');
    r2.style.setProperty('--pc3', 'white');

    r2.style.setProperty('--fourDefaultBg', '#393631')
    r2.style.setProperty('--pss1', '4rem')
    
    }
  


    // email style

    const link2 = document.querySelector(".myLink2");

    link2.onmouseenter = () => {
    var r3 = document.querySelector(':root');
    
    //   sunset variation
      // r3.style.setProperty('--red1', '#fce38a');
      // r3.style.setProperty('--darkPink1', '#fc8181');
      // r3.style.setProperty('--pink1', '#ff8080');
    
      // default variation
      r3.style.setProperty('--white2', 'white');
      r3.style.setProperty('--lightRed1', '#D44638');
      r3.style.setProperty('--realRed1', '#B23121');
  
      r3.style.setProperty('--pc1', 'white');
      r3.style.setProperty('--pc2', '#D44638');
      r3.style.setProperty('--pc3', '#B23121');
    
      r3.style.setProperty('--fourDefaultBg', 'white')
      r3.style.setProperty('--pss2', '4.5rem')
    
    }
    
    link2.onmouseleave = onMouseLeave = () => {
      var r3 = document.querySelector(':root');
    
      r3.style.setProperty('--white2', 'white');
      r3.style.setProperty('--lightRed1', 'white');
      r3.style.setProperty('--realRed1', 'white');
  
      r3.style.setProperty('--pc1', 'white');
      r3.style.setProperty('--pc2', 'white');
      r3.style.setProperty('--pc3', 'white');
  
      r3.style.setProperty('--fourDefaultBg', '#393631')
      r3.style.setProperty('--pss2', '4rem')
    
    }
    
    
    link2.onmousedown = () => {
      var r3 = document.querySelector(':root');
    
      r2.style.setProperty('--white2', 'white');
      r2.style.setProperty('--lightRed1', 'white');
      r2.style.setProperty('--realRed1', 'white');
  
      r3.style.setProperty('--pc1', 'white');
      r3.style.setProperty('--pc2', 'white');
      r3.style.setProperty('--pc3', 'white');
  
      r3.style.setProperty('--fourDefaultBg', '#393631')
      r3.style.setProperty('--pss2', '4rem')
      
      }
    