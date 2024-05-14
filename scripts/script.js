const settingOneButton = document.getElementById("setting-one");
const settingOneIcon = document.getElementById("setting-one-icon");
let settingOne = false;

const settingTwoButton = document.getElementById("setting-two");
const settingTwoIcon = document.getElementById("setting-two-icon");
let settingTwo = false;


function settingOneTurnOn(){
    if(settingOne === true){
        settingOneIcon.style.color = "white";
        settingOne = false;
    }
    else{
        settingOneIcon.style.color = "lime"
        settingOne = true;
    }
}


function settingTwoTurnOn(){
    if(settingTwo === true){
        settingTwoIcon.style.color = "white";
        settingTwo = false;
    }
    else{
        settingTwoIcon.style.color = "red"
        settingTwo = true;
    }
}

settingOneButton.addEventListener("click", settingOneTurnOn);
settingTwoButton.addEventListener("click", settingTwoTurnOn);

