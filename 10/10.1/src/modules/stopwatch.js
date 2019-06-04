const htmlElements = { 
    output: document.querySelector('.container [data-mode="stopwatch"] .output'),
    buttons: document.querySelectorAll('.container [data-mode="stopwatch"] .buttons button')
};

let startTime;
let time;
let isRunning = false;
let currentTime;

function Stopwatch() {};
  
Stopwatch.prototype.init = function() {
    htmlElements.buttons.forEach(function(button) {
        button.addEventListener('click', function() { buttonClicked(this.dataset.mode);});
    });
  };

  function buttonClicked (mode){
    switch (mode) {
        case 'start':
        if(!isRunning){
        startTime = new Date().getTime();;
        isRunning = true;
        time = setInterval(startTimer, 1000);}
        break;
        case 'stop':
        clearInterval(time);
        isRunning = false; 
        break;
        case 'reset':
        isRunning = false; 
        clearInterval(time);
        htmlElements.output.innerText = '00:00:00';
    }
};

function startTimer(){
    if(isRunning){
    const difference = (new Date().getTime() - startTime) / 1000;
    let seconds = parseInt(difference % 60);
    let minutes = parseInt(difference / 60);
    let hours = parseInt(difference/3600);
    if (hours < 10) {
        hours = '0' + hours;
    }
    if (minutes < 10) {
        minutes = '0' + minutes;
    }
    if (seconds < 10) {
        seconds = '0' + seconds;
    }
    
    htmlElements.output.innerText = `${hours}:${minutes}:${seconds}`;}
}

  export { Stopwatch };