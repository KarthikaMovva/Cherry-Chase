let loginButton = document.querySelector(".loginbutton");  //accessing login button.

function mouseoverColor(){                                 //This function is to change styling of login button when cursor is over the login button.
    loginButton.style.backgroundColor = "rgb(238, 44, 44)";
    loginButton.style.color = "white";
    loginButton.style.border = "5px solid white";
}

function mouseoutColor(){                                   //This function is to change styling of login button when cursor is not on the the login button.
    loginButton.style.backgroundColor = "rgb(243, 175, 1)";
}

function displayMainpage(){                 //This function is to switch the page from index to profile page. 
    window.location.href = "./profile.html";
}

loginButton.addEventListener("click",displayMainpage);   //adding event listners to login button and calling the functions.
loginButton.addEventListener("mouseover",mouseoverColor);
loginButton.addEventListener("mouseout",mouseoutColor);


const volumebtn = document.getElementById("volumebtn"); //Accessing the volume button from html.
const loader = document.getElementById("loader"); //Accessing the loader from html.
const music = document.getElementById("music");  //Accessing the audio tag from html.
var letsplayMusic = false;                     //Creating letsplayMusic variable and assigning the boolean value to variable. This helps in finding the music is either playing or in pause.

volumebtn.addEventListener("click", () => {   //Adding click event listner to volume button.
  if(letsplayMusic==true){     //if the boolean value of letsplayMusic is true then it indicates music is present playing.
    music.pause()             //Present music is playing. So, we will pause the music on click.
    letsplayMusic = false;    //Changing the boolean value to false. because, now music is in pause.
    volumebtn.src = "./mute.png"  //Changing the display of volume symbol to mute symbol.
  }
  else{                          //if the boolean value of letsplayMusic is false then it indicates music is in pause.
  music.play().then(() => {      //Starts to play music while playing music the arrow fuction is called.
  
    loader.style.display = "none";   //If the music is loading then it will display loading text.So, to avoid it we are assigning a style to display none.
    letsplayMusic = true;            //Changing the boolean value to true. because, now music is playing.
    volumebtn.src = "./volume-removebg-preview.png"   //Changing the display of mute symbol to volume symbol.

  }
  )};
});