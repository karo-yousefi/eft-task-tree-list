const settingOneButton = document.getElementById("setting-one");
const settingOneIcon = document.getElementById("setting-one-icon");
let settingOne = false;

const settingTwoButton = document.getElementById("setting-two");
const settingTwoIcon = document.getElementById("setting-two-icon");
let settingTwo = false;

const settingThreeButton = document.getElementById("setting-three");
const settingThreeIcon = document.getElementById("setting-three-icon");
let settingThree = false;

const taskBoxIconOne = document.getElementById("icon-one");
const taskBoxIconTwo = document.getElementById("icon-two");
const taskBoxIconThree = document.getElementById("icon-three");


function settingTurnOn(button){
    if(button === 0){
        if(settingOne === true){
            settingOneIcon.style.color = "white";
            settingOneIcon.style.textDecoration = "none";
            // Diactivating the function needed for setting one HERE
            taskBoxIconOne.style.opacity = "0";
            settingOne = false;
        }
        else{
            settingOneIcon.style.color = "lime"
            settingOneIcon.style.textDecoration = "underline";
            // Activating the function needed for setting one HERE
            taskBoxIconOne.style.opacity = "1";
            settingOne = true;
        }

    }
    else if (button === 1){
        if(settingTwo === true){
            settingTwoIcon.style.color = "white";
            settingTwoIcon.style.textDecoration = "none";
            // Diacptivating the function needed for setting two HERE
            taskBoxIconTwo.style.opacity = 0;
            settingTwo = false;
        }
        else{
            settingTwoIcon.style.color = "red"
            settingTwoIcon.style.textDecoration = "underline";
            // Activating the function needed for setting two HERE
            taskBoxIconTwo.style.opacity = 1;
            settingTwo = true;
        }
    }
    else if (button === 2){
        if(settingThree === true){
            settingThreeIcon.style.color = "white";
            settingThreeIcon.style.textDecoration = "none";
            // Diacptivating the function needed for setting two HERE
            taskBoxIconThree.style.opacity = 0;
            settingThree = false;
        }
        else{
            settingThreeIcon.style.color = "yellow"
            settingThreeIcon.style.textDecoration = "underline";
            // Activating the function needed for setting two HERE
            taskBoxIconThree.style.opacity = 1;
            settingThree = true;
        }
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

settingOneButton.addEventListener("click", () => settingTurnOn(0));
settingTwoButton.addEventListener("click", () => settingTurnOn(1));
settingThreeButton.addEventListener("click", () => settingTurnOn(2));


