const htmlElements = { 
    output: document.querySelector('.container [data-mode="stopwatch"] .output'),
    buttons: document.querySelectorAll('.container [data-mode="stopwatch"] .buttons button')
};

let startTime = 0;
let time, hours, minutes, seconds;
let isRunning = false;


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
        isRunning = true;
        startTimer(startTime);}
        break;
        case 'stop':
        clearInterval(time);
        isRunning = false; 
        break;
        case 'reset':
        resetTimer();
        htmlElements.output.innerText = '00:00:00';
        break;
    }
};

function startTimer(duration) {

    const start = new Date().getTime();

    time = setInterval( function() {
    const difference = duration + ((new Date().getTime() - start) / 1000);
    
    seconds = parseInt(difference % 60);
    minutes = parseInt((difference / 60) % 60);
    hours = parseInt(difference/3600);

    startTime = hours*3600 + minutes*60 + seconds;

    if (hours < 10) {
        hours = `0${hours}`;
    }
    if (minutes < 10) {
        minutes = `0${minutes}`;
    }
    if (seconds < 10) {
        seconds = `0${seconds}`;
    }
    
    htmlElements.output.innerText = `${hours}:${minutes}:${seconds}`;
    }, 1000);
}

function resetTimer() {
    clearInterval(time);
    isRunning = false;
    startTime = 0;
}

  export { Stopwatch };