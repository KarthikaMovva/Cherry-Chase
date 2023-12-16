const volumebtn = document.getElementById("volumebtn");
const music = document.getElementById("music");
var letsplayMusic = false;
//Background music on and off using if and else conditions.
volumebtn.addEventListener("click", () => {   //Adding click event listner to volume button.
  if(letsplayMusic==true){
    music.pause()  //Pausing the background music.
    letsplayMusic = false;
    volumebtn.src = "./mute.png";    //Changing the display of volume symbol to mute symbol.
  }
  else{
  music.play()
    letsplayMusic = true;
    volumebtn.src = "./volume-removebg-preview.png";  //Changing the display of mute symbol to volume symbol.
  }});

let startButton = document.getElementsByClassName("startbutton")[0]; //Accessing the strat nad shuffle buttons.
let shuffleButton = document.querySelector(".shufflebutton");


function mouseoverColor(){    //Creating a function to change the color of start button when cursor is on the start button.
  startButton.style.backgroundColor = "rgb(238, 44, 44)";
  startButton.style.color = "white";
  startButton.style.border = "5px solid white";
}

function mouseoutColor(){     //Creating a function to change the color of start button when cursor is not on the start button.
  startButton.style.backgroundColor = "white";
  startButton.style.color = "black";
}

function disablingBaskets(){      // this function removes functionality of baskets.
  basket1.style.pointerEvents = 'none'
  basket2.style.pointerEvents = 'none'
  basket3.style.pointerEvents = 'none'
  basket4.style.pointerEvents = 'none'
}

startButton.addEventListener("click", birdFlyFunction);   //adding event listners to start button and calling the functions.
startButton.addEventListener("click", noStartbutton);
startButton.addEventListener("click", changeInstruction1);
startButton.addEventListener("click", displayShufflebutton);
startButton.addEventListener("mouseover",mouseoverColor);
startButton.addEventListener("mouseout",mouseoutColor);
startButton.addEventListener("click",disablingBaskets);

function displayShufflebutton() {
  shuffleButton.style.display = "block";  //This function displays shuffle button.
}

let bird = document.querySelector(".bird");   //Accessing bird and cherry images.
let cherry = document.querySelector(".cherry");

function noStartbutton() {
  startButton.style.display = "none";  //This function changes start button display to none.
}

function changeInstruction1() {
  let editInstruction = document.querySelector(".instruction");  //This button changes the instructions.
  editInstruction.innerHTML =
    "Keep a eye on cherry basket and click shuffle button to shuffle baskets.";
}

function birdFlyFunction() {             //This function activates the animation of bird and cherry.
  bird.style.animation = "fly 3s linear";

  setTimeout(function cherryVisible() {
    cherry.style.visibility = "visible";
    cherry.style.animation = "drop 1s linear";
  }, 2000);
  cherry.addEventListener("animationend", function () {
    cherry.style.visibility = "hidden";
  });
}

let basket1 = document.querySelector(".option1"); //Accessing basket1 and basket4.
let basket4 = document.querySelector(".option4");

function swapBaskets1() {                  //This function adds the class basket1-moves and basket4-moves to activate the animation and also removes the class when animation is performed for one time.
  basket1.classList.add("basket1-moves"); 
  basket4.classList.add("basket4-moves");
  console.log("I am start");

  basket1.addEventListener("animationiteration", () => {
      basket1.style.left = "200px";
      basket1.classList.remove("basket1-moves"); 
      console.log("I am start inside if1");
  })
  
basket4.addEventListener("animationiteration", () => {
      basket4.style.right = "100px";
      basket4.classList.remove("basket4-moves");
    
  })}

  let basket2 = document.querySelector(".option2");
  let basket3 = document.querySelector(".option3");

function swapmiddleBakets() {            //This function is called to perform animations for basket2 and basket3.
  basket2.style.animation = "swap 1s forwards";
  basket3.style.animation = "swapReverse 1s forwards";
  console.log("I am middle");
}

function changeInstruction2() {     //This function is called to change the instruction.
  let editInstruction = document.querySelector(".instruction");
  editInstruction.innerHTML =
    "Guess the basket which contains cherry and click on it.";
}        

function noshuffleButton() {     //This function changes the display of shuffle button to none.
  shuffleButton.style.display = "none";
}

function mouseoverColor1(){       //This function changes the color of shuffle button when cursor is on the button.
  shuffleButton.style.backgroundColor = "rgb(238, 44, 44)";
  shuffleButton.style.color = "white";
  shuffleButton.style.border = "5px solid white";
}

function mouseoutColor1(){     //This function chages the color of shuffle button when cursor is not on the button.
  shuffleButton.style.backgroundColor = "white";
  shuffleButton.style.color = "black";
}

function functionalBaskets(){         //This function adds functionality to four baskets.
  basket1.style.pointerEvents = "auto";
  basket2.style.pointerEvents = "auto";
  basket3.style.pointerEvents = "auto";
  basket4.style.pointerEvents = "auto";
}

shuffleButton.addEventListener("click", swapmiddleBakets);   //Adding event listners to shuffle button and calling the functions.
shuffleButton.addEventListener("click", swapBaskets1);
shuffleButton.addEventListener("click", changeInstruction2);
shuffleButton.addEventListener("click", noshuffleButton);
shuffleButton.addEventListener("mouseover",mouseoverColor1);
shuffleButton.addEventListener("mouseout",mouseoutColor1);
shuffleButton.addEventListener("click",functionalBaskets);

let winningBasket = document.getElementById("select");   
let baskets = document.querySelectorAll(".baskets");
let secondPlacebasket1 = document.getElementById("second1");
let secondPlacebasket2 = document.getElementById("second2");



for (let j = 0; j < 4; j++) {            //Runing a for loop to change the index of basket and add event listner to all the baskets.
  
  baskets[j].addEventListener("click", function resultsShown() {
  
    if (baskets[j].id == winningBasket.id) {     //If the clicked basket is equal to wining basket id then if condition is considered.
   
      window.location.href = "./last.html";    //Switching the page to result page.
      localStorage.setItem(
        "status",                             //Storing the result in loacal storge.
        "Wow!! You have cherry on your cake.You found the cherry."
      );
      localStorage.setItem("score","50")   //Storing the score in local storage.
    }
    else if(baskets[j].id == secondPlacebasket1.id) {
        window.location.href = "./last.html";
        localStorage.setItem("status","Oops! You did not have cherry on your cake.You lost the cherry.")
        localStorage.setItem("score","30")
    }
    else if(baskets[j].id == secondPlacebasket2.id) {
      window.location.href = "./last.html";
      localStorage.setItem("status","Oops! You did not have cherry on your cake.You lost the cherry.")
      localStorage.setItem("score","30")
  }
    else{
        window.location.href = "./last.html";
        localStorage.setItem("status","Oops! You did not have cherry on your cake.You lost the cherry.")
        localStorage.setItem("score","10")
    }
  });
}



