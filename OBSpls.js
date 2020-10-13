
let alphabet = "abcdefghijklmnopqrstuvwxyz";
let container = null;

$(document).ready(function(){
    container = document.getElementsByClassName("container")[0];
    choosePls();
});

function choosePls(){
    let numberOfPls = 1;
    if(config.allowSameGifMultipleTimes){
        numberOfPls = getRandomInt(1, config.maxPls);
    }else{
        numberOfPls = getRandomInt(1, Math.min(config.pls.length, config.maxPls));
    }
    let selectedPls = new Array();
    for(let i = 0; i < numberOfPls; i++){
        let pls = selectPls(selectedPls);
        let position = selectPosition(selectedPls);
        selectedPls.push({ pls: pls, position: position});
    }
    selectedPls.forEach(element => {
        displayPls(element);
    });
    let delay = config.baseDelay;
    if(config.allowRandomizedDelay){
        let minimum = config.baseDelay - config.minimumDifference;
        let maximum = config.baseDelay + config.maximumDifference;
        delay = getRandomInt(minimum, maximum);
    }
    setTimeout( function(){
        container.innerHTML = "";
        choosePls();
    }, delay);
}

function selectPls(selectedPls){
    let pls = config.pls[getRandomInt(0, config.pls.length - 1)];
    if(config.allowSameGifMultipleTimes){
        return pls;
    }
    let possiblePls = Array.from(config.pls);
    let isPlsNew = true;
    do{
        isPlsNew = true;
        pls = possiblePls[getRandomInt(0, possiblePls.length - 1)];
        selectedPls.forEach(element => {
            if(element.pls === pls){
                isPlsNew = false;
                possiblePls.splice(possiblePls.indexOf(pls), 1);
            }
        });
    }
    while(isPlsNew === false && possiblePls.length > 0);
    return pls;
}

function selectPosition(selectedPls){
    let maxPls = config.width * config.height;
    let possiblePosition = alphabet.substring(0, maxPls);
    let position = 0;
    let isPositionNew = true;
    do{
        isPositionNew = true;
        position = possiblePosition[getRandomInt(0, possiblePosition.length - 1)];
        selectedPls.forEach(element => {
            if(element.position === position){
                isPositionNew = false;
                possiblePosition = possiblePosition.replace(position, "");
            }
        });
    }
    while(isPositionNew === false && possiblePosition.length > 0);
    return position;
}

function displayPls(pls){
    let imgPls = document.createElement("img");
    imgPls.src = pls.pls;
    imgPls.classList.add("pls-gif");
    imgPls.style = "grid-area: " + pls.position + "; width:" + config.gifSize + "px";
    container.appendChild(imgPls);
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}