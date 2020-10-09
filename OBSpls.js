let config = {
    width: 3,
    height: 3,
    maxPls: 4, // DONT MAKE IT THE SAME NUMBER OF CELLS OR MORE, THANKS
    gifSize : 150,
    allowSafeGifMultipleTimes: true, // must be true for now
    pls : [
            "pls/RainbowPls.gif",
            "pls/BongoBlob.gif",
            "pls/chikaPls.gif"
        ]
};
let alphabet = "abcdefghijklmnopqrstuvwxyz";
let container = null;

$(document).ready(function(){
    container = document.getElementsByClassName("container")[0];
    choosePls();
});

function choosePls(){
    let numberOfPls = 1;
    if(config.allowSafeGifMultipleTimes){
        numberOfPls = getRandomInt(1, config.maxPls);
    }else{
        numberOfPls = getRandomInt(1, Math.min(config.pls.length ,config.maxPls));
    }
    console.log("number of Pls " + numberOfPls);
    let selectedPls = new Array();
    for(let i = 0; i < numberOfPls; i++){
        let pls = selectPls(numberOfPls, selectedPls);
        let position = selectPosition(selectedPls);
        selectedPls.push({ pls: pls, position: position});
    }
    selectedPls.forEach(element => {
        displayPls(element);
    });
    
    let delay = getRandomInt(3000, 10000);
    setTimeout( function(){
        container.innerHTML = "";
        choosePls();
    }, delay);
}
function selectPls(numberOfPls, selectedPls){
    let pls = getRandomInt(0, config.pls.length - 1);
    if(config.allowSafeGifMultipleTimes){
        return pls;
    }
    // TODO remove endless loop
    if(selectedPls.length === numberOfPls - 1){
        selectedPls.forEach(element => {
            if(element.pls !== pls){
                return pls;
            }
        });
    }
    let newPls = true;
    do{
        
        newPls = true;
        console.log("pls " + pls);
        selectedPls.forEach(element => {
            if(element.pls == pls){
                console.log("not a new pls");
                newPls = false;
            }
        });
        if(newPls === true){
            return pls;
        }
    }
    while(newPls != true);
}

function selectPosition(selectedPls){
    let maxPls = config.width * config.height;
    let newPosition = true;
    // TODO remove endless loop
    do{
        newPosition = true;
        let temp = alphabet[getRandomInt(0, maxPls - 1)];
        // console.log("letter " + temp);
        selectedPls.forEach(element => {
            if(element.position == temp){
                console.log("not a new position");
                newPosition = false;
            }
        });
        if(newPosition === true){
            return temp;
        }
    }
    while(newPosition != true);
}

function displayPls(pls){
    let imgPls = document.createElement("img");
    imgPls.src = config.pls[pls.pls];
    imgPls.classList.add("pls-gif");
    imgPls.style = "grid-area: " + pls.position + "; width:" + config.gifSize + "px";
    container.appendChild(imgPls);
}

function getRandomInt(min, max) {
    return Math.floor(min + Math.round(Math.random() * max));
}