// ---------------------------------------- SLIDER ----------------------------------------
var inputRange = document.getElementsByClassName('pullee')[0],
    maxValue = 150, // the higher the smoother when dragging
    speed = 12, // thanks to @pixelass for this
    currValue, rafID;

// set min/max value
inputRange.min = 0;
inputRange.max = maxValue;

// listen for unlock
function unlockStartHandler() {
    // clear raf if trying again
    window.cancelAnimationFrame(rafID);
    
    // set to desired value
    currValue = +this.value;
}

function unlockEndHandler() {
    
    // store current value
    currValue = +this.value;
    
    // determine if we have reached success or not
    if(currValue >= maxValue) {
        successHandler();
    }
    else {
        rafID = window.requestAnimationFrame(animateHandler);
    }
}

// handle range animation
function animateHandler() {
    
    // update input range
    inputRange.value = currValue;
    
    // determine if we need to continue
    if(currValue > -1) {
    	window.requestAnimationFrame(animateHandler);   
    }
    
    // decrement value
    currValue = currValue - speed;
}

// handle successful unlock
function successHandler() {
    var name = window.prompt("What is your name?");
    alert('You have passed the test. Welcome to Aurore Vihalla, ' + name + '! ' + 'Where aspiring wizards learn how to interact, play, and tame magical creatures.');
    document.getElementById("index").style.display="block"; 
    document.getElementById("land").style.display="none"; 
    
    // reset input range
    inputRange.value = 0;
};

// bind events
inputRange.addEventListener('mousedown', unlockStartHandler, false);
inputRange.addEventListener('mousestart', unlockStartHandler, false);
inputRange.addEventListener('mouseup', unlockEndHandler, false);
inputRange.addEventListener('touchend', unlockEndHandler, false);

// ---------------------------------------- END OF SLIDER ----------------------------------------

// ---------------------------------------- THEME ----------------------------------------
const themeMap = {
    dark: "light",
    light: "solar",
    solar: "dark"
  };
  
  const theme = localStorage.getItem('theme')
    || (tmp = Object.keys(themeMap)[0],
        localStorage.setItem('theme', tmp),
        tmp);
  const bodyClass = document.body.classList;
  bodyClass.add(theme);
  
  function toggleTheme() {
    const current = localStorage.getItem('theme');
    const next = themeMap[current];
  
    bodyClass.replace(current, next);
    localStorage.setItem('theme', next);
  }
  
  document.getElementById('themeButton').onclick = toggleTheme;
// ---------------------------------------- END OF THEME ----------------------------------------

// ---------------------------------------- FUNCTIONALITIES ----------------------------------------

  function appearAbout() { 
    document.getElementById("appearAbout").style.display="block"; 
    document.getElementById("appearWho").style.display="none"; 
    document.getElementById("appearGame").style.display="none"; 
    document.getElementById("home").style.display="none";

  }

  function appearWho() { 
    document.getElementById("appearWho").style.display="block"; 
    document.getElementById("appearAbout").style.display="none"; 
    document.getElementById("appearGame").style.display="none"; 
    document.getElementById("home").style.display="none";
  }

  function appearGame() { 
    document.getElementById("appearGame").style.display="block"; 
    document.getElementById("appearAbout").style.display="none"; 
    document.getElementById("appearWho").style.display="none"; 
    document.getElementById("home").style.display="none";
  }

  function home() {
    document.getElementById("home").style.display="block";
    document.getElementById("appearWho").style.display="none"; 
    document.getElementById("appearAbout").style.display="none"; 
    document.getElementById("appearGame").style.display="none"; 
  }

// ---------------------------------------- END OF FUNCTIONALITIES ----------------------------------------
