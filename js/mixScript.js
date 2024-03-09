// welcome text effect + the scroll down thing logic
const track = document.getElementById("image-track");
const blob = document.getElementById("blob");

const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const enhance = id => {
  const element = document.getElementById(id),
        text = element.innerText.split("");
  
  element.innerText = "";
  
  text.forEach((value, index) => {
    const outer = document.createElement("span");
    
    outer.className = "outer";
    
    const inner = document.createElement("span");
    
    inner.className = "inner";
    
    inner.style.animationDelay = `${rand(-5000, 0)}ms`;
    
    const letter = document.createElement("span");
    
    letter.className = "letter";
    
    letter.innerText = value;
    
    letter.style.animationDelay = `${index * 1000 }ms`;
    
    inner.appendChild(letter);    
    
    outer.appendChild(inner);    
    
    element.appendChild(outer);
  });
}

enhance("my-name");

// mouse pointer blob logic
document.body.onpointermove = event => {
  const { clientX, clientY } = event;

  blob.animate({
    left: `${clientX}px`,
    top: `${clientY}px`
  }, { duration: 3000, fill: "forwards" });
}

// img track logic


// window.addEventListener('scroll', () => {
// 	const scrollable = document.documentElement.scrollHeight - window.innerHeight
// 	const scrolled = window.scrollY;
// 	console.log(scrolled)
// });


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

createSubtitle1("Java\n Python\n JavaScript\n R     \nEnglish");


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

createSubtitle2("Firebase\n Git\n    GitHub\n Flask\n   JUnit\n    SQLite\n    Selenium Shiny");


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

createSubtitle3("Snowboarding\n Guitar\n Drums\n Mechanical- Keyboards\n Reading\n Video-Editing");



// modal work for welcome

document.getElementById("mainWel").addEventListener("click",function(){
  document.getElementById("mainWel").style = "pointer-events: none; background-color: rgba(0,0,0,0); color: white; transform: scale(60); transition: 1372ms ease;";
  document.getElementsByClassName("popup2")[0].classList.remove("active");
  
  setTimeout(function(){
    document.getElementById("mainWel").style.display = "none";
    document.getElementsByClassName("popup")[0].classList.add("active");
  },500)


});
 
document.getElementById("dismiss-popup-btn").addEventListener("click",function(){
  document.getElementById("mainWel").style = "background-color: rgba(0,0,0,0); color: white; transform: scale(1); transition: 1250ms ease;";
  document.getElementById("mainWel").style.display = "block";
  document.getElementsByClassName("popup")[0].classList.remove("active");
});
// modal work ends



	// modal work for page menu
document.getElementsByClassName("popup2")[0].classList.add("active");


// modal work ends




// github style
const link = document.querySelector(".myLink");

link.onmouseenter = () => {
  var r1 = document.querySelector(':root');

  // default variation
  r1.style.setProperty('--red1', 'mediumpurple');
  r1.style.setProperty('--darkPink1', 'white');
  r1.style.setProperty('--pink1', 'mediumslateblue');

  r1.style.setProperty('--pc1', 'mediumpurple');
  r1.style.setProperty('--pc2', 'white');
  r1.style.setProperty('--pc3', 'mediumslateblue');

  // r1.style.setProperty('--pss', '4.5rem')

}

link.onmouseleave = onMouseLeave = () => {
  var r1 = document.querySelector(':root');

  r1.style.setProperty('--red1', 'white');
  r1.style.setProperty('--darkPink1', 'white');
  r1.style.setProperty('--pink1', 'white');

  r1.style.setProperty('--pc1', 'white');
  r1.style.setProperty('--pc2', 'white');
  r1.style.setProperty('--pc3', 'white');

  // r1.style.setProperty('--pss', '4rem')

}


link.onmousedown = () => {
	var r1 = document.querySelector(':root');

	r1.style.setProperty('--red1', 'white');
	r1.style.setProperty('--darkPink1', 'white');
	r1.style.setProperty('--pink1', 'white');

  r1.style.setProperty('--pc1', 'white');
  r1.style.setProperty('--pc2', 'white');
  r1.style.setProperty('--pc3', 'white');

	// r1.style.setProperty('--pss', '4rem')
  
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

  // r2.style.setProperty('--pss1', '4.5rem')

}

link1.onmouseleave = onMouseLeave = () => {
  var r2 = document.querySelector(':root');

  r2.style.setProperty('--white1', 'white');
  r2.style.setProperty('--lightBlue1', 'white');
  r2.style.setProperty('--blue1', 'white');

  r2.style.setProperty('--pc1', 'white');
  r2.style.setProperty('--pc2', 'white');
  r2.style.setProperty('--pc3', 'white');

  // r2.style.setProperty('--pss1', '4rem')

}


link1.onmousedown = () => {
  var r2 = document.querySelector(':root');

  r2.style.setProperty('--white1', 'white');
  r2.style.setProperty('--lightBlue1', 'white');
  r2.style.setProperty('--blue1', 'white');

  r2.style.setProperty('--pc1', 'white');
  r2.style.setProperty('--pc2', 'white');
  r2.style.setProperty('--pc3', 'white');

  // r2.style.setProperty('--pss1', '4rem')
  
}



// email style

const link2 = document.querySelector(".myLink2");

link2.onmouseenter = () => {
  var r3 = document.querySelector(':root');


  // default variation
  r3.style.setProperty('--white2', 'white');
  r3.style.setProperty('--lightRed1', '#D44638');
  r3.style.setProperty('--realRed1', '#B23121');

  r3.style.setProperty('--pc1', 'white');
  r3.style.setProperty('--pc2', '#D44638');
  r3.style.setProperty('--pc3', '#B23121');

  // r3.style.setProperty('--pss2', '4.5rem')

}

link2.onmouseleave = onMouseLeave = () => {
  var r3 = document.querySelector(':root');

  r3.style.setProperty('--white2', 'white');
  r3.style.setProperty('--lightRed1', 'white');
  r3.style.setProperty('--realRed1', 'white');

  r3.style.setProperty('--pc1', 'white');
  r3.style.setProperty('--pc2', 'white');
  r3.style.setProperty('--pc3', 'white');

  // r3.style.setProperty('--pss2', '4rem')

}


link2.onmousedown = () => {
  var r3 = document.querySelector(':root');

  r2.style.setProperty('--white2', 'white');
  r2.style.setProperty('--lightRed1', 'white');
  r2.style.setProperty('--realRed1', 'white');

  r3.style.setProperty('--pc1', 'white');
  r3.style.setProperty('--pc2', 'white');
  r3.style.setProperty('--pc3', 'white');

  // r3.style.setProperty('--pss2', '4rem')
  
}











