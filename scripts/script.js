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


const praporSlider = document.getElementById("prapor");
let isPraporMoving = false;
let praporStartPos = 0;

const therapistSlider = document.getElementById("therapist");
let isTherapistMoving = false;
let therapistStartPos = 0;

const fenceSlider = document.getElementById("fence");
let isFenceMoving = false;
let fenceStartPos = 0;

const skierSlider = document.getElementById("skier");
let isSkierMoving = false;
let skierStartPos = 0;

const peacekeeperSlider = document.getElementById("peacekeeper");
let isPeacekeeperMoving = false;
let peacekeeperStartPos = 0;

const mechanicSlider = document.getElementById("mechanic");
let isMechanicMoving = false;
let mechanicStartPos = 0;

const ragmanSlider = document.getElementById("ragman");
let isRagmanMoving = false;
let ragmanStartPos = 0;

const jaegerSlider = document.getElementById("jaeger");
let isJaegerMoving = false;
let jaegerStartPos = 0;



fetch("/git/eft-task-tree-list/assets/taskList.json")
    .then(response => response.json())
    .then(data => {
        // Work with the JSON data here
        console.log(data);
    })
    .catch(error => console.error('Error fetching JSON:', error));



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


// This is a very stupid way to do this but till now I don't know a btter way to do it, Will be updated hopefully

// =================== Prapor


function praporStart(e){
    isPraporMoving = true;
    praporStartPos = e.clientX - praporSlider.offsetLeft;
}

function praporMove(e){
    if(isPraporMoving){
        let praporEndPos = e.clientX - praporStartPos;
        if(praporEndPos<0){
            praporSlider.style.left = praporEndPos + "px";
        }
    }
}

function praporStop(e){
    isPraporMoving = false;
}

// =================== Therapist

function therapistStart(e){
    isTherapistMoving = true;
    therapistStartPos = e.clientX - therapistSlider.offsetLeft;
}

function therapistMove(e){
    if(isTherapistMoving){
        let therapistEndPos = e.clientX - therapistStartPos;
        if(therapistEndPos<0){
            therapistSlider.style.left = therapistEndPos + "px";
        }
    }
}

function therapistStop(e){
    isTherapistMoving = false;
}

// =================== Fence

function fenceStart(e){
    isFenceMoving = true;
    fenceStartPos = e.clientX - fenceSlider.offsetLeft;
}

function fenceMove(e){
    if(isFenceMoving){
        let fenceEndPos = e.clientX - fenceStartPos;
        if(fenceEndPos<0){
            fenceSlider.style.left = fenceEndPos + "px";
        }
    }
}

function fenceStop(e){
    isFenceMoving = false;
}

// =================== Skier

function skierStart(e){
    isSkierMoving = true;
    skierStartPos = e.clientX - skierSlider.offsetLeft;
}

function skierMove(e){
    if(isSkierMoving){
        let skierEndPos = e.clientX - skierStartPos;
        if(skierEndPos<0){
            skierSlider.style.left = skierEndPos + "px";
        }
    }
}

function skierStop(e){
    isSkierMoving = false;
}

// =================== Peacekeeper

function peacekeeperStart(e){
    isPeacekeeperMoving = true;
    peacekeeperStartPos = e.clientX - peacekeeperSlider.offsetLeft;
}

function peacekeeperMove(e){
    if(isPeacekeeperMoving){
        let peacekeeperEndPos = e.clientX - peacekeeperStartPos;
        if(peacekeeperEndPos<0){
            peacekeeperSlider.style.left = peacekeeperEndPos + "px";
        }
    }
}

function peacekeeperStop(e){
    isPeacekeeperMoving = false;
}

// =================== Mechanic

function mechanicStart(e){
    isMechanicMoving = true;
    mechanicStartPos = e.clientX - mechanicSlider.offsetLeft;
}

function mechanicMove(e){
    if(isMechanicMoving){
        let mechanicEndPos = e.clientX - mechanicStartPos;
        if(mechanicEndPos<0){
            mechanicSlider.style.left = mechanicEndPos + "px";
        }
    }
}

function mechanicStop(e){
    isMechanicMoving = false;
}

// =================== Ragman

function ragmanStart(e){
    isRagmanMoving = true;
    ragmanStartPos = e.clientX - ragmanSlider.offsetLeft;
}

function ragmanMove(e){
    if(isRagmanMoving){
        let ragmanEndPos = e.clientX - ragmanStartPos;
        if(ragmanEndPos<0){
            ragmanSlider.style.left = ragmanEndPos + "px";
        }
    }
}

function ragmanStop(e){
    isRagmanMoving = false;
}

// =================== jeager

function jaegerStart(e){
    isJaegerMoving = true;
    jaegerStartPos = e.clientX - jaegerSlider.offsetLeft;
}

function jaegerMove(e){
    if(isJaegerMoving){
        let jaegerEndPos = e.clientX - jaegerStartPos;
        if(jaegerEndPos<0){
            jaegerSlider.style.left = jaegerEndPos + "px";
        }
    }
}

function jaegerStop(e){
    isJaegerMoving = false;
}

// ===================


settingOneButton.addEventListener("click", () => settingTurnOn(0));
settingTwoButton.addEventListener("click", () => settingTurnOn(1));
settingThreeButton.addEventListener("click", () => settingTurnOn(2));


document.addEventListener("mousedown", praporStart);
praporSlider.addEventListener("mousemove", praporMove);
document.addEventListener("mouseup", praporStop);

document.addEventListener("mousedown", therapistStart);
therapistSlider.addEventListener("mousemove", therapistMove);
document.addEventListener("mouseup", therapistStop);

document.addEventListener("mousedown", fenceStart);
fenceSlider.addEventListener("mousemove", fenceMove);
document.addEventListener("mouseup", fenceStop);

document.addEventListener("mousedown", skierStart);
skierSlider.addEventListener("mousemove", skierMove);
document.addEventListener("mouseup", skierStop);

document.addEventListener("mousedown", peacekeeperStart);
peacekeeperSlider.addEventListener("mousemove", peacekeeperMove);
document.addEventListener("mouseup", peacekeeperStop);

document.addEventListener("mousedown", mechanicStart);
mechanicSlider.addEventListener("mousemove", mechanicMove);
document.addEventListener("mouseup", mechanicStop);

document.addEventListener("mousedown", ragmanStart);
ragmanSlider.addEventListener("mousemove", ragmanMove);
document.addEventListener("mouseup", ragmanStop);

document.addEventListener("mousedown", jaegerStart);
jaegerSlider.addEventListener("mousemove", jaegerMove);
document.addEventListener("mouseup", jaegerStop);