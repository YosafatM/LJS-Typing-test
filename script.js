const testWrapper = document.querySelector(".test-wrapper");
const testArea = document.querySelector("#test-area");
const originText = document.querySelector("#origin-text p").innerHTML;
const resetButton = document.querySelector("#reset");
const theTimer = document.querySelector(".timer");

let timer = [0, 0, 0];
let interval = null;

// Add leading zero to numbers 9 or below (purely for aesthetics):
function toTimeString(timer){
    return (timer[0] < 10 ? "0" : "") + timer[0] + ":" +
        (timer[1] < 10 ? "0" : "") + timer[1] + ":" +
        (timer[2] < 10 ? "0" : "") + timer[2];
}

// Run a standard minute/second/hundredths timer:
function runTime(){
    theTimer.innerHTML = toTimeString(timer);
    timer[2]++;

    if (timer[2] === 100) {
        timer[2] = 0;
        timer[1]++;
    }

    if (timer[1] === 60) {
        timer[1] = 0;
        timer[0]++;
    }
}

// Match the text entered with the provided text on the page:
function checkText() {
    if (originText === testArea.value)
        clearInterval(interval);
}

// Start the timer:
function start(){
    if (interval == null && testArea.value.length === 0)
        interval = setInterval(runTime, 10);
}

// Reset everything:
function reset() {
    testArea.value = "";
    clearInterval(interval);
    interval = null;
    timer = [0, 0, 0];
    theTimer.innerHTML = toTimeString(timer);
}

// Event listeners for keyboard input and the reset button:
testArea.addEventListener("keypress", start, false);
testArea.addEventListener("keyup", checkText, false);
resetButton.addEventListener("click", reset, false);