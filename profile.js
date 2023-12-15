let playButton = document.querySelector(".playbutton");  //Accessing play button from html.

function mouseoverColor(){                        //This function changes color when cursor is on the button. 
    playButton.style.backgroundColor = "rgb(238, 44, 44)";
    playButton.style.color = "white";
    playButton.style.border = "5px solid white";
}

function mouseoutColor(){             //This function changes color when cursor is not on the button. 
    playButton.style.backgroundColor = "rgb(243, 175, 1)";
}

playButton.addEventListener("mouseover",mouseoverColor);   //adding event listeners to play button and calling the functions.
playButton.addEventListener("mouseout",mouseoutColor);
playButton.addEventListener("click",savingProcess);
playButton.addEventListener("click",conditions);

let nameInput = document.getElementById("name");
let nicknameInput = document.getElementById("nickname");

function savingProcess(){
    localStorage.setItem("input1",nameInput.value);      //Saving the two inputs in local storege.
    localStorage.setItem("input2",nicknameInput.value);
    console.log(nameInput.value)
    console.log(nicknameInput.value)
}
function conditions(){
    if(nameInput.value!="" && nicknameInput.value!=""){    //If the user gives input then only the page is switched.
        window.location.href = "./main.html"}
    else{
        alert("Please Login with details")    //or else the alert gives you a message to fill details.
    }
}